import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";

export const BannerFrame = styled(Stack)(({ theme }) => ({
  backgroundImage: `url(${"https://i.pinimg.com/originals/f0/a9/0c/f0a90c2bc63dfa352e39c28dfff16d1f.jpg"})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

export const BannerButton = styled(Button)(({}) => ({
  fontSize: "3vw",
  color: "#eebb4f",
  borderRadius: "20px",
  borderWidth: "5px",
}));
