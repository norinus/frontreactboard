import React, {useCallback, useState} from 'react';


function BoardRead({ id, board, isLoading, onRemove, onUpdate }) {

    const [title, setTitle] = useState(board.title);
    const [contents, setContents] = useState(board.contents);

    const handleChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    const handleChangeContents = useCallback((e) => {
        setContents(e.target.value);
    }, []);


    const handleRemoveClick = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            onRemove(id);
        }
    };

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            onUpdate(id,title, contents);
        },
        [id,title, contents,  onUpdate]
    );

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <h2>게시판 읽기</h2>
            {isLoading && "로딩중..."}
            {isLoading && "로딩중..."}<>
            <form style={{width: "50%"}} onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    style={{width: "100%", padding: "5px"}}
                    name="id"
                    value={id}
                    onChange={handleChangeTitle}
                />

                <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "20px"}}>
                    <tbody>
                    <tr>
                        <td style={{padding: "10px", border: "1px solid #ddd", textAlign: "right"}}>제목</td>
                        <td style={{padding: "10px", border: "1px solid #ddd"}}>
                            <input
                                type="text"
                                style={{width: "100%", padding: "5px"}}
                                name="title"
                                value={title}
                                onChange={handleChangeTitle}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "10px", border: "1px solid #ddd", textAlign: "right"}}>작성자</td>
                        <td style={{padding: "10px", border: "1px solid #ddd"}}>
                            <div style={{
                                width: "100%",
                                padding: "5px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                backgroundColor: "#f9f9f9",
                                color: "#333"
                            }}>
                                {board.writer}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "10px", border: "1px solid #ddd", textAlign: "right"}}>내용</td>
                        <td style={{padding: "10px", border: "1px solid #ddd"}}>
                           <textarea
                               rows="5"
                               style={{width: "100%", padding: "5px"}}
                               name="contents"
                               value={contents}
                               onChange={handleChangeContents}
                           ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "10px", border: "1px solid #ddd", textAlign: "right"}}>등록일시</td>
                        <td style={{padding: "10px", border: "1px solid #ddd"}}>
                            <div style={{
                                width: "100%",
                                padding: "5px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                backgroundColor: "#f9f9f9",
                                color: "#333"
                            }}>
                                {board.createdDate}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                    <button type="button" style={{padding: "10px 20px"}} onClick={handleRemoveClick}>삭제</button>
                    <button type="submit" style={{padding: "10px 20px"}}>수정</button>
                    <a href="/" style={{
                        padding: "10px 20px",
                        textDecoration: "none",
                        color: "black",
                        border: "1px solid #ddd"
                    }}>목록</a>
                </div>
            </form>
            </>
        </div>
    );

}

export default BoardRead;