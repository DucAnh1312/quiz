import { Formik, Form, Field } from "formik";
import { Button, Box, CardMedia } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState, useRef, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { userApi } from "../../../../api/userApi";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import questionImage from "../../../../assets/questionImage.jpg";

const listHead = ["ID", "Email", "Name", "Avatar", "Role", "Action"];

// decode format date
const formatDate = (stringDate) => {
  const date = new Date(stringDate);
  let result = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return result;
};

export default function UserManagement() {
  const [loading, setLoading] = useState(false);

  const userList = useRef([]);

  // first times call
  useEffect(() => {
    getUser({
      size: "1",
      order: "ASC",
      sortField: "id",
      keyWord: "quang",
      page: "1",
      role: "",
    });
  }, []);

  const getUser = async (data) => {
    setLoading(true);
    try {
      const response = await userApi.getUser(data);
      const inputData = response.data.data;
      //   console.log(inputData);
      userList.current = inputData.result;
      //   setPage(inputData.totalPages);
    } catch (error) {
      console.log("loi filter user", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Button variant="contained">
        <AddCircleOutlineIcon sx={{ mr: 1 }} /> Add New
      </Button>
      <Formik
        initialValues={{
          size: "",
          order: "ASC",
          sortField: "id",
          keyWord: "",
          page: "",
          role: "",
        }}
        onSubmit={(values) => {
          //   console.log(values);
          getUser(values);
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
              <label> Page </label>
              <br />
              <Field
                className="fieldForm"
                name={"page"}
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
            <div className="group">
              <label> Role </label>
              <br />
              <Field className="fieldForm" as="select" name="role">
                {/* chưa biết đặt value Both gì vì api trả về role cũng lung tung */}
                <option value="">Both</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
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
      {/* //////////////////////////////////////////////////////////////////// */}
      <Table sx={{ width: "100%", mt: 5 }} aria-label="simple table">
        {/* //////////////////////////////////////////////////////////////////////////// */}
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
        {/* /////////////////////////////////////////////// */}
        <TableBody>
          {userList.current.map((value, index) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{value.email}</TableCell>
                <TableCell align="left">{value.name}</TableCell>
                <TableCell align="center">
                  <CardMedia
                    component="img"
                    height="200"
                    style={{ borderRadius: 5 }}
                    image={value.avatar_link || questionImage}
                    alt="No Image"
                    sx={{
                      display: "block",
                      maxWidth: "150px",
                      maxHeight: "110px",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </TableCell>
                <TableCell>
                {/* {value.role.map(value, index) } */}
                {/* <TableCell align="left">{value.role[0]}</TableCell> */}
                </TableCell>
                <TableCell align="left">
                  <EditIcon className="editIcon" />{" "}
                  <DeleteIcon className="deleteIcon" />{" "}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
