import { Typography } from "@mui/material";
import React from "react";
import { BannerFrame } from "../StyledComponents/banner.styled";

const MainBanner = () => {
  return (
    <BannerFrame alignItems="center" justifyContent="center">
      <Typography>
        FIND <br /> YOUR <br /> SOULPLANT
      </Typography>
    </BannerFrame>
  );
};

export default MainBanner;
