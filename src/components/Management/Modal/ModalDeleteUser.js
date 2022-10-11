import { Button, Box, CardMedia, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { userApi } from "../../../api/userApi";
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

export const ModalDeleteUser = (props) => {
  const idDelUser = useSelector(state=>(state.getQuestionIdReducer))
//   console.log(idDelUser)
  const [backDrop, setBackDrop] = useState(false);

  const confirmDel = () => {
    delUser(idDelUser)
  }


  const delUser = async (id) => {
    props.setModalDel(false)
    setBackDrop(true);
    try {
      const response = await userApi.deleteUser(id);
    } catch (error) {}
    setBackDrop(false);
    props.setStateDelete(setStateDelete => !setStateDelete)

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
        open={props.modalDel}
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
            Are you sure to delete this User?
          </Typography>
          <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ mr: 8 }}
              variant="contained"
              onClick={() => props.setModalDel(false)}
            >
              No
            </Button>
            <Button sx={{ ml: 8 }} variant="contained" onClick={confirmDel}>
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
