import { useState } from "react";

export default function AISettingsTab({ onSummarize, onGenerate }) {
  const [activeTab, setActiveTab] = useState("summarize");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  // Video generation states
  const [audience, setAudience] = useState("college");
  const [style, setStyle] = useState("explainer");
  const [voice, setVoice] = useState("female");
  const [duration, setDuration] = useState("medium");
  const [music, setMusic] = useState("ambient");
  const [instructions, setInstructions] = useState("");
  const [languages, setLanguages] = useState(["en"]);

  // Summarization states
  const [narration, setNarration] = useState("en");
  const [summary, setSummary] = useState(""); // NEW: summarized output

  const handleLangChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map((opt) => opt.value);
    setLanguages(selected);
  };

  const handleSummarize = () => {
    if (!text && !file) {
      alert("Please provide text or upload a file to summarize.");
      return;
    }

    const result = "This is the summarized content..."; // mock summary
    setSummary(result);

    if (onSummarize) onSummarize({ text, file, narration, result });
    console.log("Summarize input:", { text, file, narration, result });
  };

  const handleGenerate = () => {
    const settings = {
      audience,
      style,
      voice,
      duration,
      music,
      instructions,
      languages,
    };
    if (onGenerate) onGenerate(settings);
    console.log("Final video settings:", settings);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">AI Settings</h2>

      {/* Tab Switcher */}
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

      {/* Summarize Option */}
      {activeTab === "summarize" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Narration Language</label>
            <select
              value={narration}
              onChange={(e) => setNarration(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="en">US English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button
            onClick={handleSummarize}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Summarize...
          </button>

          {/* Summarized Output */}
          {summary && (
            <div>
              <label className="block text-sm font-medium mb-2">Summarized Output</label>
              <textarea
                value={summary}
                readOnly
                className="w-full border rounded-lg p-2 bg-gray-100 cursor-not-allowed"
                rows={5}
              />
            </div>
          )}
        </div>
      )}

      {/* Video Generation Option */}
      {activeTab === "video" && (
        <div className="space-y-6">
          {/* Audience */}
          <div>
            <label className="block text-sm font-medium mb-2">Target Audience</label>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="college">College Student</option>
              <option value="researcher">Researcher</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          {/* Style */}
          <div>
            <label className="block text-sm font-medium mb-2">Video Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="explainer">Educational Explainer</option>
              <option value="cinematic">Cinematic</option>
              <option value="news">News Style</option>
            </select>
          </div>

          {/* Voice Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Voice Type</label>
            <select
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="female">Professional Female</option>
              <option value="male">Professional Male</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium mb-2">Video Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="short">Short (2-3 min)</option>
              <option value="medium">Medium (5-7 min)</option>
              <option value="long">Long (10+ min)</option>
            </select>
          </div>

          {/* Output Translation (Single Select) */}
          <div>
            <label className="block text-sm font-medium mb-2">Output Translation</label>
            <select
              value={languages[0]} // take first language since it's single
              onChange={(e) => setLanguages([e.target.value])}
              className="w-full border rounded-lg p-2"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ta">Tamil</option>
              <option value="te">Telugu</option>
            </select>
          </div>

          {/* Generate Button */}
          <div>
            <button
              onClick={handleGenerate}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Generate Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
