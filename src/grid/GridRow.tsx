import React from 'react';
import './grid.scss';
import GridSquare from './GridSquare'
import styled from 'styled-components';

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