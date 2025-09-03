import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Stack,
  Box,
  Divider,
} from "@mui/material";
const MainModal = ({ open, onClose, exercisesList }) => {
  const [day, setDay] = useState(1);
  const [dailyExercises, setDailyExercises] = useState([]);
  useEffect(() => {
    if (open) {
      // cuando se abre el modal arranca siempre en Día 1
      setDay(1);
      pickExercises();
    }
  }, [open]);
  const pickExercises = () => {
    // lógica para elegir ejercicios random de exercisesList
    const selected = exercisesList
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
    setDailyExercises(selected);
  };
  const handleNextDay = () => {
    setDay((prev) => prev + 1);
    pickExercises();
  };
  const handleClose = () => {
    // al cerrar, limpio todo
    setDay(1);
    setDailyExercises([]);
    onClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          maxHeight: "90vh",
        },
      }}
    >
      {/* Título centrado */}
      <DialogTitle>
        <Typography variant="h4" align="center" fontWeight="bold">
          Día {day}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          {dailyExercises.map((ex, idx) => (
            <Box
              key={idx}
              sx={{
                p: 1,
                borderRadius: "12px",
                bgcolor: "#F9F9F9",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h6" fontWeight={400}>
                {ex.Reps} {ex.Ejercicio}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 3 }} />
        {/* Botones */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            onClick={handleNextDay}
            sx={{
              bgcolor:"#9B1E39",
              color:"white",
              px: 3,
              py: 1,
              borderRadius: "12px",
            }}
          >
            Next
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
             bgcolor: "#CDE260",   // un poquito más oscuro que el original
                color: "#000",
              px: 3,
              py: 1,
              borderRadius: "12px",
            }}
          >
            Close
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
export default MainModal;