import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AISettingsTab() {
  const location = useLocation();
  const { text: initialText, file } = location.state || {};

  const [text, setText] = useState(initialText || "");
  const [fileContent, setFileContent] = useState("");

  const [summary, setSummary] = useState("");
  const [activeTab, setActiveTab] = useState("summarize");
  const [narration, setNarration] = useState("en");

  // Automatically read file content if file exists
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFileContent(reader.result);
      reader.readAsText(file);
    }
  }, [file]);

  const handleSummarize = () => {
    const contentToSummarize = text + "\n" + fileContent;
    if (!contentToSummarize.trim()) {
      alert("No text or file content to summarize.");
      return;
    }

    // Mock summary
    setSummary("This is the summarized content...");
    console.log("Summarizing:", contentToSummarize);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">AI Settings</h2>

      <div className="flex space-x-4 border-b pb-2">
        <button
          className={`px-4 py-2 rounded-t-lg ${activeTab === "summarize" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("summarize")}
        >
          Summarize
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${activeTab === "video" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("video")}
        >
          Generate Video
        </button>
      </div>

      {activeTab === "summarize" && (
        <div className="space-y-4">
          <textarea
            value={text || fileContent}
            readOnly
            className="w-full border p-2 rounded-lg bg-gray-100"
            rows={6}
          />
          <button
            onClick={handleSummarize}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Summarize
          </button>

          {summary && (
            <div>
              <label className="block text-sm font-medium mb-2">Summary:</label>
              <textarea
                value={summary}
                readOnly
                className="w-full border p-2 rounded-lg bg-gray-100"
                rows={5}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
