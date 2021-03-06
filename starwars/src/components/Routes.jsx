import { Routes as Main, Route } from "react-router-dom";
import { Films } from "./pages/films/Films";
import { Navbar } from "./pages/navbar/Navbar";
import { PeoplePage } from "./pages/people/PeoplePage";
import { Starships } from "./pages/starships/Starships";
import { Vehicles } from "./pages/vehicles/Vehicles";
export const Routes = () => {
  return (
    <>
    {/* All the routes are in single page should be a good way to make our code maintainable. here I have use react router version six which is latest. */}
      <Navbar />
      <Main>
        <Route path="/" element={<PeoplePage />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/starships/:id" element={<Starships />} />
        <Route path="/vehicles/:id" element={<Vehicles />} />
        <Route path="*" element={<h1>No page found...</h1>} />
      </Main>
    </>
  );
};
