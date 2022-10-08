import { Box, Typography, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";

export default function Admin() {
  const navigate = useNavigate();

  const hanldePlay = () => {
    navigate("../play/getlistquestion");
  };
  const handleManagement = () => {
    navigate("../Management");
  };

  return (
    <>
      <Header />
      <Box textAlign="center" mt={5}>
        <Typography variant="h5" component="h2" mt={20} mb={6}>
          Please choose Feature You Want
        </Typography>
        <Button sx={{ ml: 2, mr: 2 }} onClick={hanldePlay}>
          Play
        </Button>
        <Button sx={{ ml: 2, mr: 2 }} onClick={handleManagement}>
          Management
        </Button>
      </Box>
    </>
  );
}
