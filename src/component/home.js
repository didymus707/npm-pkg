import React from "react";
import { unsubscribe } from "../services/request";

export const Home = ({
  homeLink,
  subscribersNav,
  subscribeNav,
  unsubscribeNav,
  children,
}) => {
  return (
    <div className="sm:container mx-auto">
      <div className="mx-auto w-8/12 md:w-2/5 bg-[#282B34] mt-28 rounded-lg">
        <nav className="text-white w-full pt-4 px-8">
          <ul className="flex">
            <li className="hover:text-slate-400">{homeLink}</li>
            <li className="ml-auto hover:text-slate-400">{subscribersNav}</li>
            <li className="mx-4 hover:text-slate-400">{subscribeNav}</li>
            <li className="hover:text-slate-400">{unsubscribeNav}</li>
          </ul>
        </nav>
        <div className="text-white">
          <div className="pt-12 text-center">
            <h1 className="text-xl text-sky-500">
              Dowell Newsletter Subscription Service
            </h1>
            <p className="mt-4">
              Welcome to the Dowell Newsletter Subscripion Service
            </p>
          </div>
          <div className="px-12 pt-8 pb-12">
            <ul>
              <li className="py-4">{children}</li>
              <li>{children}</li>
              <li className="py-4">{children}</li>
              {/* <li>
              <Link>Distribute Newsletter</Link>
            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <Link to={"/"}>Home</Link>
            <Link to={"/subscribers"}>Subscribers</Link>
            <Link to={"/subscribe"}>Subscribe</Link>
            <Link to={"/unsubscribe"}>Unsubscribe</Link> */
}
