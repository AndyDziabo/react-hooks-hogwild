import React from 'react';

function HogDetails({ specialty, greased, weight, medal }) {
    console.log('details');
    return (
        <div>
            <h3>Specialty: {specialty}</h3>
            <h3>Weight: {weight}</h3>
            <h3>Greased: {greased ? 'Yes' : 'No'}</h3>
            <h3>Highest Medal Achieved: {medal}</h3>
        </div>
    );
}

export default HogDetails;