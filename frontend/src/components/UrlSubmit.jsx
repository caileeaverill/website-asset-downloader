export default function UrlSubmit({ getUrl, setGetUrl }) {
  return (
    <>
      <input
        className="bg-white text-neutral-900 py-2 px-4 rounded-md w-full"
        id="urlInput"
        type="text"
        value={getUrl}
        onChange={(e) => setGetUrl(e.target.value)}
        placeholder="Enter URL"
      />
    </>
  );
}