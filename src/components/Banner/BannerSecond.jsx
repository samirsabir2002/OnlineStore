import Button from "@mui/material/Button";

import React from "react";

const BannerSecond = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 d-flex">
            <div className="backgroundImageStyling Banner44 d-flex"></div>
          </div>
          <div className="col-md-6">
            <div style={{ backgroundColor: "#f8713a" }}>
              <div className="backgroundImageStyling d-flex">
                <div className="my-auto mx-auto">
                  <p className="text-white  text-center m-0"> UP TO </p>
                  <p className="text-white h1  text-center m-0">OFF 25% </p>
                  <p className="text-white fs-6 fw-semibold text-center mt-2">
                    FOR ALL KINDS OF <span className="fw-bold">BAGS ITEM</span>
                  </p>
                  <Button
                    color="info"
                    variant="outlined"
                    className="d-flex mx-auto text-white"
                    size="small"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="backgroundImageStyling Banner45 d-flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerSecond;
