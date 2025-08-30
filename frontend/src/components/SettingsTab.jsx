export default function SettingsTab() {
  return (
    <div className="space-y-4">
      {/* Style */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Style</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
          <option>Explainer</option>
          <option>Cinematic</option>
          <option>News</option>
        </select>
      </div>

      {/* Level */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Level</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
          <option>Student</option>
          <option>Researcher</option>
        </select>
      </div>

      {/* Output Language */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Output Language</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </select>
      </div>
    </div>
  );
}
