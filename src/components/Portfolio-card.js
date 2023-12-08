import React from "react";
// import github from "../assets/icons/github.png";

const PortfolioCard = (props) => {
  return (
    <>
      {props.portfolios &&
        props.portfolios.map((portfolio) => {
          return (
            <div className="flex justify-center items-center flex-col lg:flex-row shadow-lg lg:w-[1020px] lg:h-[420px] my-10 py-5 rounded-xl bg-white lg:px-5 gap-10 lg:gap-16">
              <div className="pro_img w-80 lg:w-[520px] h-auto lg:390px">
                <a href={portfolio.sitelink} target="_blank" rel="noreferrer">
                  <img
                    src={portfolio.siteImage}
                    alt="work_table"
                    className="roll-up"
                  />
                </a>
              </div>

              <div className="flex justify-center items-center flex-col text-center w-96 gap-3 lg:mr-10">
                <h5 className="text-blue-600 text-lg lg:text-xl font-bold mb-3">
                  {portfolio.name}
                </h5>
                <p className="text-gray-500 text-base lg:text-lg leading-6">
                  {portfolio.details}
                </p>
                <div className="flex justify-center items-center gap-3">
                  {portfolio.stacks &&
                    portfolio.stacks.map((stack) => {
                      return (
                        <p className=" shadow-lg px-4 py-2 font-semibold">
                          {stack}
                        </p>
                      );
                    })}
                </div>
                <div className="flex justify-center items-center gap-3 lg:gap-5 my-10">
                  <a
                    href={portfolio.githublink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center font-semibold gap-1 hover:text-blue-600"
                  >
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    href={portfolio.sitelink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center font-semibold gap-1 hover:text-blue-600"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>

                <div></div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PortfolioCard;
