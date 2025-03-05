import React, { useState } from "react";
import UrlSubmit from "./UrlSubmit";

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
      <button onClick={handleSubmit}>Send Data</button>
      {response && <div>Server Response: {JSON.stringify(response)}</div>}
    </div>
  );
}

// import React, { useState } from 'react';
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';
// import ComponentC from './ComponentC';

// export default function AppInterface() {
//   const [dataA, setDataA] = useState('');
//   const [dataB, setDataB] = useState('');
//   const [dataC, setDataC] = useState('');
//   const [response, setResponse] = useState(null);

//   const handleSubmit = async () => {
//     try {
//       const res = await fetch('http://localhost:8000/your-endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           dataA,
//           dataB,
//           dataC,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error('Failed to submit data');
//       }

//       const result = await res.json();
//       setResponse(result);  // Store the response from the server
//     } catch (error) {
//       console.error('There was an error sending data to the server:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>App Interface</h2>

//       <ComponentA value={dataA} setValue={setDataA} />
//       <ComponentB value={dataB} setValue={setDataB} />
//       <ComponentC value={dataC} setValue={setDataC} />

//       <button onClick={handleSubmit}>Send Data</button>

//       {response && <div>Server Response: {JSON.stringify(response)}</div>}
//     </div>
//   );
// }
