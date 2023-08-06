import React, { useState } from "react";
import Home from "./component/home";
import { useQuery } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { Subscribe } from "./component/subscribe";
import { Subscribers } from "./component/subscribers";
import { toast } from "react-toastify";
// import { Home, Subscribers, Subscribe } from "dowell-subscription-newsletter";
import {
  fetchAllSubscribers,
  unsubscribe,
  subscribe,
} from "./services/request";
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
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const { isLoading, data: results } = useQuery("fetch-all-subscribers", () =>
    fetchAllSubscribers({ type: "subscriberlist" })
  );

  const goBack = () => navigate(-1);

  const showSuccess = () => {
    toast.success("Subscribed !", {
      position: "bottom-center",
    });
  };

  const showError = (msg) => {
    toast.error(msg, {
      position: "bottom-center",
    });
  };

  const handleSubscription = async () => {
    const payload = {
      email,
      topic,
      typeOfSubscriber: status,
      params: { type: "subscribe" },
    };
    try {
      setLoading(true);
      await subscribe(payload);
      setLoading(false);
      showSuccess();
      setTopic("");
      setEmail("");
      setStatus(null);
      setReason("");
    } catch (error) {
      setLoading(false);
      showError(error.message);
      console.log(error);
    }
  };

  const handleUnsubscription = async () => {
    const payload = {
      email,
      topic,
      typeOfSubscriber: status,
      reasonToUnsubscribe: reason,
      params: { type: "unsubscribe" },
    };
    try {
      setLoading(true);
      await unsubscribe(payload);
      showSuccess();
      setLoading(false);
      setTopic("");
      setEmail("");
      setStatus(null);
    } catch (error) {
      setLoading(false);
      showError(error.message);
      console.log(error);
    }
  };

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
        <Route
          path="/subscribe"
          element={
            <Subscribe
              email={email}
              topic={topic}
              goBack={goBack}
              path={pathname}
              status={status}
              loading={loading}
              setEmail={setEmail}
              setTopic={setTopic}
              setStatus={setStatus}
              handleSubscription={handleSubscription}
              handleUnsubscription={handleUnsubscription}
            />
          }
        />
        <Route
          path="/unsubscribe"
          element={
            <Subscribe
              email={email}
              topic={topic}
              goBack={goBack}
              path={pathname}
              reason={reason}
              status={status}
              loading={loading}
              setEmail={setEmail}
              setTopic={setTopic}
              setReason={setReason}
              setStatus={setStatus}
              handleSubscription={handleSubscription}
              handleUnsubscription={handleUnsubscription}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
