export default function UrlSubmit({ getUrl, setGetUrl }) {
  return (
    <>
      <input
        className="bg-white text-neutral-900 p-2 rounded-md w-full"
        id="urlInput"
        type="text"
        value={getUrl}
        onChange={(e) => setGetUrl(e.target.value)}
        placeholder="Enter URL"
      />
    </>
  );
}