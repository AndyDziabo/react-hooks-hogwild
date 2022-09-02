import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import HogPen from "./HogPen";
import Filter from "./Filter";
import Sort from "./Sort";

import hogs from "../porkers_data";

function App() {
	
	const [forceState, setForceState] = useState(true);
	const [hogList, setHogList] = useState(hogs);
	const onSelect = (e) => {
		if(e.target.value === 'all'){
			setHogList(hogList => hogs)
		} else if(e.target.value === 'greased'){
			setHogList(hogList => hogs.filter((hog) => hog.greased))
		} else if(e.target.value === 'not-greased'){
			setHogList(hogList => hogs.filter((hog) => !hog.greased))
		}
	}

	const onSort = (e) => {
		if(e.target.value === 'none'){
			setHogList(hogs);
			setForceState(!forceState);
		} else {
			const sorted = [...hogs].sort((a, b) => a[e.target.value] > b[e.target.value] ? 1 : -1,);
			setHogList(sorted);
			setForceState(!forceState);
		}
		
	}
console.log('rendered app')
	return (
		<div className="App">
			<Nav />
			<Filter onSelect={onSelect} />
			<Sort onSort={onSort} />
			<HogPen hogs={hogList}/>
		</div>
	);
}

export default App;
