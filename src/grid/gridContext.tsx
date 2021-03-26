import React from 'react';

const GridContext = React.createContext();

function useGrid() {
    const context = React.useContext(GridContext);
    if (!context) {
        throw new Error(`useGrid must be used within a GridProvider`);
    }
    return context;
};

function GridProvider(props){
    const [grid, setGrid] = React.useState({})
    // const v
    // INCOMPLETE
}