import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import place from "../../../images/image 12.png";

function OurMarkets(props) {
  return (
    <Box className="mt-16 mx-3 md:mx-6 xl:px-16">
      <Typography variant="h4" className="font-bold">
        Наши магазины
      </Typography>
      <ImageList cols={1} className="mt-8 h-[22.5rem]">
        <ImageListItem>
          <img src={place} alt="special" loading="lazy" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}

export default OurMarkets;
