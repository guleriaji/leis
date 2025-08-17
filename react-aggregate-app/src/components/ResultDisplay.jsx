import React from "react";

export default function ResultDisplay({ result }) {
  if (!result) return null;

  return (
    <div className="mt-4 p-4 border rounded bg-gray-100">
      <h3 className="text-lg font-bold mb-2">Results</h3>
      <pre className="text-sm bg-white p-2 rounded">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}
