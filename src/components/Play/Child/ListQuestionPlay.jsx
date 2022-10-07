import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControlLabel,
  Grid,
  Pagination,
  Typography,
  Checkbox,
  Box,
  Button,
} from "@mui/material";

// import { LoadingButton } from "@mui/lab";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import questionImage from "../../../assets/questionImage.jpg";

export default function ListQuestionPlay() {
  const dispatch = useDispatch();

  //array list question
  const listQuestion = useSelector((state) => state.getQuestionPlayReducer);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [idAnswer, setIdAnswer] = useState([])

  // next button
  const clickPrevious = () => {
    setQuestionIndex((oldState) => oldState - 1);
  };
  // back button
  const clickNext = () => {
    setQuestionIndex((oldState) => oldState + 1);
  };

  // console.log(listQuestion)
  const totalQuestion = useRef(0);
  totalQuestion.current = listQuestion.length;

  const answers = useRef([]);
 
  // answers.current = listQuestion.map((question) => {
  //   return {
  //     id: question.id,
  //     answersSubmittedId: [question.answers[]]
  //   };
  // });
// console.log(listQuestion)
// console.log('dd',answers.current)

//   useEffect(() => {
//     if (listQuestion[questionIndex]?.answersSubmittedId){
//         console.log('a')           
//     } else {
//         console.log('b')
//     }        
// }, [questionIndex, listQuestion])


  const hanldeTick = (e) => {
    //  setIdAnswer([...idAnswer, e.target.value])

    // answers.current[questionIndex].answersSubmittedId = e.target.value;
    // console.log(idAnswer)
  };

  const hanldeSubmit = (answerId) => {
    
} 

  return (
    <>
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
            <Button sx={{ ml: 2, mr: 2 }} variant="contained" onClick={hanldeSubmit}>
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
