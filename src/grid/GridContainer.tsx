import React from 'react';
import './grid.scss';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

import GridRow from './GridRow'

interface GridContainerProps {
    gridSize:number,
    // displayRow?: gridRowData,
}

type graph = {
    rows: gridRowData[],
};

export type gridRowData = {
    id:number,
    idstring:string,
    rowSquares:gridSquareData[],
};

export type gridSquareData = {
    id:number,
    idstring:string,
    value:boolean,
};

function GridContainer({gridSize}: GridContainerProps) {
    let graph:graph = {
        rows:[]
    }

    const [thisGraph, setThisGraph] = useState(graph);


    function graphGen(gridSize:number){
        // for each row:
        for(let i=0; i<gridSize; i++){
            let thisRow:gridRowData = {
                id:i,
                idstring:'row'+i,
                rowSquares:[]
            }

            // for each square:
            for(let j=0; j<gridSize; j++){
                let thisSquare:gridSquareData = {
                    id:j,
                    idstring:'square'+j,
                    value:false,
                }
                thisRow.rowSquares.push(thisSquare)
            }
            graph.rows.push(thisRow);
        }
        console.log('Graph generated!');
        console.log('Graph: ', graph)
    };
    
    graphGen(gridSize);
    
    useEffect(() => {
        // create the initial graph
        setThisGraph(graph);
        console.log('Graph state: ', thisGraph);
    },[])

    return(
        <div className="grid-container">
            {
                thisGraph.rows.map(row => (
                    <GridRow 
                        displayRow = {row} 
                        key={row.idstring} 
                    />
                ))
            }

        </div>
    );
}

export default GridContainer;