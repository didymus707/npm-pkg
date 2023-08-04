import React from "react";
import Home from "./component/home";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeLink={<Link to={"/"}>Home</Link>}
              subscribeNav={<Link to={"/subscribe"}>Subscribe</Link>}
              subscribersNav={<Link to={"/subscribers"}>Subscribers</Link>}
              unsubscribeNav={<Link to={"/unsubscribe"}>Unsubscribe</Link>}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
