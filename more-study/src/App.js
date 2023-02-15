// gh-pages download -> npm run deploy 명령어 입력 후 publish
// 빈 화면이 publish된 경우 path에 process.env.PUBLIC_URL 추가

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Reset />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/movie/:movieId`} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
