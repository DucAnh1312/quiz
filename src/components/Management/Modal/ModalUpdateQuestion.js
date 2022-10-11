import { Button, Box, CardMedia, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { questionApi } from "../../../api/questionApi";
import Backdrop from "@mui/material/Backdrop";
import CircularProgres from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";

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

export const ModalUpdateQuestion = (props) => {
  const idUpdateQuestion = useSelector((state) => state.getQuestionIdReducer);
  // console.log(idUpdateQuestion)

  const [backDrop, setBackDrop] = useState(false);

  //   const confirmDel = () => {
  //     delQuestion(idDelQuestion)
  //   }
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      // addQuestion(values);
      // console.log(values);
      updateQuestion(values,idUpdateQuestion)
    },
  });

  const updateQuestion = async (question, id) => {
    props.setModalEdit(false);
    setBackDrop(true);
    try {
      const response = await questionApi.editQuestion(question, id);
    } catch (error) {}
    setBackDrop(false);
    props.setStateDelete((prev) => !prev);
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
        open={props.modalEdit}
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
            Update Question
          </Typography>
          {/* ////////////////////////////////////////////////////////////////////////////////////// */}
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
            <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ mr: 8 }}
                variant="contained"
                onClick={() => props.setModalEdit(false)}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ ml: 8 }} variant="contained">
                Update
              </Button>
            </Box>
          </Box>

          {/* ////////////////////////////////////////////////////////////////////////////////////// */}
        </Box>
      </Modal>
    </>
  );
};
