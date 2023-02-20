import { BrowserRouter,  Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Gerencia from "./pages/Gerencia";
import NotFound from "./pages/NotFound";
import Licitaciones from "./pages/Licitaciones";
import Tesoreria from "./pages/Tesoreria";
import Obras from "./pages/Obras";
import Abogado from "./pages/Abogado";
import Protected from "./controllers/Protected";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/gerencia" element={<Gerencia/>}/>
            <Route path="/licitaciones" element={<Licitaciones/>}/>
            <Route path="/tesoreria" element={<Tesoreria/>}/>
            <Route path="/obras" element={<Obras/>}/>
            <Route path="/chat-legal" element={<Abogado/>}/>
            <Route path="/*" element={<NotFound/>}/>
            
            
          </Routes>
    
        
      </BrowserRouter>
    </div>
  );
}

export default App;
