import React, { useState } from "react";

const Menubar = () => {
  const [showMasterList, setShowMasterList] = useState(false);
  const [showTaxCollectionList, setShowTaxCollectionList] = useState(false);
  
  const handleMasterClick = () => {
    setShowMasterList(!showMasterList);
  };
  const handleListItemClick = (event) => {
    event.stopPropagation();
    setShowTaxCollectionList(!showTaxCollectionList);
  };
  return (
    <div>
      <div
        className="bg-success text-light pt-5 text-center"
        style={{ height: "100vh", width: "250px" }}
      >
        <div className="menudiv">
          <a href="#" className="menulink">
            Dashboard
          </a>
        </div>
        <div className="menudiv">
          <a href="#" className="menulink">
            Complaint
          </a>
        </div>
        <div className="menudiv">
          <a
            href="#"
            className="menulink"
            onClick={handleMasterClick}
          >
            Master
            {showMasterList && (
              <ul style={{ listStyleType: "none", fontSize: "15px" }} className="menudiv">
                <li onClick={handleListItemClick} className="menudiv">
                  <a href="#" className="menulink">Tax Management</a>
                 
                </li>
                <li onClick={handleListItemClick} className="menudiv">
                  <a href="#" className="menulink">Tax Collection</a>
                  {showTaxCollectionList && (
                    <ul style={{ listStyleType: "none", fontSize: "15px" }}>
                      <li><a href="#" className="menulink">House Tax Collection</a></li>
                      <li><a href="#" className="menulink">Water Tax Collection</a></li>
                    </ul>
                  )}             
                </li>
              </ul>
            )}
          </a>
        </div>
        {/* <div className="menudiv">
          <a href="#" className="menulink">
            Complaint
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Menubar;
