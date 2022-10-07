import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// import Button from "@mui/material/Button";



import { useFormik } from "formik";

export default function QuestionManagement() {
  const [currency, setCurrency] = React.useState("ASC");

  const order = [
    {
      value: "ASC",
      label: "Lọc Tăng",
    },
    {
      value: "DSC",
      label: "Lọc Giảm",
    },
  ];

  const handleChangeSelect = (event) => {
    setCurrency(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      keyWord: "",
      page: "",
      size: "",
      order: "",
      sortField: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {/* <Box
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          id="keyWord"
          label="KeyWord"
          type="search"
          onChange={formik.handleChange}
          value={formik.values.keyWord}
        />
        <TextField
          id="page"
          label="Page"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.page}
        />
        <TextField
          id="size"
          label="Size"
          type="number" 
          onChange={formik.handleChange}
          value={formik.values.size}
        />
        <TextField
          id="order"
          select
          label="Select"
          value={currency}
          onChange={formik.handleChange,handleChangeSelect}
        //   value={formik.values.order}
        >
          {order.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained">
          Search
        </Button>
      </Box> */}


    </>
  );
}
