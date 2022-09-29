import MenuAppBar from "../Header/Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Play() {
  return (
    <>
      <MenuAppBar />
      <Container maxWidth="lg">
        <Box
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <Typography component="h1" variant="h4">
            Please input number of question
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="number of question"
              label="number of question"
              name="number of question"
              autoComplete="number of question"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              GET START
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
