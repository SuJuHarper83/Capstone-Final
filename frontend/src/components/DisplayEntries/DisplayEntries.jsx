import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./DisplayEntries.css";

const DisplayEntries = (props) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="wrapper">
        <input className="input"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <br />
      <div className="entry-display">
        <table className="display-table">
          <tbody>
            <tr className="display-head">
              <th className="display-title">Title</th>
              <th className="display-date">Date</th>
            </tr>
            {props.entry
              .filter((entry) => {
                if (
                  (entry.date || "").toLowerCase().includes(search.toLowerCase()) ||
                  (entry.entry_title || "")
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  (entry.input_a || "").toLowerCase().includes(search.toLowerCase()) ||
                  (entry.input_b || "").toLowerCase().includes(search.toLowerCase()) ||
                  (entry.input_c || "").toLowerCase().includes(search.toLowerCase())
                ) 
                  return entry;
              })
              .map((entry) => {
                return (
                  <tr key={entry.id}>
                    <td className="entry-display">
                      <Link className="entry-link" to={`/${entry.id}`}>{entry.entry_title}</Link>
                      <td className="entry-display-b">{entry.input_b}</td>
                    </td>
                      <td className="entry-display">
                      <Link className="entry-link" to={`/${entry.id}`}>{entry.date} </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayEntries;
