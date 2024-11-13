import * as client from "../lib/api";
import React from "react";
import { useNavigate } from "react-router-dom";
import BoardCreate from "../components/BoardCreate";

const BoardCreateContainer = () => {
    const navigate = useNavigate(); // Use useNavigate instead of history

    const onRegister = async (title, contents, writer) => {
        try {
            const response = await client.createBoard(title, contents, writer);
            alert("등록되었습니다.");
            navigate("/read/" + response.data.id); // Replaces history.push
        } catch (e) {
            console.log(e);
        }
    };

    return <BoardCreate onRegister={onRegister} />;
};

export default BoardCreateContainer;
