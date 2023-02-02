
import React from "react";

function App() {
  const sunsets = [
    "https://picsum.photos/id/28/367/267",
    "https://picsum.photos/id/29/4000/2670",
    "https://picsum.photos/id/19/367/267",
    "https://picsum.photos/id/26/4209/2769",
    "https://picsum.photos/id/9/5000/3269"
    
    
  ];

  return (
    <div>
      <h1> Best Sunset Pictures</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {sunsets.map((sunset, index) => (
          <img
            key={index}
            src={sunset}
            alt={`sunset-${index}`}
            style={{ width: "200px", height: "300px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
