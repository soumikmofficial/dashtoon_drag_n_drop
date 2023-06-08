import { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";

function App() {
  const [pages, setPages] = useState([{ pageData: "" }]);
  const handleDrag = (_: any, draggableData: any) => {
    const { x, y } = draggableData;
    console.log("can use x and y for calculation stuff", x, y);
  };

  return (
    <div style={{ height: "100vh" }}>
      <button
        onClick={() =>
          setPages((prev) => {
            return [...prev, { pageData: "" }];
          })
        }
      >
        increasse page count
      </button>
      <div
        style={{
          position: "absolute",
          height: 500 * pages.length,
          width: "100%",
          background: "transparent",
          pointerEvents: "all",
        }}
      >
        <Draggable
          onDrag={handleDrag}
          defaultPosition={{ x: 0, y: 0 }} // Set the initial position of the div
          bounds="parent" // Restrict dragging within the parent element
        >
          <div style={{ width: "200px", height: "200px", background: "blue" }}>
            Drag me!
          </div>
        </Draggable>
      </div>

      {pages.map((_, i) => (
        <div style={{ background: "yellow", height: "500px" }}>{i}</div>
      ))}
    </div>
  );
}

export default App;
