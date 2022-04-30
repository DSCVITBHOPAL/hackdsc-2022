import React from "react";
import { Fab } from "@material-ui/core";
import "../Sections.css";
import "./BottomInfo.css";

function BottomInfo(props) {
  return (
    <div className={"section"}>
      <div className={"bottom-container"}>
        <div id="make-impact">Make Impact</div>
        <a
          style={{ textDecoration: "none" }}
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab variant={"extended"} className={"home-button"}>
            Apply Now!
          </Fab>
        </a>
        <div id="shadow"></div>
      </div>
    </div>
  );
}

export default BottomInfo;
