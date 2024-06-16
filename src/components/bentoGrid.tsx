// import { cn } from "@/utils/cn";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

// export function BentoGridDemo() {
//   return (
//     <BentoGrid className="w-full mt-0 md:mt-24 lg:mt-48  mx-auto h-80  heightin">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           githubUrl={item.githubUrl}
//           liveSiteUrl={item.liveSiteUrl}
//           description={item.description}
//           header={<Skeleton imageSrc={item.imageSrc} />} // Pass imageSrc to Skeleton
//           icon={item.icon}
//           customClassName={i < 3 ? "h-[28rem]" : ""} // Apply increased height to first 3 items
//           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//         />
//       ))}
//     </BentoGrid>
//   );
// }

// interface SkeletonProps {
//   imageSrc: string;
// }

// const Skeleton: React.FC<SkeletonProps> = ({ imageSrc }) => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
//     <img
//       src={imageSrc}
//       alt="image"
//       className="object-cover w-full h-full rounded-xl"
//     />
//   </div>
// );
// interface Item {
//   title: string;
//   description: string;
//   imageSrc: string;
//   icon: React.ReactNode;
//   githubUrl: string;
//   liveSiteUrl: string;
// }

// const items: Item[] = [
//   {
//     title: "Forkify",
//     description:
//       " This web application is more than just a recipe search engine; it represents my journey in mastering JavaScript and honing a multitude of development skills. ",
//     imageSrc: "img/image985.png",
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//     githubUrl: "https://github.com/ankur-paul/forkify",
//     liveSiteUrl: "https://forkify-ankur-p.netlify.app",
//   },
//   {
//     title: "Calculator",
//     description:
//       "This is a simple calculator, which can perform some basic arithmatic, but making it was a great learning experience.I plan to improve it in the future also. ",
//     imageSrc: "img/image986.png",
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//     githubUrl: "https://github.com/ankur-paul/calculator-FM",
//     liveSiteUrl: "https://calc-ankur.netlify.app",
//   },
//   {
//     title: "Omnifood",
//     description:
//       "This project represents the starting of my web development journey, as this is the first big project that i built after learning HTML and CSS.",
//     imageSrc: "img/image987.png",
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//     githubUrl: "https://github.com/ankur-paul/omnifood",
//     liveSiteUrl: "https://omnifood-ankur.netlify.app",
//   },
//   // {
//   //   title: "The Power of Communication",
//   //   description:
//   //     "Understand the impact of effective communication in our lives.",
//   //   header: <Skeleton />,
//   //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   // },
//   // {
//   //   title: "The Pursuit of Knowledge",
//   //   description: "Join the quest for understanding and enlightenment.",
//   //   header: <Skeleton />,
//   //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   // },
//   // {
//   //   title: "The Joy of Creation",
//   //   description: "Experience the thrill of bringing ideas to life.",
//   //   header: <Skeleton />,
//   //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   // },
//   // {
//   //   title: "The Spirit of Adventure",
//   //   description: "Embark on exciting journeys and thrilling discoveries.",
//   //   header: <Skeleton />,
//   //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   // },
// ];

// export default BentoGridDemo;
