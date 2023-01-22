import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
    const [search, setSearch] = useState([]);

    return (
        <div className="search-bar">
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    />
                    <button className="search-btn" onClick={() => setSearch()}>
                        Filter
                    </button>
            </div>
            <table>
                <tbody className="search-table">
                    {props.entry.filter((entry) => {
                        if (search === "") {
                            return entry;
                        } if (
                            entry.date.includes(search) ||
                            entry.input_a.includes(search) ||
                            entry.input_b.includes(search) ||
                            entry.input_c.includes(search)
                        ) {
                            return entry;
                        }
                    })
                    .map((entry, index) => {
                        return (
                            <div>
                                <table>
                                    <tr key={index}>
                                        <td className="search-td">{entry.date}</td>
                                        <td className="search-td">{entry.title}</td>
                                    </tr>
                                </table>
                            </div>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default SearchBar