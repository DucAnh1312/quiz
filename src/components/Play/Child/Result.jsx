import Header from "../../Header/Header";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { questionApi } from "../../../api/questionApi";

export default function Result() {
  const navigate = useNavigate();
  const submitAnswer = useSelector((state) => state.submitQuestionReducer);

  const submitAnswerObj = { listQuestionSubmitted: submitAnswer };
  console.log("submitA", submitAnswerObj);

  const hanldeBack = () => {
    navigate("../play");
  };
  const handleSubmit = () => {
    submit(submitAnswerObj);
  };

  const submit = async (data) => {
    try {
      const response = await questionApi.submitQuestionsPlay(data);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <Header />
      <Box textAlign="center" mt={5}>
        <Typography variant="h5" component="h2" mt={20} mb={6}>
          Are you sure with answer?
        </Typography>
        <Button sx={{ ml: 2, mr: 2 }} onClick={hanldeBack}>
          NO
        </Button>
        <Button sx={{ ml: 2, mr: 2 }} onClick={handleSubmit}>
          YES
        </Button>
      </Box>
    </>
  );
}
