import React from "react";

export default function InputTab({
  contentSource, setContentSource,
  contentText, setContentText,
  documentFile, setDocumentFile,
  articleUrl, setArticleUrl,
  analyzeContent
}) {
  return (
    <div id="input-tab" className="tab-pane active">
      <div className="form-group">
        <label className="form-label">Content Source</label>
        <select className="form-select" id="contentSource" value={contentSource} onChange={(e) => setContentSource(e.target.value)}>
          <option value="text">Direct Text Input</option>
          <option value="file">Upload Document</option>
          <option value="url">Web Article URL</option>
        </select>
      </div>

      {contentSource === "text" && (
        <div id="textInput" className="form-group">
          <label className="form-label">Your Content</label>
          <textarea className="form-textarea" id="contentText" value={contentText} onChange={(e) => setContentText(e.target.value)} />
        </div>
      )}

      {contentSource === "file" && (
        <div id="fileInput" className="form-group">
          <label className="form-label">Upload Document</label>
          <input type="file" className="form-input" accept=".txt,.pdf,.docx" id="documentFile" onChange={(e) => setDocumentFile(e.target.files[0])} />
          <div className="alert"><strong>Demo Mode:</strong> File upload functionality would connect to document processing APIs in the full version.</div>
        </div>
      )}

      {contentSource === "url" && (
        <div id="urlInput" className="form-group">
          <label className="form-label">Article URL</label>
          <input type="url" className="form-input" id="articleUrl" placeholder="https://example.com/article" value={articleUrl} onChange={(e) => setArticleUrl(e.target.value)} />
          <div className="alert"><strong>Demo Mode:</strong> URL scraping would be implemented with web scraping APIs in the full version.</div>
        </div>
      )}

      <button className="btn" onClick={analyzeContent}>🔍 Analyze Content</button>
    </div>
  );
}
