import React from "react";
import Home from "./component/home";
// import Home from 'dowell-subscription-newsletter'
import { useQuery } from "react-query";
import { Subscribe } from "./component/subscribe";
import { Subscribers } from "./component/subscribers";
import { fetchAllSubscribers } from "./services/request";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isLoading, data: results } = useQuery("fetch-all-subscribers", () =>
    fetchAllSubscribers({ type: "subscriberlist" })
  );

  const goBack = () => navigate(-1);

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
            />
          }
        />
        <Route path="/subscribe" element={<Subscribe goBack={goBack} />} />
      </Routes>
    </>
  );
}

export default App;
