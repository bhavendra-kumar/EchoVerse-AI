import { useState } from "react";

export default function SettingsTab() {
  const [style, setStyle] = useState("explainer");
  const [level, setLevel] = useState("student");
  const [lang, setLang] = useState("en");

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Project Settings</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Style</label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="explainer">Explainer</option>
          <option value="cinematic">Cinematic</option>
          <option value="news">News</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Level</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="student">Student</option>
          <option value="researcher">Researcher</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Language Output</label>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
        </select>
      </div>
    </div>
  );
}
