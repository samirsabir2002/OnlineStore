import { useEffect, useState } from "react";
import ProductItemStructure from "./ProductItemStructure";
import { CircularProgress } from "@mui/material";

const ProductItem = () => {
  let [Products, setProducts] = useState([]);

  useEffect(() => {
    let GettingProducts = async () => {
      let ResJson;
      try {
        let res = await fetch(
          "https://dummyjson.com/products/category/womens-dresses"
        );
        ResJson = await res.json();
        if (ResJson != null && ResJson.length != 0) {
          setProducts(ResJson.products);
        } else {
          throw new Error("some thing went wrong", ResJson);
        }
      } catch (e) {
        console.error(
          "🚀 ~ file: App.jsx:16 ~ GettingProducts ~ e:",
          e.message
        );
      }
    };
    GettingProducts();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <p className="text-end h4 my-5 fw-bold">Flash Sale</p>
        <div className="row">
          {Products.length === 0 && (
            <div className="col">
              <CircularProgress />
            </div>
          )}
          {Products.map((item) => (
            <div className="col-md-3" key={item.id}>
              <ProductItemStructure products={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductItem;
