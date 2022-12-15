import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    name: "",
    fin: "",
    surname: "",
    fatherName: "",
    number: "",
    email: "",
    number2: "",
    workPlace: "",
    salary: "",
    workExp: "",
    salary2: "",
  },
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addFin: (state, action) => {
      state.fin = action.payload;
    },
    addSurname: (state, action) => {
      state.action = action.payload;
    },
    addFatherName: (state, action) => {
      state.fatherName = action.payload;
    },
    addNumber: (state, action) => {
      state.number = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addNumber2: (state, action) => {
      state.number2 = action.payload;
    },
    addWorkPlace: (state, action) => {
      state.workPlace = action.payload;
    },
    addSalary: (state, action) => {
      state.salary = action.payload;
    },
    addWorkExp: (state, action) => {
      state.base = action.payload;
    },
    addSalary2: (state, action) => {
      state.base = action.payload;
    },
  },
});

export const reducer = inputSlice.reducer;

export const {
  addName,
  addFin,
  addSurname,
  addFatherName,
  addNumber,
  addEmail,
  addNumber2,
  addWorkPlace,
  addSalary,
  addWorkExp,
  addSalary2,
} = inputSlice.actions;
