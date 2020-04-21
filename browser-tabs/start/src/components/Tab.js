import React, { useState } from "react";

export default function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e) {
    setHighlightStyle({ left: e.nativeEvent.layerX - 150, opacity: 0.8 });
  }

  function hideHighlight() {
    setHighlightStyle({ left: 0, opacity: 0 });
  }
  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}
