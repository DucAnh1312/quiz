import { Button, Box, CardMedia, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { questionApi } from "../../../api/questionApi";
import Backdrop from "@mui/material/Backdrop";
import CircularProgres from "@mui/material/CircularProgress";
import { PropaneTankSharp } from "@mui/icons-material";
import * as yup from "yup";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";

// import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const theme = createTheme();

export const ModalCreateQA = (props) => {
  //   const idDelQuestion = useSelector(state=>(state.getQuestionIdReducer))

  const [backDrop, setBackDrop] = useState(false);

  // formik

  const formik = useFormik({
    initialValues: {
      title: "",
      thumbnail_link: "",
    },
    onSubmit: (values) => {
      addQuestion(values);
    },
  });

  const addQuestion = async (data) => {
    setBackDrop(true);
    props.setModalCreate(false);
    try {
      const response = await questionApi.createQuestion(data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
    props.setStateDelete((prev) => !prev);

    setBackDrop(false);
  };

  return (
    <>
      {/* ////////////////////////////////////BackDrop/////////////////////////////////////// */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDrop}
      >
        <CircularProgres color="inherit" />
      </Backdrop>
      {/* ////////////////////////////////////BackDrop/////////////////////////////////////// */}
      <Modal
        open={props.modalCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create New Question
          </Typography>
          {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="title"
              name="title"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="thumbnail_link"
              label="thumbnail_link"
              type="thumbnail_link"
              id="thumbnail_link"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.thumbnail_link}
            />
            <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ mr: 8 }}
                variant="contained"
                onClick={() => props.setModalCreate(false)}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ ml: 8 }} variant="contained">
                Create
              </Button>
            </Box>
          </Box>

          {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
        </Box>
      </Modal>
    </>
  );
};
