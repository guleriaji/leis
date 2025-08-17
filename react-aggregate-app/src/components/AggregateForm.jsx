import React, { useState } from "react";
import ServiceSelector from "./ServiceSelector";

export default function AggregateForm({ onResult }) {
  const [services, setServices] = useState([]);
  const [params, setParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleParamChange = (service, field, value) => {
    setParams((prev) => ({
      ...prev,
      [service]: { ...prev[service], [field]: value },
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/aggregate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ services, params }),
      });
      const data = await res.json();
      onResult(data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded">
      <ServiceSelector services={services} setServices={setServices} />

      {services.includes("github") && (
        <input
          type="text"
          placeholder="GitHub username"
          className="border p-2 mb-2 block"
          onChange={(e) => handleParamChange("github", "username", e.target.value)}
        />
      )}

      {services.includes("weather") && (
        <input
          type="text"
          placeholder="City name"
          className="border p-2 mb-2 block"
          onChange={(e) => handleParamChange("weather", "city", e.target.value)}
        />
      )}

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Fetch Data"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
