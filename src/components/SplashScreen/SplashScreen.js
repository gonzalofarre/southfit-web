import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import image from "./img/southfit-logo.png"

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 segundos
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "black",
      }}
    >
      <img
        src={image}
        alt="SouthFit Logo"
        style={{ width: "90%", height: "auto" }}
      />
    </Box>
  );
}   