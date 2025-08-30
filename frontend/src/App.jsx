import Header from "./components/Header";
import Tabs from "./components/Tabs";
import FeatureCards from "./components/FeatureCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <FeatureCards />
      <Tabs />
    </div>
  );
}
