// import React from "react";
// import { useState } from "react";
// import useAuth from "../../hooks/useAuth";

// const SearchBar = (props) => {
//     const [user, token] = useAuth();
//     const [search, setSearch] = useState("");

//     return (
//         <div className="search-bar">
//             <div>
//                 <input
//                     type="text"
//                     value={search}
//                     onChange={(event) => setSearch(event.target.value)}
//                     />
//                     {/* <button className="search-btn" onClick={() => setSearch()}>
//                         Filter
//                     </button> */}
//             </div>
//             <table>
//                 <tbody className="search-table">
//                     {props.entry.filter((entry) => {
//                         if (
//                             entry.date.toLowerCase().includes(search.toLowerCase()) ||
//                             entry.entry_title.toLowerCase().includes(search.toLowerCase()) ||
//                             entry.input_a.toLowerCase().includes(search.toLowerCase()) ||
//                             entry.input_b.toLowerCase().includes(search.toLowerCase()) ||
//                             entry.input_c.toLowerCase().includes(search.toLowerCase()) 
//                         ) {
//                             return entry;
//                         }
//                     })
//                     .map((entry, index) => {
//                         return (
//                             <div>
//                                 <table>
//                                     <tbody>
//                                     <tr key={index}>
//                                         <td className="search-td">{entry.date}</td>
//                                         <td className="search-td">{entry.entry_title}</td>
//                                     </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default SearchBar