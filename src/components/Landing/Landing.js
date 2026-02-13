import React, { useState } from "react";
import { Box } from "@mui/material";
import MainModal from "../MainModal/MainModal";
import WhatsappModal from "../WhatsappModal/WhatsappModal";
import Lottie from "lottie-react";

import goAnimation from "./img/start-button.json";
import whatsappAnimation from "./img/whatsapp.json";
import gymLogo from "./img/southfit-logo-empty.png";

export default function Landing({ exercises }) {
  const [openMain, setOpenMain] = useState(false);
  const [openWhatsapp, setOpenWhatsapp] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, #9B1E39 0%, #10242F 50%, #A7B6AC 90%, #DDFE71 100%)",
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 5 }}>
        <img
          src={gymLogo}
          alt="Southfit Logo"
          style={{ width: 250, height: "auto" }}
        />
      </Box>

      {/* Start Button */}
      <Box
        onClick={() => setOpenMain(true)}
        sx={{
          width: 200,
          height: 200,
          cursor: "pointer",
          mb: 4,
        }}
      >
        <Lottie
          animationData={goAnimation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      {/* WhatsApp Button */}
      <Box
        onClick={() => setOpenWhatsapp(true)}
        sx={{
          width: 90,
          height: 90,
          cursor: "pointer",
        }}
      >
        <Lottie
          animationData={whatsappAnimation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      {/* Main Modal */}
      <MainModal
        open={openMain}
        onClose={() => setOpenMain(false)}
        exercisesList={exercises}
      />

      {/* WhatsApp Modal */}
      <WhatsappModal
        open={openWhatsapp}
        onClose={() => setOpenWhatsapp(false)}
      />
    </Box>
  );
}