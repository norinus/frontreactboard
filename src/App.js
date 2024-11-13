import { Route, Routes } from "react-router-dom";

import BoardListContainer from "./containers/BoardListContainer";
import BoardReadContainer from "./containers/BoardReadContainer";
import BoardCreateContainer from "./containers/BoardCreateContainer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<BoardListContainer />} />
            <Route path="/read/:id" element={<BoardReadContainer />} />
            <Route path="/create" element={<BoardCreateContainer />} />
        </Routes>
    );
}

export default App;