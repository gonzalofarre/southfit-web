import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MainModal from "../MainModal/MainModal";
import Lottie from "lottie-react";
import goAnimation from "./img/start-button.json";
import gymLogo from "./img/southfit-logo-empty.png"; // <-- importá el logo

export default function Landing({ exercises }) {
  const [open, setOpen] = useState(false);
  console.log(exercises);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #9B1E39 0%, #10242F 50%, #A7B6AC 90%, #DDFE71 100%)",
      }}
    >
      {/* Logo en el tope */}
      <Box sx={{ mb: 5 }}>
        <img
          src={gymLogo}
          alt="Asouthfit Logo"
          style={{ width: 250, height: "auto" }} // ajustá tamaño si querés
        />
      </Box>
      {/* Lottie Button */}
      <Box
        onClick={() => setOpen(true)}
        sx={{
          width: 200,
          height: 200,
          cursor: "pointer",
          mb: 5,
        }}
      >
        <Lottie
          animationData={goAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <MainModal
        open={open}
        onClose={() => setOpen(false)}
        exercisesList={exercises}
      />
    </Box>
  );
}