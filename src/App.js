import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            Home
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
