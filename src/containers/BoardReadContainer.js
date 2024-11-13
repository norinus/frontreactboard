import React, {useState, useEffect, useCallback} from "react";
import { useParams, useNavigate } from "react-router-dom";
import BoardRead from "../components/BoardRead";
import * as client from "../lib/api";

const BoardReadContainer = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [board, setBoard] = useState(null);
    const [isLoading, setLoading] = useState(false);

    console.log(id)

    const readBoard = async (id) => {
        console.log("Calling readBoard with id:", id);  // Debugging log
        setLoading(true);
        try {
            const response = await client.readBoard(id);
            setBoard(response.data);
            console.log(response.data)
        } catch (e) {
            console.error("Failed to load board data:", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            readBoard(id);
        }
    }, [id]);


    const onRemove = async (id) => {
        try {
            await client.deleteBoard(id);
            alert("삭제되었습니다.");
            navigate("/");
        } catch (e) {
            console.error("삭제실패:", e);
        }
    };

    const onUpdate = async (id,title, contents) => {
        try {
            const response = await client.updateBoard(id,title,contents);
            alert("업데이트 되었습니다.");
            navigate("/read/" + response.data.id);
        } catch (e) {
            console.error("업데이트 실패:", e);
        }
    };


    if (!board) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}>
                <p>로딩중...</p>
            </div>
        );
    }

    return (
        <BoardRead
            id={id}
            board={board}
            isLoading={isLoading}
            onRemove={onRemove}
            onUpdate = {onUpdate}
        />
    );
};

export default BoardReadContainer;
