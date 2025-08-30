import React from "react";

export default function FeatureCards(){
  return (
    <div className="feature-cards">
      <div className="feature-card">
        <div className="feature-icon">🧠</div>
        <h3>AI-Powered Summarization</h3>
        <p>Advanced natural language processing extracts key concepts and creates coherent narratives tailored to your audience level.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🌍</div>
        <h3>Multi-Language Support</h3>
        <p>Transform content from any language into videos with native-quality narration in 50+ languages including Tamil, Hindi, and Spanish.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🎨</div>
        <h3>Adaptive Visual Styles</h3>
        <p>Choose from educational slides, cinematic visuals, news bulletins, or animated infographics that match your content perfectly.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🎯</div>
        <h3>Personalized Learning</h3>
        <p>AI adjusts complexity, vocabulary, and pacing based on your target audience - from elementary students to PhD researchers.</p>
      </div>
    </div>
  );
}
