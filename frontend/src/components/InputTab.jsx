export default function InputTab() {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">Enter Text</label>
      <textarea
        placeholder="Paste your script here..."
        className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      ></textarea>

      <label className="block text-gray-700 font-medium mt-4 mb-2">Or Upload File</label>
      <input
        type="file"
        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 
        file:rounded-lg file:border-0 file:text-sm file:font-medium
        file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
      />
    </div>
  );
}
