import React, { useRef } from "react";

const ScrollToTop = () => {

  const topRef = useRef(null);

 
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
     
      <div ref={topRef}></div>
  
      <div style={{ height: "1500px", padding: "20px" }}>
        <h1>Scroll Down</h1>
        <p>
          This is a long page with a lot of content. Scroll down and click the
          button to go back to the top smoothly.
        </p>
      </div>
   
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollToTop;
