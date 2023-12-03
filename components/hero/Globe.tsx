import React from "react";
import "./Globe.css";

const Globe: React.FC = () => {
  return (
    <div className="w-full h-full">

        <div className="digital-ball">
          <div className="globe">
            <div className="globe-wrap">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle-hor"></div>
              <div className="circle-hor-middle"></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Globe;
