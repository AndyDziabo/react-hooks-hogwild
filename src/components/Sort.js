import React from "react";

function Sort({ onSort}) {
    return(
        <div className="filterWrapper">
            <label for="sort">Sort Hogs:</label>
            <select name="sort" id="sort" onChange={onSort}>
                <option value="none">Non-sorted</option>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    )
}

export default Sort;