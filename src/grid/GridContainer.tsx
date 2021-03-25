import React from 'react';
import './grid.scss';
import styled from 'styled-components';

import GridSquare from './GridSquare'
import GridRow from './GridRow'

interface GridContainerProps {}

function GridContainer({}: GridContainerProps) {
    let gridSize = 25;
    let graph: boolean[][] = [];

    function graphGen(gridSize:number){

        for(let j=0; j<gridSize; j++){

            // generate 1 row
            let newRow: boolean [] = [];
            for(let i=0; i<gridSize; i++){
                newRow.push(false);
            }
            graph.push(newRow);
        }
        console.log(graph);
    };

    // create the initial graph
    graphGen(gridSize);

    return(
        <div className="grid-container">
            {graph.map(row=>(
                <GridRow displayRow={row}/>
            ))}
        </div>
    );
}

export default GridContainer;