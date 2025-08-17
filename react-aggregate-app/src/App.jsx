import React, { useState } from "react";
import AggregateForm from "./components/AggregateForm";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Service Aggregator</h1>
      <AggregateForm onResult={setResult} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
