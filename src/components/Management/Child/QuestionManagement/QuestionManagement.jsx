import { Formik, Form, Field } from "formik";
import { Button, Box, CardMedia } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuestionId } from "../../../../redux/actions/action";
import { ModalDeleteQuestion } from "../../Modal/ModalDeleteQuestion";
import { ModalUpdateQuestion } from "../../Modal/ModalUpdateQuestion";
import { questionApi } from "../../../../api/questionApi";

import SearchIcon from "@mui/icons-material/Search";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import questionImage from "../../../../assets/questionImage.jpg";
import Pagination from "@mui/material/Pagination";

import "./questionM.css";

const listHead = ["ID", "Title", "Create Day", "Image", "Action"];

// decode format date
const formatDate = (stringDate) => {
  const date = new Date(stringDate);
  let result = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return result;
};

export default function QuestionManagement() {
  const [modalDel, setModalDel] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageTotal, setTotalPage] = useState("");
  const dispatch = useDispatch();

  const questionList = useRef([]);

  // call first time and when change page
  useEffect(() => {
    getAllQuestions({ page: page });
  }, [page]);

  //Get question
  const getAllQuestions = async (data) => {
    setLoading(true);
    try {
      const response = await questionApi.getQuestion(data);
      const inputData = response.data.data;
      questionList.current = inputData.result;
      setTotalPage(inputData.totalPages);
    } catch (error) {
      console.log("loi filter question", error);
    }
    setLoading(false);
  };

  // deleteQuestion
  const deleteQuestion = (data) => {
    setModalDel(true);
    dispatch(getQuestionId(data));
  };

  const editQuestion = (data) => {
    dispatch(getQuestionId(data));
    setModalEdit(true);
  };

  return (
    <>
      {/* modal///////////////////////////////////////////////////////////// */}
      <ModalDeleteQuestion modalDel={modalDel} setModalDel={setModalDel} />

      <ModalUpdateQuestion modalEdit={modalEdit} setModalEdit={setModalEdit} />
      {/* modal///////////////////////////////////////////////////////////// */}

      {/* addButton//////////////////////////////////////////////////////////////////// */}
      <Button variant="contained">
        <AddCircleOutlineIcon sx={{ mr: 1 }} /> Add New
      </Button>
      {/* addButton//////////////////////////////////////////////////////////////////// */}

      {/* Filter/////////////////////////////////////////////////////////////////////// */}
      <Formik
        initialValues={{
          keyWord: "",
          // page: "",
          size: "",
          order: "ASC",
          sortField: "id",
        }}
        onSubmit={(values) => {
          getAllQuestions(values);
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form>
            <div className="group">
              <label> SortField </label>
              <br />
              <Field className="fieldForm" as="select" name="sortField">
                <option value="id">ID</option>
                <option value="title">Title</option>
                <option value="createdAt">CreatedAt</option>
                <option value="updatedAt">UpdatedAt</option>
              </Field>
            </div>
            <div className="group">
              <label> KeyWord </label>
              <br />
              <Field
                className="fieldForm"
                name={"keyWord"}
                type="text"
                required
              />
            </div>
            <div className="group">
              <label> Size </label>
              <br />
              <Field
                className="fieldForm"
                name={"size"}
                type="number"
                min="1"
                required
              />
            </div>
            <div className="group">
              <label> Order </label>
              <br />
              <Field className="fieldForm" as="select" name="order">
                <option value="ASC">Filter Up</option>
                <option value="DESC">Filter Down</option>
              </Field>
            </div>
            <LoadingButton
              sx={{ ml: 3 }}
              type="submit"
              variant="contained"
              loading={loading}
            >
              <SearchIcon />
            </LoadingButton>
          </Form>
        </Box>
      </Formik>
      {/* Filter/////////////////////////////////////////////////////////////////////// */}
      <TableContainer sx={{ maxHeight: 900, mt:5 }}>
      <Table sx={{ width: "100%" }} aria-label="simple table" stickyHeader aria-label="sticky table">
        {/* tableHead//////////////////////////////////////////////////////////////////////////// */}
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F0EFEF" }}>
            {listHead.map((value) => {
              return (
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        {/* tableHead//////////////////////////////////////////////////////////////////////////// */}

        {/* tableBody//////////////////////////////////////////////////////////////////////////// */}
        <TableBody>
          {questionList.current.map((value, index) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{value.title}</TableCell>
                <TableCell align="left">
                  {formatDate(value.createdAt)}
                </TableCell>
                <TableCell align="left">
                  <CardMedia
                    component="img"
                    height="200"
                    style={{ borderRadius: 5 }}
                    image={value.thumbnail_link || questionImage}
                    alt="No Image"
                    sx={{
                      display: "block",
                      maxWidth: "200px",
                      maxHeight: "110px",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <EditIcon
                    className="editIcon"
                    onClick={() => {
                      editQuestion(value.id);
                    }}
                  />
                  <DeleteIcon
                    className="deleteIcon"
                    onClick={() => {
                      deleteQuestion(value.id);
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        {/* tableBody//////////////////////////////////////////////////////////////////////////// */}
      </Table>
      </TableContainer>
      <Pagination
        sx={{ display: "flex", justifyContent: "center", mt:10 }}
        count={pageTotal}
        color="primary"
        onChange={(event, pageNumber) => {
          setPage(pageNumber);
        }}
      />
    </>
  );
}
