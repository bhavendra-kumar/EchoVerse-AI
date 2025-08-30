import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import InputTab from "./components/InputTab";
import SettingsTab from "./components/SettingsTab";
import PreviewTab from "./components/PreviewTab";
import FeatureCards from "./components/FeatureCards";

export default function App() {
  // content + inputs
  const [contentSource, setContentSource] = useState("text"); // text | file | url
  const [contentText, setContentText] = useState(`Artificial Intelligence (AI) has revolutionized numerous industries and continues to shape our future. Machine learning, a subset of AI, enables computers to learn and improve from experience without being explicitly programmed. Deep learning, which uses neural networks with multiple layers, has achieved remarkable breakthroughs in image recognition, natural language processing, and game playing. AI applications range from virtual assistants like Siri and Alexa to autonomous vehicles and medical diagnosis systems. However, AI also raises important ethical considerations including job displacement, privacy concerns, and the need for algorithmic transparency. As we advance into an AI-driven future, it's crucial to develop these technologies responsibly while ensuring they benefit humanity as a whole.`);

  const [documentFile, setDocumentFile] = useState(null);
  const [articleUrl, setArticleUrl] = useState("");

  // settings
  const [audienceLevel, setAudienceLevel] = useState("college");
  const [videoStyle, setVideoStyle] = useState("educational");
  const [narrationLang, setNarrationLang] = useState("en");
  const [voiceType, setVoiceType] = useState("professional-female");
  const [videoDuration, setVideoDuration] = useState("medium");
  const [backgroundMusic, setBackgroundMusic] = useState("subtle");
  const [customInstructions, setCustomInstructions] = useState("");

  // UI flow + progress
  const [currentTab, setCurrentTab] = useState("input"); // input|settings|preview
  const [progressVisible, setProgressVisible] = useState(false);
  const [progressText, setProgressText] = useState("");
  const [progressPercent, setProgressPercent] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoGenerated, setVideoGenerated] = useState(false);

  // summary preview data
  const [summaryHtml, setSummaryHtml] = useState(null);
  const [finalPreviewInfo, setFinalPreviewInfo] = useState(null);

  // functions
  function analyzeContent() {
    const content = contentText || "";
    if (contentSource === "text" && !content.trim()) {
      alert("Please enter some content to analyze!");
      return;
    }
    // simulate analysis
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const estimatedDuration = Math.max(1, Math.ceil(wordCount / 150));
    const html = (
      `<p><strong>Content Analysis Complete!</strong></p>
      <ul>
        <li>Word count: ${wordCount} words</li>
        <li>Key topics detected: AI, Machine Learning, Deep Learning, Ethics</li>
        <li>Complexity level: Intermediate</li>
        <li>Estimated video length: ${estimatedDuration} minutes</li>
      </ul>
      <p><strong>AI Recommendations:</strong></p>
      <ul>
        <li>Educational explainer style recommended</li>
        <li>Consider adding visual diagrams for neural networks</li>
        <li>Professional narration voice suggested</li>
      </ul>`
    );
    setSummaryHtml(html);
    // auto-switch to settings after a short delay
    setTimeout(() => setCurrentTab("settings"), 900);
  }

  function generateVideo() {
    if (isGenerating) return;
    const content = contentText || "";
    if (contentSource === "text" && !content.trim()) {
      alert("Please add content first!");
      setCurrentTab("input");
      return;
    }
    setIsGenerating(true);
    setProgressVisible(true);
    setProgressPercent(0);
    const steps = [
      "Analyzing content structure...",
      "Generating personalized summary...",
      "Creating visual storyboard...",
      "Synthesizing AI narration...",
      "Rendering video with effects...",
      "Finalizing and optimizing..."
    ];
    let step = 0;
    setProgressText(steps[0]);
    const interval = setInterval(() => {
      step++;
      const pct = Math.min(100, Math.round((step / steps.length) * 100));
      setProgressPercent(pct);
      setProgressText(steps[Math.min(step, steps.length - 1)]);
      if (step >= steps.length) {
        clearInterval(interval);
        completeVideoGeneration();
      }
    }, 1200);
  }

  function completeVideoGeneration() {
    setProgressVisible(false);
    setIsGenerating(false);
    setVideoGenerated(true);

    const info = {
      audienceLevel,
      videoStyle,
      narrationLang,
      voiceType,
      durationText: "6 minutes 23 seconds" // demo static
    };
    setFinalPreviewInfo(info);
    setCurrentTab("preview");
  }

  function resetAll() {
    if (!confirm("Are you sure you want to start over? This will clear all your settings and content.")) return;
    setContentText("");
    setDocumentFile(null);
    setArticleUrl("");
    setAudienceLevel("college");
    setVideoStyle("educational");
    setNarrationLang("en");
    setVoiceType("professional-female");
    setVideoDuration("medium");
    setBackgroundMusic("subtle");
    setCustomInstructions("");
    setProgressVisible(false);
    setProgressPercent(0);
    setIsGenerating(false);
    setVideoGenerated(false);
    setSummaryHtml(null);
    setFinalPreviewInfo(null);
    setCurrentTab("input");
  }

  function playPause() {
    alert("🎬 Video playback would start here in the real app.");
  }
  function downloadVideo() {
    if (!videoGenerated) { alert("Please generate a video first!"); return; }
    alert("📥 Simulated download started — in the full version you'd get an MP4 file.");
  }
  function shareVideo() {
    if (!videoGenerated) { alert("Please generate a video first!"); return; }
    const shareData = {
      title: 'My AI-Generated Video',
      text: 'Check out this amazing video I created with TextToVideo AI!',
      url: window.location.href
    };
    if (navigator.share) {
      navigator.share(shareData).catch(()=>{});
    } else {
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
      window.open(shareUrl, "_blank");
    }
  }

  return (
    <div className="container">
      <Header />
      <div className="main-card">
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <div className="tab-content">
          {currentTab === "input" && (
            <InputTab
              contentSource={contentSource}
              setContentSource={setContentSource}
              contentText={contentText}
              setContentText={setContentText}
              documentFile={documentFile}
              setDocumentFile={setDocumentFile}
              articleUrl={articleUrl}
              setArticleUrl={setArticleUrl}
              analyzeContent={analyzeContent}
            />
          )}

          {currentTab === "settings" && (
            <SettingsTab
              audienceLevel={audienceLevel}
              setAudienceLevel={setAudienceLevel}
              videoStyle={videoStyle}
              setVideoStyle={setVideoStyle}
              narrationLang={narrationLang}
              setNarrationLang={setNarrationLang}
              voiceType={voiceType}
              setVoiceType={setVoiceType}
              videoDuration={videoDuration}
              setVideoDuration={setVideoDuration}
              backgroundMusic={backgroundMusic}
              setBackgroundMusic={setBackgroundMusic}
              customInstructions={customInstructions}
              setCustomInstructions={setCustomInstructions}
            />
          )}

          {currentTab === "preview" && (
            <PreviewTab
              summaryHtml={summaryHtml}
              progressVisible={progressVisible}
              progressText={progressText}
              progressPercent={progressPercent}
              isGenerating={isGenerating}
              generateVideo={generateVideo}
              videoGenerated={videoGenerated}
              finalPreviewInfo={finalPreviewInfo}
              playPause={playPause}
              downloadVideo={downloadVideo}
              shareVideo={shareVideo}
              resetAll={resetAll}
            />
          )}
        </div>
      </div>

      <FeatureCards />
    </div>
  );
}
