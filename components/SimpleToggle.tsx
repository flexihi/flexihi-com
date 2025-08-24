// "use client";

// import clsx from "clsx";
// import { useState } from "react";

// export default function SimpleToggle() {
//   const [isMonthly, setMonthly] = useState(false);
//   return (
//     <div className="flex gap-4 items-center my-20 text-[#111927] text-lg leading-5">
//       <button
//         onClick={() => {
//           if (!isMonthly) {
//             setMonthly(true);
//           }
//         }}
//       >
//         Monthly
//       </button>
//       <button
//         onClick={() => {
//           setMonthly(!isMonthly);
//         }}
//         className={clsx({
//           "w-[72px] h-[33px] bg-primary-light hover:bg-primary rounded-2xl flex items-center transition-all duration-300":
//             true,
//           "flex-row-reverse": !isMonthly,
//         })}
//       >
//         <div className="h-6 w-6 bg-white rounded-full mx-1" />
//       </button>
//       <button
//         onClick={() => {
//           if (isMonthly) {
//             setMonthly(false);
//           }
//         }}
//       >
//         Yearly
//       </button>
//     </div>
//   );
// }
