import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputTab() {
  const [option, setOption] = useState("text"); // text | file
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (option === "text" && !input) {
      alert("Please enter some text.");
      return;
    }
    if (option === "file" && !file) {
      alert("Please upload a file.");
      return;
    }

    // Navigate to AISettingsTab and pass state
    navigate("/settings", {
      state: {
        text: option === "text" ? input : "",
        file: option === "file" ? file : null,
      },
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Upload or Enter Text</h2>

      {/* Option Toggle */}
      <div className="flex space-x-6 mb-6">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="inputOption"
            value="text"
            checked={option === "text"}
            onChange={() => setOption("text")}
            className="text-indigo-600"
          />
          <span>Enter Text</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="inputOption"
            value="file"
            checked={option === "file"}
            onChange={() => setOption("file")}
            className="text-indigo-600"
          />
          <span>Upload File</span>
        </label>
      </div>

      {/* Text Input */}
      {option === "text" && (
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          rows={6}
        />
      )}

      {/* File Upload */}
      {option === "file" && (
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      )}

      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Analyze Content 🔎
        </button>
      </div>
    </div>
  );
}
