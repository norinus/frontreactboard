
import React, {useState, useEffect, useCallback} from "react";
import { Link, useSearchParams } from 'react-router-dom';


function BoardList({boards}) {

    return (
        <div className="container mt-5 text-center">
            <h2 className="mb-4">게시판 목록</h2>

            {/* 게시글 작성 버튼 */}
            <div className="d-flex justify-content-center mb-3">
                <Link to="/create" className="btn btn-success">게시글 작성</Link>
            </div>

            {/* 게시글 목록 테이블 */}
            <table className="table table-hover mx-auto text-center w-75">
                <thead className="table-light">
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록일시</th>
                </tr>
                </thead>
                <tbody>
                {boards.content && boards.content.length > 0 ? (
                    boards.content.map((board) => (
                        <tr key={board.id}>
                            <td>{board.id}</td>
                            <td>
                                <Link to={`/read/${board.id}`} className="text-decoration-none text-dark">
                                    {board.title}
                                </Link>
                            </td>
                            <td>{board.writer}</td>
                            <td>{new Date(board.createdDate).toLocaleDateString()}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">
                            게시글이 없습니다.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* 페이지네이션 */}
            <nav aria-label="Page navigation" className="mt-4">
                <div
                    className="d-flex justify-content-center"
                    style={{
                        gap: '0.5rem',
                    }}
                >
                    {/* Previous Button */}
                    {boards.first ? (
                        <button className="btn btn-secondary" disabled>
                            Previous
                        </button>
                    ) : (
                        <Link to={`./?page=${boards.number - 1}`}>
                            <button className="btn btn-primary">Previous</button>
                        </Link>
                    )}

                    {/* Page Number Buttons */}
                    {Array.from({ length: boards.totalPages }, (_, i) => (
                        <Link key={i} to={`./?page=${i}`}>
                            <button
                                style={{
                                    backgroundColor: boards.number === i ? '#007bff' : 'gray',
                                    color: boards.number === i ? 'white' : 'black',
                                    border: '1px solid #007bff',
                                    padding: '5px 10px',
                                    margin: '0 5px',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                {i + 1}
                            </button>
                        </Link>
                    ))}

                    {/* Next Button */}
                    {boards.last ? (
                        <button className="btn btn-secondary" disabled>
                            Next
                        </button>
                    ) : (
                        <Link to={`./?page=${boards.number + 1}`}>
                            <button className="btn btn-primary">Next</button>
                        </Link>
                    )}
                </div>
            </nav>
        </div>


    );
}

export default BoardList;
