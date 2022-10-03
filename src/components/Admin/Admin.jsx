import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import GetListQuestion from "../Play/Child/GetListQuestion";

export default function Admin() {
  const navigate = useNavigate();

  const handleClickManagement = () => {
    navigate("/admin/management");
  };
  return (
    <>
      <GetListQuestion />
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography component="h1" variant="h6">
          Administrator Access
        </Typography>
        <Button sx={{ margin: 1 }} onClick={handleClickManagement}>
          MANAGEMENT SCREENS
        </Button>
      </Box>
    </>
  );
}
