import { Button, Box, CardMedia, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { questionApi } from "../../../api/questionApi";
import Backdrop from "@mui/material/Backdrop";
import CircularProgres from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

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
  const idUpdateQuestion = useSelector(state=>(state.getQuestionIdReducer))
//   console.log(idUpdateQuestion)
  
  const [backDrop, setBackDrop] = useState(false);

//   const confirmDel = () => {
//     delQuestion(idDelQuestion)
//   }


//   const delQuestion = async (id) => {
//     props.setModalDel(false)
//     setBackDrop(true);
//     try {
//       const response = await questionApi.deleteQuestion(id);
//     } catch (error) {}
//     setBackDrop(false);
//   };

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
          <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ mr: 8 }}
              variant="contained"
              onClick={() => props.setModalEdit(false)}
            >
              No
            </Button>
            <Button sx={{ ml: 8 }} variant="contained">
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
