import Image from "next/image";
import Flipwords from "@/components/Flipwords";
import BentoGridDemo from "@/components/bentoGrid";

export default function Home() {
  return (
    <div className="parent">
      <div className="container">
        <div className="intro">
          <div className="hi-msg">
            Hi, <span>I am Ankur</span>
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
        <BentoGridDemo />
        <div className="footer">
          <p>
            Built by{" "}
            <a href="https://linkedin.com/in/ankurpaul52">Ankur Paul</a>
          </p>
          <p>
            <a href="https://github.com/ankur-paul">GitHub</a> |
            <a href="https://www.instagram.com/ankurpaul_07/"> Instagram</a> |
            <a href="https://x.com/AnkurPaul_07"> X.com</a> |
            <a href="https://linkedin.com/in/ankurpaul52"> LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}
