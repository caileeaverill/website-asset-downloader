import { TfiReload } from "react-icons/tfi";

export default function UrlSubmit({ getUrl, setGetUrl }) {
  return (
    <div className="flex items-center gap-6">
      <input
        className="bg-white text-neutral-900 py-2 px-4 rounded-md w-full"
        id="urlInput"
        type="text"
        value={getUrl}
        onChange={(e) => setGetUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <TfiReload className="text-3xl" />
    </div>
  );
}