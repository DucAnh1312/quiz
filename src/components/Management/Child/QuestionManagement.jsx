import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { questionApi } from "../../../api/questionApi";

import { useFormik } from "formik";
import Button from "@mui/material/Button";

export default function QuestionManagement() {
  //get all question
  const getAllQuestions = async (data) => {
    try {
      const response = await questionApi.getQuestion(data);
      console.log("data", response.data);
    } catch (error) {
      console.log("loi cho filter Q", error);
    }
  };

  const hanlde = () => {
    getAllQuestions({
      keyWord: "câu",
      page: 5,
      size: 1,
      order: "ASC",
      sortField: "createdAt",
    });
  };
  ////////////////////

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={2}></Grid>
        <Grid item sx={4}>
          <FormControl sx={{ width: "130px" }} size="small">
            <InputLabel id="demo-simple-select-label">sortField</InputLabel>
            <Select
              labelId="select-params-sortFeild"
              id="select-prams-sortFeild"
              //   value={params.sortField}
              label="sortField"
              //   onChange={listHandle.handleChangeSortField}
            >
              <MenuItem value="id">ID</MenuItem>
              <MenuItem value="title">Title</MenuItem>
              <MenuItem value="createdAt">createdAt</MenuItem>
              <MenuItem value="updatedAt">updatedAt</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={4}>
          <TextField
            id="outlined-basic"
            label="keyWord"
            variant="outlined"
            size="small"
            // onChange={listHandle.handleChangeKeyWord}
          />
        </Grid>
        <Grid item sx={4}>
          <FormControl sx={{ width: "200px" }} size="small">
            <InputLabel id="demo-simple-select-label">Order</InputLabel>
            <Select
              labelId="select-params-order"
              id="select-params-order"
              //   value={params.order}
              label="Oder"
              //   onChange={listHandle.handleChangeSelectOrder}
            >
              <MenuItem value="ASC">Lọc tăng</MenuItem>
              <MenuItem value="DESC">Lọc Giảm</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={4}>
          <TextField
            size="small"
            id="outlined-size"
            name="size"
            label="Size"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              inputProps: {
                max: 10,
                min: 3,
              },
            }}
            // onChange={listHandle.handleChangeSize}
          />
          <Button onClick={hanlde}>abc</Button>
        </Grid>
      </Grid>
    </>
  );
}
