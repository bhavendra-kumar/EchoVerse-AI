import React from "react";

export default function SettingsTab({
  audienceLevel, setAudienceLevel,
  videoStyle, setVideoStyle,
  narrationLang, setNarrationLang,
  voiceType, setVoiceType,
  videoDuration, setVideoDuration,
  backgroundMusic, setBackgroundMusic,
  customInstructions, setCustomInstructions
}) {
  return (
    <div id="settings-tab" className="tab-pane active">
      <div className="settings-grid">
        <div className="form-group">
          <label className="form-label">Target Audience</label>
          <select className="form-select" value={audienceLevel} onChange={(e) => setAudienceLevel(e.target.value)}>
            <option value="elementary">Elementary Student (Ages 6-11)</option>
            <option value="middle">Middle School (Ages 12-14)</option>
            <option value="high">High School (Ages 15-18)</option>
            <option value="college">College Student</option>
            <option value="professional">Professional/Expert</option>
            <option value="researcher">Academic Researcher</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Video Style</label>
          <select className="form-select" value={videoStyle} onChange={(e) => setVideoStyle(e.target.value)}>
            <option value="educational">📚 Educational Explainer</option>
            <option value="cinematic">🎬 Cinematic Storytelling</option>
            <option value="news">📰 Fast-Paced News Bulletin</option>
            <option value="presentation">💼 Professional Presentation</option>
            <option value="animated">🎨 Animated Infographic</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Narration Language</label>
          <select className="form-select" value={narrationLang} onChange={(e) => setNarrationLang(e.target.value)}>
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Spanish</option>
            <option value="fr">🇫🇷 French</option>
            <option value="de">🇩🇪 German</option>
            <option value="hi">🇮🇳 Hindi</option>
            <option value="ta">🇮🇳 Tamil</option>
            <option value="zh">🇨🇳 Chinese</option>
            <option value="ja">🇯🇵 Japanese</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Voice Type</label>
          <select className="form-select" value={voiceType} onChange={(e) => setVoiceType(e.target.value)}>
            <option value="professional-male">Professional Male</option>
            <option value="professional-female">Professional Female</option>
            <option value="friendly-male">Friendly Male</option>
            <option value="friendly-female">Friendly Female</option>
            <option value="narrator-deep">Deep Narrator</option>
            <option value="youthful">Youthful Voice</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Video Duration</label>
          <select className="form-select" value={videoDuration} onChange={(e) => setVideoDuration(e.target.value)}>
            <option value="short">Short (2-3 minutes)</option>
            <option value="medium">Medium (5-7 minutes)</option>
            <option value="long">Long (10-15 minutes)</option>
            <option value="detailed">Detailed (20+ minutes)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Background Music</label>
          <select className="form-select" value={backgroundMusic} onChange={(e) => setBackgroundMusic(e.target.value)}>
            <option value="none">No Music</option>
            <option value="subtle">Subtle Ambient</option>
            <option value="upbeat">Upbeat Learning</option>
            <option value="cinematic">Cinematic Score</option>
            <option value="corporate">Corporate Professional</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Custom Instructions (Optional)</label>
        <textarea className="form-textarea" value={customInstructions} onChange={(e) => setCustomInstructions(e.target.value)} placeholder="Add any specific requirements for your video (e.g., 'Focus on practical examples')" />
      </div>
    </div>
  );
}
