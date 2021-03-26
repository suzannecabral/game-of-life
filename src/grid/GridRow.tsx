import React from 'react';
import './grid.scss';
import GridSquare from './GridSquare'
import styled from 'styled-components';

import type gridRowData from './GridContainer'

interface GridRowProps {
    displayRow:typeof gridRowData,
}

function GridRow({displayRow}: GridRowProps) {

    return(
        <div className="grid-row">
            {displayRow.rowSquares.map(square=>(
                <GridSquare 
                    square={square} 
                    key={square.idstring} 
                    row={displayRow}
                />
            ))}
        </div>
    );
}

export default GridRow;