import React from 'react';
import './grid.scss';
import GridSquare from './GridSquare'

interface GridRowProps {
    displayRow: boolean[]
}

function GridRow({displayRow}: GridRowProps) {

    return(
        <div className="grid-row">
            {displayRow.map(square=>(
                <GridSquare/>
            ))}
        </div>
    );
}

export default GridRow;