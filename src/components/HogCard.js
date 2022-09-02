import React, {useState} from "react";
import HogDetails from "./HogDetails";

function HogCard({ name, image, specialty, weight, greased, medal }) {
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        setToggle(!toggle);
        return toggle;
    }

    return(
        <li className="ui eight wide column" onClick={handleClick}>
            <div className={toggle ? "pigTile maxPigTile" : "pigTile minPigTile"}>
                <h3>{name}</h3>
                <img height='200px' width='200px' src={image} alt={name} />
                {toggle ? <HogDetails specialty={specialty} weight={weight} greased={greased} medal={medal} /> : null}
            </div>
            
        </li>
    );
}

export default HogCard;