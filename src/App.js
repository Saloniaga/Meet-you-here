// import { Route, Routes } from "react-router-dom";

// import AllMeetupsPage from "./pages/AllMeetups";
// import NewMeetupPage from "./pages/NewMeetup";
// import FavoritesPage from "./pages/Favorites";
// import MainNavigation from "./components/layout/MainNavigation";

// function App() {
//   return (
//     <div>
//       <MainNavigation />
//       <Routes>
//         <Route path="/" exact={true}>
//           <AllMeetupsPage />
//         </Route>
//         <Route path="/new-meetup">
//           <NewMeetupPage />
//         </Route>
//         <Route path="/favorites">
//           <FavoritesPage />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
