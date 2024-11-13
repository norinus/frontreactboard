import React,{useState,useCallback} from 'react';
import {Link} from 'react-router-dom';


function BoardCreate({onRegister}){

    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [contents, setContents] = useState("");

    const handleChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    const handleChangeContents = useCallback((e) => {
        setContents(e.target.value);
    }, []);

    const handleChangeWriter = useCallback((e) => {
        setWriter(e.target.value);
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            onRegister(title, contents, writer);
        },
        [title, contents, writer, onRegister]
    );

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <h2>게시판 등록</h2>
            <form style={{width: "50%"}} onSubmit={handleSubmit}>
                <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "20px"}}>
                    <tbody>
                    <tr>
                        <td style={{
                            width: "20%",
                            padding: "10px",
                            border: "1px solid #ddd",
                            textAlign: "right"
                        }}>제목
                        </td>
                        <td style={{padding: "10px", border: "1px solid #ddd"}}>
                            <input type="text" style={{width: "100%", padding: "5px"}} value={title} onChange={handleChangeTitle}/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "10px", border: "1px solid #ddd", textAlign: "right"}}>작성자</td>
                        <td style={{padding: "10px", border: "1px solid #ddd"}}>
                            <input type="text" style={{width: "100%", padding: "5px"}} value={writer} onChange={handleChangeWriter}/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "10px", border: "1px solid #ddd", textAlign: "right"}}>내용</td>
                        <td style={{padding: "10px", border: "1px solid #ddd"}}>
                            <textarea rows="5" style={{width: "100%", padding: "5px"}} value={contents} onChange={handleChangeContents}></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                    <button type="submit" style={{padding: "10px 20px"}}>등록</button>
                    <Link to="/" style={{
                        padding: "10px 20px",
                        textDecoration: "none",
                        color: "black",
                        border: "1px solid #ddd"
                    }}>취소</Link>
                </div>
            </form>
        </div>
    )


}

export default BoardCreate