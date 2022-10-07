import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function GetListQuestion() {
  return (
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
  );
}
