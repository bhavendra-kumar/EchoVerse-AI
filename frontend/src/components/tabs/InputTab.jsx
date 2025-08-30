import { useState } from "react";

export default function InputTab() {
  const [input, setInput] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Upload or Enter Text</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your text here..."
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        rows={6}
      />

      <div className="mt-4">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
