import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControlLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
  Typography,
  Checkbox,
} from "@mui/material";
import { display, flexbox } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CardQuestion() {
  const listQuestion = useSelector((state) => state.question.questionsPlay);
  const [question, setQuestion] = useState(listQuestion[0]);
  const [numberQ, setNumberQ] = useState(1);

  const dispatch = useDispatch();
  const changeQuestion = (numberQuestion) => {
    setQuestion(listQuestion[numberQuestion - 1]);
    setNumberQ(numberQuestion);
  };

  return (
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
        component="p"
        variant="h5"
        margin={2}
        fontWeight={600}
        sx={{
          textAlign: "center",
          color: "black",
          fontSize: "35px",
        }}
      >
        Question No: {numberQ}
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
          component="p"
          variant="h5"
          margin={3}
          fontWeight={600}
          sx={{
            color: "black",
            fontSize: "30px",
          }}
        >
          Q. {question.title}
        </Typography>
      </Typography>

      <CardMedia
        component="img"
        image={question.thumbnail_link}
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
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ width: "70%", marginLeft: "15%" }}
            onChange={(event, value) => {
              console.log(value);
            }}
          >
            {question.answers.map((answer) => {
              return (
                <Grid
                  key={answer.id}
                  item
                  xs={6}
                  sx={{
                    marginLeft: "3px",
                    paddingLeft: "4px",
                    textAlign: "left",
                    backgroundColor: "#FBAB02",
                    maxHeight: "31%",
                    marginTop: "5px",
                    borderStyle: "solid",
                    borderRadius: "10px",
                  }}
                >
                  <FormControlLabel
                    value={answer.id}
                    control={<Checkbox />}
                    label={answer.content}
                  ></FormControlLabel>
                </Grid>
              );
            })}
          </RadioGroup>
        </Grid>
      </CardContent>
      <div className="actionQuestion">
        <CardActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Pagination
            count={listQuestion.length}
            color="primary"
            defaultPage={1}
            onChange={(event, questionNumber) => {
              changeQuestion(questionNumber);
            }}
          />
        </CardActions>
      </div>
    </Card>
  );
}
