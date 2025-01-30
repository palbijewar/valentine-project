import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function ValentineProposal() {
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });
  const [showGifOnly, setShowGifOnly] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); 

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 80) + "%";
    const randomY = Math.floor(Math.random() * 80) + "%";
    setNoPosition({ top: randomY, left: randomX });
  };

  const handleYesClick = () => {
    setShowGifOnly(true);  
    setShowConfetti(true);  
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {!showGifOnly && (  
        <>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            <img
              src="https://www.icegif.com/wp-content/uploads/2022/01/icegif-500.gif"
              alt="Cute Valentine GIF"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1
              }}
            />
          </div>

          <div style={{ position: "absolute", padding: "2rem", backgroundColor: "white", borderRadius: "1rem", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", textAlign: "center", backdropFilter: "blur(10px)", zIndex: 1 }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#f472b6" }}>Will you be my Valentine? 💖</h1>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.5rem", justifyContent: "center", position: "relative" }}>
              <button
                onClick={handleYesClick} 
                style={{ padding: "0.75rem 2rem", background: "linear-gradient(to right, #34d399, #10b981)", color: "white", fontWeight: "bold", borderRadius: "0.75rem", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", transform: "scale(1)", transition: "all 0.2s ease-in-out", cursor: "pointer" }}
              >
                Yes ✅
              </button>
              <motion.button
                style={{ position: "absolute", top: noPosition.top, left: noPosition.left, padding: "0.75rem 2rem", background: "linear-gradient(to right, #f87171, #f43f5e)", color: "white", fontWeight: "bold", borderRadius: "0.75rem", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", transform: "scale(1)", transition: "all 0.2s ease-in-out", cursor: "pointer" }}
                onMouseEnter={moveNoButton}
              >
                No ❌
              </motion.button>
            </div>
          </div>
        </>
      )}

      {showGifOnly && ( 
        <>
          <img
            src="https://www.icegif.com/wp-content/uploads/2022/01/icegif-500.gif"
            alt="Cute Valentine GIF"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1
            }}
          />
          {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />} {}
        </>
      )}
    </div>
  );
}
