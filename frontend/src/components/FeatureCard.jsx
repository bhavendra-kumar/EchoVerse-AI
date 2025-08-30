const features = [
  {
    title: "AI Narration",
    description: "Natural text-to-speech voices powered by AI",
  },
  {
    title: "Adaptive Visuals",
    description: "Dynamic video generation with relevant stock footage",
  },
  {
    title: "Multi-language",
    description: "Supports multiple languages and regional accents",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-indigo-600">{f.title}</h3>
          <p className="text-gray-600 mt-2">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
