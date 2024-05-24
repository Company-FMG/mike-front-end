import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Login from "./routes/Login";
import ComplaintViaturaCirculacao from "./routes/ComplaintViaturaCirculacao";
import ComplaintRegister from "./routes/ComplaintRegister";
import Complaint from "./routes/Complaint";
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';

export default function AppRoutes() {
    setupIonicReact();
    return(

        <Routes>
            <Route path="/" element={<App/>}/>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="viaturas" element={<ComplaintViaturaCirculacao/>}/>
            <Route path="newcomplaint" element={<ComplaintRegister/>}/>
            <Route path="denuncia" element={<Complaint/>}/>
        </Routes>
    )
}
