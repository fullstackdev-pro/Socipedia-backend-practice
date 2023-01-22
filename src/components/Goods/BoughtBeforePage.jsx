import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import ProductPage from "./Product/ProductPage";
import axios from "axios";

function BoughtBeforePage({ home }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getProducts() {
    const allProducts = await axios({
      method: "get",
      url: "http://localhost:3001/api/boughtBeforeGoods",
    });

    setProducts(allProducts.data.data);
  }

  useEffect(() => {
    getProducts();
    setIsLoading(false);
  }, []);

  if (!products.length && !isLoading)
    return (
      <div className="text-center mt-12 text-[1.5rem]">
        you haven't bought anything :({" "}
      </div>
    );

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className="bg-[#FBF8EC] px-3 md:px-6 xl:px-16 mt-8">
      <Typography variant="h5" className="pt-10 font-bold xl:mx-4">
        Покупали раньше
      </Typography>
      <Grid container spacing={2} className="mt-2">
        {products.map((products, index) => {
          if (home && window.innerWidth > 768 && index > 3) return null;
          if (
            home &&
            window.innerWidth <= 768 &&
            window.innerWidth > 360 &&
            index > 2
          )
            return null;
          if (home && window.innerWidth <= 360 && index > 3) return null;

          return (
            <Grid key={products._id} item xs={6} sm={4} lg={3}>
              <ProductPage products={products} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default BoughtBeforePage;
