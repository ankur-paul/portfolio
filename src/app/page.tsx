import Image from "next/image";
import Flipwords from "@/components/Flipwords";
import { cn } from "@/utils/cn";
// import BentoGridDemo from "@/components/bentoGrid";
import Form from "@/components/form";
export default function Home() {
  return (
    <div className="parent">
      <div className="container">
        <div className="intro">
          <div className="hi-msg">
            Hi, <span>I&apos;m Ankur</span>
          </div>
          <Flipwords />
          <button className="linkedin mt-6 relative inline-flex h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="btn-linkedin inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
              <a href="https://www.linkedin.com/in/ankurpaul52" target="_blank">
                LinkedIn
              </a>
            </span>
          </button>
          <div className="mouse"></div>
        </div>
      </div>
      <div className="container">
        <div className="projects">
          <div className="projects-item rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent ">
            <div className="header rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent ">
              <Image
                src="/img/image985.png"
                alt="image"
                width={1080}
                height={540}
              />
            </div>
            <h2 className="title  font-bold font-sans text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              Forkify
            </h2>
            <p className="description font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              Dhis web application is more than just a recipe search engine; it
              represents my journey in mastering JavaScript and honing a
              multitude of development skills.
            </p>
            <div className="flex space-x-4">
              <button className="mt-6 relative inline-flex h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a
                    href="https://github.com/ankur-paul/forkify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </span>
              </button>
              <button className="mt-6 relative inline-flex h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a
                    href="https://forkify-ankur-p.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-500 hover:underline"
                  >
                    Live Site
                  </a>
                </span>
              </button>
            </div>
          </div>
          <div className="projects-item rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent ">
            <div
              className={
                "header rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent "
              }
            >
              <Image
                src="/img/image986.png"
                alt="image"
                width={1080}
                height={540}
              />
            </div>
            <h2 className="title  font-bold font-sans text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              Calculator
            </h2>
            <p className="description font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              This is a simple calculator, which can perform some basic
              arithmatic, but making it was a great learning experience.I plan
              to improve it in the future also.
            </p>
            <div className="flex space-x-4">
              <button className="mt-6 relative inline-flex h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a
                    href="https://github.com/ankur-paul/calculator-FM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </span>
              </button>
              <button className="mt-6 relative inline-flex h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a
                    href="https://calc-ankur.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-500 hover:underline"
                  >
                    Live Site
                  </a>
                </span>
              </button>
            </div>
          </div>
          <div className="projects-item rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent ">
            <div
              className={
                "header rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent "
              }
            >
              <Image
                src="/img/image987.png"
                alt="image"
                width={1080}
                height={540}
              />
            </div>
            <h2 className="title  font-bold font-sans text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              Omnifood
            </h2>
            <p className="description font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              This project represents the begining of my web development
              journey, as this is the first big project that i built after
              learning HTML and CSS.
            </p>
            <div className="flex space-x-4">
              <button className="mt-6 relative inline-flex h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a
                    href="https://github.com/ankur-paul/omnifood"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </span>
              </button>
              <button className="mt-6 relative inline-flex h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a
                    href="https://omnifood-ankur.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-500 hover:underline"
                  >
                    Live Site
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section--form container">
        <Form />
        <form
          className="max-w-md mx-auto pt-24"
          name="contact"
          method="POST"
          action="/success"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" className="text-gray-400" />
          <button type="submit">submit</button>
        </form>

        <div className="footer">
          <p>
            Built by{" "}
            <a href="https://linkedin.com/in/ankurpaul52">Ankur Paul</a>
          </p>
          <p>
            <a href="https://github.com/ankur-paul" target="_blank">
              GitHub
            </a>{" "}
            |
            <a href="https://www.instagram.com/ankurpaul_07/" target="_blank">
              {" "}
              Instagram
            </a>{" "}
            |
            <a href="https://x.com/AnkurPaul_07" target="_blank">
              {" "}
              X.com
            </a>{" "}
            |
            <a href="https://linkedin.com/in/ankurpaul52" target="_blank">
              {" "}
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
