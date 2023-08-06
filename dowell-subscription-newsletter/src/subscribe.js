import React from "react";
import { BackIcon, Spinner } from "./icons";

const regex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const Subscribe = (props) => {
  const {
    path,
    email,
    topic,
    goBack,
    status,
    reason,
    loading,
    setEmail,
    setTopic,
    setStatus,
    setReason,
    handleSubscription,
    handleUnsubscription,
  } = props;

  const handleTopic = (e) => setTopic(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);
  const handleReason = (e) => setReason(e.target.value);

  const validateInputs = () => !(topic && regex.test(email) && status);

  const action = () => {
    if (path.includes("unsubscribe")) {
      return handleUnsubscription();
    } else return handleSubscription();
  };

  return (
    <div className="container mx-auto w-4/5 md:w-2/5 h-full">
      <BackIcon
        clickHandler={goBack}
        classNames={[
          "absolute cursor-pointer top-[20px] left-[20px] rounded-full bg-white",
        ]}
        size="2rem"
      />
      <h1 className="text-center mt-20 text-2xl ">
        {path.includes("unsubscribe")
          ? "Unsubscribe from Newsletter"
          : "Subscribe to newsletter"}
      </h1>
      <div className="flex flex-col p-8 mt-8 bg-slate-700 rounded-lg">
        <div className="flex flex-col items-center pb-8 rounded-lg">
          <h1 className="text-2xl pb-2 text-sky-600">Newsletter</h1>
          <p className="text-sm text-white">
            {path.includes("unsubscribe")
              ? "We are sorry to see you go"
              : "Stay up to date with our latest news and products"}
          </p>
        </div>
        <div className="input flex flex-col justify-between">
          <span className="text-white text-lg mb-2">Topic</span>
          <input
            required
            type="text"
            value={topic}
            placeholder="uhmmm"
            onChange={handleTopic}
            className="form-input w-full rounded-lg border-transparent bg-gray-100 mb-6 shadow-sm placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />

          <span className="text-white text-lg mb-2">Status</span>
          <select
            required
            onChange={handleStatus}
            className="mb-6 w-full mt-1 rounded-md border-gray-300 shadow-sm text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          >
            <option>select your subscription status</option>
            <option>Public</option>
            <option>Existing Client</option>
            <option>Internal team</option>
            <option>Prospective Client</option>
            <option>Sales Agent</option>
            <option>Prospective Sales Agent</option>
          </select>

          <span className="text-white text-lg mb-2">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={handleEmail}
            className="form-input w-full rounded-lg border-transparent bg-gray-100 mb-8 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />

          {path.includes("unsubscribe") && (
            <>
              <span className="text-white text-lg mt-[-12px] mb-2">
                Reasons to unsubscribe
              </span>
              <input
                type="text"
                value={reason}
                onChange={handleReason}
                className="form-input w-full rounded-lg border-transparent bg-gray-100 mb-8"
              />
            </>
          )}

          <button
            type="submit"
            onClick={() => action()}
            disabled={validateInputs()}
            className={`flex justify-center items-center rounded-lg w-full text-white py-2  disabled:cursor-not-allowed hover:disabled:bg-slate-100 hover:disabled:text-stone-500  ${
              validateInputs()
                ? "bg-white text-slate-950 opacity-70"
                : "bg-sky-600"
            }`}
          >
            {loading ? (
              <>
                <Spinner
                  classNames={[
                    "animate-spin h-5 w-5 size={size} fill-white mr-2",
                  ]}
                />
                Processing...
              </>
            ) : (
              <>{path.includes("unsubscribe") ? "Unsubscibe" : "Subscribe"}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
