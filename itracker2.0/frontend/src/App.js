import { Routes, Route } from "react-router-dom";
import "./App.css";

//Routing imports
import Home from "../src/pages/general/home/home";
import Login from "../src/pages/authentication/login/login";
import Signup from "../src/pages/authentication/signup/signup";
import Dashboard from "../src/pages/general/dashboard/Dashboard";
import Income from "../src/pages/general/income/income";
import Invest from "../src/pages/general/Invest/invest";
import Manipulation from "../src/pages/general/manipulation/manipulation";
//import Egg from "../src/logic/testing"; <Route path="/testing" element={<Egg />} />
//import downloadTxtFile from "../../logic/txtfileconversion/downloadTxtFile";
import txtFileConversion from "../src/logic/txtfileconversion";
//import Manipulation from "../src/pages/general/manipulation/manipulation"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/manipulation" element={<Manipulation />} />
       
        <Route path="/d" element={<txtFileConversion />} />
      </Routes>
    </div>
  );
}

export default App;
