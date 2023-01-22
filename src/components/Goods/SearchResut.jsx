import React, { useState } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import ProductPage from "./Product/ProductPage";

function SearchResult({ word }) {
  // Reduxdan olish kerak
  const [products, setProducts] = useState([]);
  // Reduxdan olish kerak
  const [isLoading, setIsLoading] = useState(true);

  if (!products.length && !isLoading) return "";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className="bg-[#FBF8EC] px-3 md:px-6 xl:px-16 mt-8">
      <Typography variant="h5" className="pt-10 font-bold xl:mx-4">
        Результат поиска
      </Typography>
      <Grid container spacing={2} className="mt-2">
        {products.map((products) => {
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

export default SearchResult;