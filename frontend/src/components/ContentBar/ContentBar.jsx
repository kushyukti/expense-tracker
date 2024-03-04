// import React from "react";
// import "./contentbar.css";
// import { useGlobalContext } from "../../hooks/customHooks";
// import {
//   calender,
//   comment,
//   dollar,
//   transactions,
//   trash,
// } from "../../utils/Icons";

// const ContentBar = () => {
//   const { incomes } = useGlobalContext();

//   return (
//     <div className="contentbar__container">
//       <div className="icon">{transactions}</div>
//       <div className="content"></div>
//       {incomes.map(function (data) {
//         return (
//           <>
//             <h5>{data.title}</h5>
//             <div className="inner-content">
//               <div className="text">
//                 <p>
//                   {dollar} {data.amount}
//                 </p>
//                 <p>
//                   {calender} {data.date}
//                 </p>
//                 <p>
//                   {comment} {data.description}
//                 </p>
//               </div>

//               <div className="btn-con">
//                 <button>{trash}</button>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default ContentBar;
