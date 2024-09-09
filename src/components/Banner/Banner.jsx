import { Box, Container, Grid2 } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 d-flex">
            <div className="backgroundImageStyling ImageTwo d-flex">
              <div className="text-white mt-4 ms-5">
                <p className="fs-5  text-end m-0">DRESS#</p>
                <p className="h2 fw-semibold">WOMEN</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="backgroundImageStyling ImageOne d-flex">
              <div className="text-white my-auto ms-5">
                <p className="fs-5  m-0 text-end">New#</p>
                <p className="h2 fw-semibold">SPORTS</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ backgroundColor: "rgb(255, 169, 84)" }}>
              <div className="Image d-flex">
                <div className="my-auto" style={{ marginLeft: "12rem" }}>
                  <p className="text-white  text-end m-0"> EXCLUSIVE#</p>
                  <p className="text-white h1  text-end m-0">
                    {" "}
                    MEN'S <br />
                    COLLCETIONS
                  </p>
                  <p className="text-white fs-6 fw-semibold text-end mt-2">
                    {" "}
                    LATEST COLLCETIONS2024#
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <div>
              <div className="ImageFour backgroundImageStyling  d-flex">
                <div className="my-auto ms-4">
                  <p className="text-white  text-start m-0"> EXCLUSIVE#</p>
                  <p className="text-white h1  text-start m-0">
                    {" "}
                    NEW <br />
                    GADGETS
                  </p>
                  <p className="text-white fs-6 fw-semibold text-start mt-2">
                    {" "}
                    LATEST COLLCETIONS2024#
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div
              className="backgroundImageStyling  d-flex "
              style={{ backgroundColor: "rgb(118, 210, 202)" }}
            >
              <div className="text-white d-flex flex-column text-center my-auto mx-auto">
                <p className="fs-5  m-0">EXPOLORE#</p>
                <p className="h2 fw-semibold">COUPONS</p>
                <p className="h6 mt-4">LATEST_COLLECTION2024#</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="backgroundImageStyling ImageThree d-flex">
              <div className="text-white ms-auto mt-5 me-5">
                <p className="fs-5  m-0 text-end">SUNGLASSES#</p>
                <p className="h2 fw-semibold">OFF 50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
