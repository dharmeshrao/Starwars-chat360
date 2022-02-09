import { Routes as Main, Route } from "react-router-dom";
import { Films } from "./pages/films/Films";
import { Navbar} from "./pages/navbar/Navbar"
import { PeoplePage } from "./pages/people/PeoplePage";
export const Routes = () => {
  return (
    <>
    <Navbar/>
      <Main>
        <Route path="/" element={<PeoplePage/>} />
        <Route path="/films/:id" element={<Films/>}/>
        <Route path="*" element={<h1>No page found...</h1>} />
      </Main>
    </>
  );
};
