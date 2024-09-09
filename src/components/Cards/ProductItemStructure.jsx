import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";

const ProductItemStructure = ({ products }) => {
  return (
    <>
      <Box sx={{ maxWidth: 345, margin: "5px 0" }}>
        <CardMedia
          sx={{ height: "50vh", bgcolor: "#e4e9ef", borderRadius: 1 }}
          image={`${products.thumbnail}`}
          title={`${products.title}`}
        />

        <CardContent className="text-center ">
          <Typography
            className=" ms-auto "
            variant="caption"
            sx={{ color: "text.secondary" }}
          >
            Women's Fashion
          </Typography>
          <Typography variant="h5" component="div">
            {products.title}
          </Typography>
          <Typography>{products.price} AED </Typography>
          <div className="row">
            <div className="col-md-6 d-flex p-0">
              <Typography
                className=" ms-auto "
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                (reviews {products.reviews.length})
              </Typography>
            </div>

            <div className="col-md-6 d-flex ">
              <Rating
                className="me-auto"
                size="small"
                name="read-only"
                value={products.rating}
                readOnly
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6 p-0 m-0">
              <Button variant="contained" size="small">
                Add To Cart
              </Button>
            </div>
            <div className="col-md-6 p-0 m-0">
              <Button variant="contained" size="small">
                Quick View
              </Button>
            </div>
          </div>
        </CardContent>
      </Box>
    </>
  );
};

export default ProductItemStructure;
