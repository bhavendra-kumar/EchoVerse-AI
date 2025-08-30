import { useState } from "react";
import InputTab from "./tabs/InputTab";
import SettingsTab from "./tabs/SettingsTab";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("input");

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Tab Buttons */}
      <div className="flex space-x-4 border-b pb-2 mb-4">
        <button
          className={`px-4 py-2 rounded-t-lg font-medium ${
            activeTab === "input"
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:text-indigo-600"
          }`}
          onClick={() => setActiveTab("input")}
        >
          Input
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-medium ${
            activeTab === "settings"
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:text-indigo-600"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          AI Narration
        </button>
       
      </div>

      {/* Tab Content */}
      {activeTab === "input" && <InputTab />}
      {activeTab === "settings" && <SettingsTab />}
      {activeTab === "preview" && <PreviewTab />}
    </div>
  );
}
