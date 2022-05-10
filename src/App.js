import * as React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import MovieComponent from "./components/MovieComponent";
import MovieList from "./components/MovieList";
import FavList from "./components/FavouritesList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Movie Component</Link>
          </li>
          <li>
            <Link to="/movie-list">MovieList</Link>
          </li>
          <li>
            <Link to="/favourite-list">FavouritesList</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MovieComponent />} />
              <Route path="movie-list" element={<MovieList />} />
              <Route path="favourite-list" element={<FavList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      {/* <MovieComponent></MovieComponent> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
