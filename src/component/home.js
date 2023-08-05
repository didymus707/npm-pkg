import React from "react";

const Home = (props) => {
  const {
    homeLink,
    subscribeNav,
    subscribeLink,
    unsubscribeNav,
    subscribersNav,
    subscribersLink,
    unsubscribeLink,
  } = props;
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
              <li className="py-4 hover:text-slate-400">{subscribersLink}</li>
              <li className="hover:text-slate-400">{subscribeLink}</li>
              <li className="py-4 hover:text-slate-400">{unsubscribeLink}</li>
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

export default Home;
