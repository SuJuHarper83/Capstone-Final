import React from "react";
import useAuth from "../../hooks/useAuth";

const DisplayEntries = (props) => {

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
                                <td className="display-td">{entry.date}</td>
                                <td className="display-td">{entry.title}</td>
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