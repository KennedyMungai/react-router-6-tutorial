import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App()
{
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
