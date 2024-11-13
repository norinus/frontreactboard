import React, { useState, useEffect } from "react";
import BoardList from "../components/BoardList";
import * as client from "../lib/api";
import {useSearchParams} from "react-router-dom";


const BoardListContainer = () => {

    const [boards, setBoards] = useState([]);
    const [isLoading, setLoadings] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get("page")) || 0;

    const listBoard = async () => {
        setLoadings(true);
        try {
            const response = await client.readBoards(currentPage);
            setBoards(response.data);

            setLoadings(false);
        } catch (e) {
            setLoadings(false);
            throw e;
        }
    };

    useEffect(() => {
        listBoard();
    }, [currentPage]);

    if (!boards) {
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

    return <BoardList boards={boards} isLoading={isLoading} />;
};

export default BoardListContainer;