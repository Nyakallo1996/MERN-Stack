import "./App.css";
import Post from "./pages/post";
import Header from "./header/header";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={"/login"} element={<div>login page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
