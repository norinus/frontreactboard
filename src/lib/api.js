import axios from "axios";

export const createBoard = (title,contents,writer) => axios.post("/boards",{title,contents,writer});

export const readBoard = (id) => axios.get(`/boards/${id}`);

export const updateBoard = (id,title,contents,writer) => axios.put(`/boards/${id}`,{id,title,contents});

export const deleteBoard = (id) => axios.delete(`/boards/${id}`);

export const readBoards = (page) => axios.get("/boards?page=" + page);
