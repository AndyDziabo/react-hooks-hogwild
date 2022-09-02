import React from "react";
import HogCard from "./HogCard";

function HogPen({ hogs }) {
    const hogArray = hogs.map((hog) => {
        return <HogCard 
            key={hog.name} 
            name={hog.name} 
            image={hog.image}
            specialty={hog.specialty}
            weight={hog.weight}
            greased={hog.greased}
            medal={hog['highest medal achieved']}
        />
    });
    console.log('rendered HogPen')
    return (
        <ul className="ui grid container">
            {hogArray}
        </ul>
    );
}

export default HogPen;