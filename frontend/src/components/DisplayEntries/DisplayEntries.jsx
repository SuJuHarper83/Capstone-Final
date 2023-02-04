import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DisplayEntries = (props) => {
  const [user, token] = useAuth();
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="entry-display">
        <table className="display-table">
          <tbody>
            <tr className="display-head">
              <th className="display-th">Date</th>
              <th className="display-th">Title</th>
            </tr>
            {props.parentEntries
              .filter((entry) => {
                if (
                  entry.date.toLowerCase().includes(search.toLowerCase()) ||
                  entry.entry_title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  entry.input_a.toLowerCase().includes(search.toLowerCase()) ||
                  entry.input_b.toLowerCase().includes(search.toLowerCase()) ||
                  entry.input_c.toLowerCase().includes(search.toLowerCase())
                ) 
                  return entry;
              })
              .map((entry) => {
                return (
                  <tr key={entry.id}>
                    <td className="entry-display">
                      <Link to={`/${entry.id}`}>{entry.date} </Link>
                      <Link to={`/${entry.id}`}>{entry.entry_title}</Link>
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
