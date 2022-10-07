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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


// import { LoadingButton } from "@mui/lab";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import questionImage from "../../../assets/questionImage.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CardQuestion() {
  const listQuestion = useSelector((state) => state.getQuestionPlayReducer);
  const number = listQuestion.length

  const [question, setQuestion] = useState(listQuestion[0]);
  const [numberQ, setNumberQ] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const index = listQuestion.indexOf(question);


  const handleChangeQuestion = (questionNumber) => {
    // dispatch(setIndex(questionNumber - 1))
}



  useEffect(() => {
    if (listQuestion[index]?.answersSubmittedId) {
      setCurrentQuestion({ ...listQuestion[index] });
    } else {
      setCurrentQuestion({ ...listQuestion[index], answersSubmittedId: [] });
    }
  }, [index, listQuestion]);

  const dispatch = useDispatch();
  const changeQuestion = (numberQuestion) => {
    setQuestion(listQuestion[numberQuestion - 1]);
    setNumberQ(numberQuestion);
  };

  //
  const hanldeTick = (e) => {
    console.log(e.target.value);
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
          component={"span"}
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
        image={question.thumbnail_link || `${questionImage}`}
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
            {question.answers.map((answer) => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          // loading={loading}
          variant="contained"
          type="submit"
          sx={{ mt: 3, mb: 5, width: "35%" }}
        >
          Submit
        </Button>
      </Box>
    </Card>


    ////////////////////////////
    // <div style={{ padding: "20px" }}>
    //   <Typography variant="h2" component="h2" style={{ fontSize: "30px" }}>
    //     {currentQuestion?.title}
    //   </Typography>
      
    //   <ThumbnailComponent
    //     thumbnailSrc={
    //       currentQuestion?.thumbnail_link
    //         ? currentQuestion?.thumbnail_link
    //         : defaultThumbnail
    //     }
    //   />
    //   <Box sx={{ width: "100%", margin: "50px 0" }}>
    //     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //       {currentQuestion?.answers?.map((item) => {
    //         const color = setColor(
    //           item.id,
    //           currentQuestion.answersSubmittedId,
    //           "#25bd9396",
    //           "#bdbdbd70"
    //         );
    //         return (
    //           <Grid md={4} sm={6} xs={12} key={item.id}>
    //             <Item
    //               style={{ backgroundColor: `${color}` }}
    //               onClick={() => {
    //                 handleAnswer(item.id);
    //               }}
    //             >
    //               {item.content}
    //             </Item>
    //           </Grid>
    //         );
    //       })}
    //     </Grid>
    //   </Box>
    //   <Pagination
    //     count={number}
    //     color="primary"
    //     defaultPage={1}
    //     onChange={(event, pageNumber) => {
    //       handleChangeQuestion(pageNumber);
    //     }}
    //     style={{ display: "flex", justifyContent: "center" }}
    //   />
    // </div>
  );
}
