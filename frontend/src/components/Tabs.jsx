import React from "react";

export default function Tabs({ currentTab, setCurrentTab }) {
  return (
    <div className="tabs">
      <div className={`tab ${currentTab === "input" ? "active" : ""}`} onClick={() => setCurrentTab("input")}>📝 Input Content</div>
      <div className={`tab ${currentTab === "settings" ? "active" : ""}`} onClick={() => setCurrentTab("settings")}>⚙ AI Settings</div>
      <div className={`tab ${currentTab === "preview" ? "active" : ""}`} onClick={() => setCurrentTab("preview")}>🎥 Generate Video</div>
    </div>
  );
}
