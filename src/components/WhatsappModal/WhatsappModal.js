import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Stack,
  Box,
} from "@mui/material";

const WhatsappModal = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          maxHeight: "90vh",
        },
      }}
    >
      {/* Título */}
      <DialogTitle>
        <Typography variant="h4" align="center" fontWeight="bold">
          WhatsApp
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={3} alignItems="center">
          <Box
            sx={{
              p: 4,
              borderRadius: "16px",
              bgcolor: "#F9F9F9",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" fontWeight={500}>
               Coming Soon
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Estamos preparando algo grande para vos gordo.
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              bgcolor: "#CDE260",
              color: "#000",
              px: 4,
              py: 1,
              borderRadius: "12px",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsappModal;