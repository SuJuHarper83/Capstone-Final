import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DisplayEntries = (props) => {
    const [user, token] = useAuth();

    return (
        <>
        <div className="entry-display">
            <table className="display-table">
                <tbody>
                    <tr className="display-head">
                        <th className="display-th">Date</th>
                        <th className="display-th">Title</th>
                    </tr>
                    {props.parentEntries.map((entry, index) => {
                        return (
                            <tr key={index}>
                                <Link to={`/${entry.id}`}>
                                <td className="display-td">{entry.date}</td>
                                <td className="display-td">{entry.entry_title}</td>
                                </Link>
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