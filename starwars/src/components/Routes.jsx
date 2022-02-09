import { Routes as Main, Route } from "react-router-dom";
import { Navbar} from "./pages/navbar/Navbar"
import { PeoplePage } from "./pages/people/PeoplePage";
export const Routes = () => {
  return (
    <>
    <Navbar/>
      <Main>
        <Route path="/" element={<PeoplePage/>} />
        <Route element={<h1>No page found...</h1>} />
      </Main>
    </>
  );
};
