import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  // CardActions,
  Button,
  Box,
} from "@mui/material";
// import { StarIcon, FavoriteIcon } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import notFound from "../../../images/notFound/1.png";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductPage({ products }) {
  return (
    <Card className="hover:shadow-lg hover:shadow-[rgba(255, 102, 51, 1)] xl:mx-4">
      <CardMedia
        component="img"
        height="160"
        // products.image ? products.image :
        image={notFound}
        alt={products.name ? products.name : "image"}
      />
      <CardContent m="0">
        <Box className="flex justify-between mb-4">
          <Typography variant="subtitle2" m="0.1rem 0 0 0">
            {products?.salePrice} so'm
          </Typography>{" "}
          <FavoriteIcon color="disabled" size="small" />
        </Box>
        <Typography variant="caption">
          {products?.info}
        </Typography>
        <Box className="flex justify-start my-1">
          <StarIcon
            color="disabled"
            size="small"
            className="color-[rgba(255, 102, 51, 1)]"
          />
          <StarIcon
            color="disabled"
            size="small"
            className="text-[rgba(255, 102, 51, 1)]"
          />
          <StarIcon
            color="disabled"
            size="small"
            className="text-[rgba(255, 102, 51, 1)]"
          />
          <StarIcon
            color="disabled"
            size="small"
            className="text-[rgba(255, 102, 51, 1)]"
          />
          <StarIcon
            color="disabled"
            size="small"
            className="text-[rgba(255, 102, 51, 1)]"
          />
        </Box>
        <Button
          variant="outlined"
          color="success"
          className="text-[0.85rem] w-full mt-1"
          size="large"
        >
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductPage;
