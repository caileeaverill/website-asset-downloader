import { useState } from "react";
import UrlSubmit from "./UrlSubmit";
import FileTypeSelection from "./FileTypeSelection";
import Buttons from "./Buttons";

export default function AppInterface() {
  const [getUrl, setGetUrl] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/your-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: getUrl,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await res.json();
      setResponse(result); // Store the response from the server
    } catch (error) {
      console.error("There was an error sending data to the server:", error);
    }
  };

  return (
    <div className="bg-neutral-800 p-6 flex flex-col gap-4 rounded-2xl">
      <UrlSubmit getUrl={getUrl} setGetUrl={setGetUrl} />
      <FileTypeSelection />
      <Buttons className={"bg-blue-500 hover:bg-blue-600"} text="Send Data" onClick={handleSubmit} />
      {response && <div>Server Response: {JSON.stringify(response)}</div>}
    </div>
  );
}
