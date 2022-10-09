import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import { questionApi } from "../../../api/questionApi";
import Backdrop from "@mui/material/Backdrop";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Checkbox,
  Box,
  Typography,
  Button,
  formLabelClasses,
  FormControlLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import questionImage from "../../../assets/questionImage.jpg";

export default function Result(color) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const data = useSelector((state) => state.submitResultsReducer);
  const listQuestionChecked = data.data.data.listQuestionChecked;
  const totalQuestion = listQuestionChecked.length;
  const totalScore = data.data.data.totalScore;

  // next button
  const clickPrevious = () => {
    setIndex((oldState) => oldState - 1);
  };
  // back button
  const clickNext = () => {
    setIndex((oldState) => oldState + 1);
  };

  const hanldeSubmit = () => {
    navigate('../play/getlistquestion');
  };

  return (
    <>
      <Header />
      <Card
        sx={{
          ml: "auto",
          mr: "auto",
          width: "60%",
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
          {`Question ${index + 1}/${totalQuestion}`}
        </Typography>
        <Typography
          component={"span"}
          variant="h5"
          margin={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "black",
            fontSize: "30px",
          }}
        >
          {`Score: ${totalScore}`}
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
            Q. {listQuestionChecked[index]?.title}
          </Typography>
        </Typography>

        <CardMedia
          component="img"
          image={
            listQuestionChecked[index]?.thumbnail_link || `${questionImage}`
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
              {listQuestionChecked[index]?.answers.map((answer) => {
                return (
                  <Grid
                    key={answer.id}
                    sx={{
                      paddingTop: "8px",
                      height: "60px",
                      paddingLeft: "25px",
                      backgroundColor: { color },
                      maxHeight: "31%",
                      marginTop: "12px",
                      borderRadius: "5px",
                      border: "1px solid",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    }}
                  >
                    {answer.content}
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
            disabled={index === 0}
          >
            Back
          </Button>
          {index === totalQuestion - 1 ? (
            <Button
              sx={{ ml: 2, mr: 2 }}
              variant="contained"
              onClick={hanldeSubmit}
            >
              Play Again
            </Button>
          ) : (
            <Button
              sx={{ ml: 2, mr: 2 }}
              variant="contained"
              onClick={clickNext}
            >
              Next
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
}
