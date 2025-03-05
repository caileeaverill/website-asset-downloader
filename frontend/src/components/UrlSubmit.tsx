export default function UrlSubmit({ getUrl, setGetUrl }) {
  return (
    <div>
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
