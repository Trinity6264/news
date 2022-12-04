import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/home/Home";


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
