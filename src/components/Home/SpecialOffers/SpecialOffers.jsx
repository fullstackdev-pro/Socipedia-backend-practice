import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import special1 from "../../../images/banner.png";
import special2 from "../../../images/banner-hover.png";

function SpecialOffers(props) {
  return (
    <Box className="mt-16 ">
      <Typography variant="h4" className="font-bold mx-3 md:mx-6 xl:mx-16 xl:pl-3">
        Специальные предложения
      </Typography>
      <ImageList
        height="170"
        className="md:mr-6 md:ml-3 xl:mx-16"
        cols={window.innerWidth < 361 ? 1 : window.innerWidth < 769 ? 2 : 3}
      >
        <ImageListItem>
          <img src={special2} alt="special" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img
            src={special1}
            alt="special"
            loading="lazy"
            className="px-3 rounded-xl md:px-0 md:py-2"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}

export default SpecialOffers;
