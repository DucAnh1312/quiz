import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { authenticateApi } from "../../api/authenticateApi";
import loginImage from "../../assets/loginImage.jpg";

const theme = createTheme();

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertGetPass, setAlertGetPass] = useState(false);

  const [loading, setLoading] = useState(false);

  // formik
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      handleForgot(values);
    },
  });

  // forgot
  const handleForgot = async (user) => {
    setLoading(true);
    try {
      const response = await authenticateApi.forgot(user);
      setAlertGetPass(true);
    } catch (error) {
      setAlert(true);
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      {alertGetPass && (
        <Alert
          onClose={() => {
            setAlertGetPass(false);
          }}
          severity="success"
        >
          New password has sent to your email
        </Alert>
      )}
      {alert && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
          severity="error"
        >
          User with this email does not exist
        </Alert>
      )}
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={loading}
              >
                FORGOT PASSWORD
              </LoadingButton>
              <Grid container>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
