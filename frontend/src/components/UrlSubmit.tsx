import React from "react";

export default function UrlSubmit({ getUrl, setGetUrl }) {
  console.log(getUrl);

  return (
    <div>
      <label htmlFor="urlInput">Enter URL:</label>
      <input
        id="urlInput"
        type="text"
        value={getUrl}
        onChange={(e) => setGetUrl(e.target.value)}
        placeholder="Enter URL"
      />
    </div>
  );
}
