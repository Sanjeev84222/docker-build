import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    let progressBar = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScroll(scroll);
    };
    window.addEventListener("scroll", progressBar);
    return () => window.removeEventListener("scroll", progressBar);
  }, []);
  return (
    <div
      style={{
        height: "80px",

        borderBottom: "solid 2px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <Link to="/signup">
          <button
            style={{
              backgroundColor: "#fff",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "6px",
              width: "96px",
              height: "29px",
              border: "rgba(228, 77, 38, 1) solid",
            }}
          >
            Log In
          </button>
        </Link>
        <Link to="/signin">
          <button
            style={{
              backgroundColor: "#A9C9FF",
              backgroundImage:
                "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
              borderRadius: "6px",
              color: "#fff",
              width: "111px",
              height: "29px",
              border: "none",
            }}
          >
            Register
          </button>
        </Link>
      </div>
      <div id="progressBarContainer">
        <div
          id="progressBar"
          style={{
            transform: `scale(${scroll}, 1)`,
            opacity: `${scroll}`,
          }}
        />
      </div>
    </div>
  );
};
