import React from 'react';
import './grid.scss';
import styled from 'styled-components';

import type gridRowData from './GridContainer'
import type gridSquareData from './GridContainer'

interface GridSquareProps {
    square:typeof gridSquareData,
    row:typeof gridRowData,
}

let squareClasses:string = 'grid-square';

function checkAlive(square:typeof gridSquareData){
    squareClasses = 'grid-square ' + !square.value;
    square.value = !square.value;
    console.log('Toggled ', square.idstring, ' ', square.value);
    console.log('css classes: ', squareClasses);
}

function GridSquare({square, row}: GridSquareProps) {

    let coords:number[] = [row.id, square.id] 

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        checkAlive(square);
        console.log(coords);

    }

    return(
        <button className={squareClasses} onClick={(event:React.MouseEvent<HTMLButtonElement>)=>{handleClick(event)}} ></button>
    );
}

export default GridSquare;