import React from "react";

export default function PreviewTab({
  summaryHtml,
  progressVisible,
  progressText,
  progressPercent,
  isGenerating,
  generateVideo,
  videoGenerated,
  finalPreviewInfo,
  playPause,
  downloadVideo,
  shareVideo,
  resetAll
}) {
  return (
    <div id="preview-tab" className="tab-pane active">
      <div className="sample-content">
        <h3>📋 Generated Summary Preview</h3>
        <div id="summaryPreview" dangerouslySetInnerHTML={ summaryHtml ? { __html: summaryHtml } : { __html: `<p>No summary yet. Click Analyze Content first.</p>` } } />
        {finalPreviewInfo && (
          <p style={{marginTop:12}}>
            <strong>Estimated Video Length:</strong> {finalPreviewInfo.durationText}<br/>
            <strong>Complexity Level:</strong> {finalPreviewInfo.audienceLevel}
          </p>
        )}
      </div>

      <div className={`progress-container ${progressVisible ? "show" : ""}`}>
        <div className="progress-text" id="progressText">{progressText}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{width: `${progressPercent}%`}}></div>
        </div>
      </div>

      <div className="video-preview" id="videoPreview">
        <div id="previewContent">
          {videoGenerated ? (
            <div style={{textAlign:'center'}}>
              <div style={{fontSize: '4rem', marginBottom:16}}>✅</div>
              <h2 style={{color:'#10b981', marginBottom:8}}>Video Generated Successfully!</h2>
              <div style={{textAlign:'left', maxWidth:420, margin:'0 auto'}}>
                <p>📊 Audience: {finalPreviewInfo?.audienceLevel}</p>
                <p>🎨 Style: {finalPreviewInfo?.videoStyle}</p>
                <p>🗣 Language: {finalPreviewInfo?.narrationLang}</p>
                <p>🎵 Voice: {finalPreviewInfo?.voiceType}</p>
                <p>⏱ Duration: {finalPreviewInfo?.durationText}</p>
              </div>
            </div>
          ) : (
            <>
              🎬 Your AI-generated video will appear here
              <br/><br/>
              <small>Click "Generate AI Video" to start the AI processing</small>
            </>
          )}
        </div>

        <div className="video-controls" style={{display: videoGenerated ? 'flex' : 'none'}} id="videoControls">
          <button className="control-btn" onClick={playPause}>▶ Play</button>
          <button className="control-btn" onClick={downloadVideo}>⬇ Download</button>
          <button className="control-btn" onClick={shareVideo}>🔗 Share</button>
        </div>
      </div>

      <div style={{textAlign: 'center', marginTop: 20}}>
        <button className="btn" onClick={generateVideo} id="generateBtn" disabled={isGenerating}>
          {isGenerating ? '⏳ Generating...' : '🚀 Generate AI Video'}
        </button>
        <button className="btn btn-secondary" onClick={resetAll} style={{marginLeft:10}}>🔄 Start Over</button>
      </div>
    </div>
  );
}
