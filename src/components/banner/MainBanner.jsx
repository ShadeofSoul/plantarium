import { Stack, Typography } from "@mui/material";
import React from "react";
import { BannerButton, BannerFrame } from "../StyledComponents/banner.styled";

const MainBanner = () => {
  return (
    <BannerFrame
      direction="row"
      alignItems="center"
      justifyContent="space-around"
    >
      <Stack alignItems="center">
        <Typography>
          FIND <br /> YOUR <br /> SOULPLANT
        </Typography>
        <BannerButton variant="outlined">
          SHOP NOW &#8594;
        </BannerButton>
      </Stack>

      <img
        src="https://i.pinimg.com/originals/ac/98/ce/ac98ce1eb6858366478a47b634ba8bd2.gif"
        alt=""
      />
    </BannerFrame>
  );
};

export default MainBanner;
