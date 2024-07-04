import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Table from "./pages/Table";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import CreateProduct from "./pages/CreateProduct";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          <Route path="/product/create-product" element={<CreateProduct/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/table" element={<Table/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
