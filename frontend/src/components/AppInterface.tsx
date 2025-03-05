import React, { useState } from "react";
import UrlSubmit from "./UrlSubmit";
import FileTypeSelection from "./FileTypeSelection";

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
    <div>
      <UrlSubmit getUrl={getUrl} setGetUrl={setGetUrl} />
      <FileTypeSelection />
      <button onClick={handleSubmit}>Send Data</button>
      {response && <div>Server Response: {JSON.stringify(response)}</div>}
    </div>
  );
}
