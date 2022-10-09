import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControlLabel,
  Grid,
  Typography,
  Checkbox,
  Box,
  Button,
  Modal,
} from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import questionImage from "../../../assets/questionImage.jpg";
import { questionApi } from "../../../api/questionApi";
import { getResults } from "../../../redux/actions/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ListQuestionPlay() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  // array list question
  const listQuestion = useSelector((state) => state.getQuestionPlayReducer);


  // next button
  const clickPrevious = () => {
    setQuestionIndex((oldState) => oldState - 1);
  };
  // back button
  const clickNext = () => {
    setQuestionIndex((oldState) => oldState + 1);
  };

  const answers = useRef([]);
  const totalQuestion = useRef(0);
  totalQuestion.current = listQuestion.length;

  ////////////////////////////////////// dang co van de
  const answerSubmit = [];

  // xử lý tick checkbox
  const hanldeTick = (e) => {
    // get array id from checkbox to submit
    if (e.target.checked) {
      if (!answerSubmit.includes(Number(e.target.value))) {
        answerSubmit.push(Number(e.target.value));
      }
    } else {
      for (var i = 0; i < answerSubmit.length; i++)
        if (answerSubmit[i] === Number(e.target.value)) {
          answerSubmit.splice(i, 1);
        }
    }
    // gán lại cho cái vòng map answers.current
    answers.current[questionIndex].answersSubmittedId = answerSubmit;
  };
  /////////////////////////////////////////////////////////////////

  // map ra obj de post len API submit
  answers.current = listQuestion.map((question) => {
    return {
      id: question.id,
      answersSubmittedId: [],
    };
  });

  const hanldeSubmit = () => {
    setModal(true);
  };

  const sureSubmit = () => {
    submit({
      listQuestionSubmitted: [
        {
          id: 57,
          answersSubmittedId: [69],
        },
        {
          id: 10,
          answersSubmittedId: [12, 15],
        },
      ],
    });
  };

  const submit = async (data) => {
    setModal(false);
    setBackDrop(true);
    try {
      const response = await questionApi.submitQuestionsPlay(data);
      setQuestionIndex(0);
      navigate("/play/result");
      dispatch(getResults(response));
    } catch (error) {
      console.log(error);
    }
    setModal(false);
    setBackDrop(false);
  };

  return (
    <>
      {/* ////////////////////////////////Modal/////////////////////////////////////// */}
      <Modal
        open={modal}
        // onClose={handleClose}
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
            Are you sure with the answer?
          </Typography>
          <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ mr: 8 }}
              variant="contained"
              onClick={() => setModal(false)}
            >
              No
            </Button>
            <Button sx={{ ml: 8 }} variant="contained" onClick={sureSubmit}>
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
      {/* ////////////////////////////////Modal/////////////////////////////////////// */}
      {/* ////////////////////////////////////BackDrop/////////////////////////////////////// */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* ////////////////////////////////////BackDrop/////////////////////////////////////// */}
      <Card
        sx={{
          width: "100%",
          height: "auto",
          textAlign: "left",
          marginTop: 5,
          marginBottom: 5,

          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Typography
          component={"span"}
          variant="h5"
          margin={2}
          fontWeight={600}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "black",
            fontSize: "35px",
          }}
        >
          {`Question ${questionIndex + 1}/${totalQuestion.current}`}
        </Typography>
        <Typography
          margin={2}
          sx={{
            color: "black",
            fontSize: "35px",
            backgroundColor: "#E9E9E9",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            component={"span"}
            variant="h5"
            margin={3}
            fontWeight={600}
            sx={{
              color: "black",
              fontSize: "30px",
            }}
          >
            Q. {listQuestion[questionIndex]?.title}
          </Typography>
        </Typography>

        <CardMedia
          component="img"
          image={
            listQuestion[questionIndex]?.thumbnail_link || `${questionImage}`
          }
          alt="No Image"
          sx={{
            display: "block",
            maxWidth: "200px",
            maxHeight: "200px",
            width: "auto",
            height: "200px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        />
        <CardContent>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Box sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
              {listQuestion[questionIndex]?.answers.map((answer) => {
                return (
                  <Grid
                    key={answer.id}
                    sx={{
                      paddingLeft: "5px",
                      backgroundColor: "#E9E9E9",
                      maxHeight: "31%",
                      marginTop: "12px",
                      borderRadius: "5px",
                      border: "1px solid",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    }}
                  >
                    <FormControlLabel
                      value={answer.id}
                      control={<Checkbox />}
                      label={answer.content}
                      onChange={hanldeTick}
                    ></FormControlLabel>
                  </Grid>
                );
              })}
            </Box>
          </Grid>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: "center",
            mt: 3,
            mb: 3,
          }}
        >
          <Button
            sx={{ ml: 2, mr: 2 }}
            variant="contained"
            onClick={clickPrevious}
            disabled={questionIndex === 0}
          >
            Back
          </Button>
          {questionIndex === listQuestion.length - 1 ? (
            <Button
              sx={{ ml: 2, mr: 2 }}
              variant="contained"
              onClick={hanldeSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              sx={{ ml: 2, mr: 2 }}
              variant="contained"
              onClick={clickNext}
            >
              Next & Save
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
}
