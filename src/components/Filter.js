import React from 'react';

function Filter({onSelect}) {
    return (
        <div className="filterWrapper">
            <label for="filter">Greased or Non-greased</label>
            <select name="filter" id="filter" onChange={onSelect}>
                <option value="all">All Hogs</option>
                <option value="greased">Greased Hogs</option>
                <option value="not-greased">Non-greased Hogs</option>
            </select>
        </div>
    );
}

export default Filter;