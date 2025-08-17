import React from "react";

export default function ServiceSelector({ services, setServices }) {
  const allServices = ["github", "weather", "catfact", "chuck"];

  const toggleService = (service) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  return (
    <div className="p-3 border rounded mb-4">
      <h3 className="text-lg font-bold mb-2">Select Services</h3>
      {allServices.map((service) => (
        <label key={service} className="block">
          <input
            type="checkbox"
            checked={services.includes(service)}
            onChange={() => toggleService(service)}
          />{" "}
          {service}
        </label>
      ))}
    </div>
  );
}
