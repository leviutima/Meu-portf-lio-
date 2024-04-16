import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sobremim } from "./Pages/Sobremim/Index";
import { Inicio } from "./Pages/Inicio/Index";
import { Menu } from "./Components/Menu/Index";
import { Rodape } from "Components/Rodape/Index";
import { PaginaPadrao } from "Components/Pagina padrão/Index";
import Projetos from "Pages/Projetos/Index";
import PostProjetos from "Pages/PostProjetos/Index";
import NotFound from "Pages/NotFound/Index";



function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Sobre-mim" element={<Sobremim/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/post-projetos/:id" element={<PostProjetos/>}/>
        </Route>

        
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
