import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import MenuAppBar from "../../Header/Header";
import {questionApi} from "../../../api/api";
import { updateQuestionsPlay } from "../../../store/questionSlice";


import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

export default function GetListQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getQuestions = async (number) => {
    try {
      const response = await questionApi.getQuestionsPlay(number);
      const action = updateQuestionsPlay(response.data.data);
      dispatch(action);
      navigate("../play");
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: {
      number: 0,
    },
    onSubmit: (values) => {
      // console.log(values.number);
      getQuestions(values.number);
    },
  });

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
            Please enter the number of questions
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="Number of questions"
              name="number"
              autoComplete="number"
              onChange={formik.handleChange}
              value={formik.values.number}
              type="number"
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