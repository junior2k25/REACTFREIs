import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/inicio";
import Ex1 from "./pages/ex1/ex1";
import Ex2 from "./pages/ex2/ex2";
import Ex3 from "./pages/ex3/ex3";
import Ex4 from "./pages/ex4/ex4";

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/ex1" element={<Ex1/>}/>
                <Route path="/ex2" element={<Ex2/>}/>
                <Route path="/ex3" element={<Ex3/>}/>
                <Route path="/ex4" element={<Ex4/>} />
            </Routes>
        </BrowserRouter>
    )
}