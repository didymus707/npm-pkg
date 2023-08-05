import React from "react";
import Home from "./component/home";
// import Home from 'dowell-subscription-newsletter'
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Subscribers } from "./component/subscribers";
import { useQuery } from "react-query";
import { fetchAllSubscribers } from "./services/request";

function App() {
  const navigate = useNavigate();

  const { isLoading, data: results } = useQuery("fetch-all-subscribers", () =>
    fetchAllSubscribers({ type: "subscriberlist" })
  );

  const goBack = () => {
    console.log("I was clicked");
    navigate(-1);
  };

  console.log("results", { results, isLoading });

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
              subscribersLink={
                <Link to={"/subscribers"}>List all subscribers</Link>
              }
              subscribeLink={
                <Link to={"/subscribe"}>Subscribe to newsletter</Link>
              }
              unsubscribeLink={
                <Link to={"/unsubscribe"}>Unsubscribe from newsletter</Link>
              }
            />
          }
        />
        <Route
          path="/subscribers"
          element={
            <Subscribers
              goBack={goBack}
              isLoading={isLoading}
              subscribersList={results}
              text="Subscribers Information"
            />
          }
        />
        <Route path="/subscribe" />
      </Routes>
    </>
  );
}

export default App;
