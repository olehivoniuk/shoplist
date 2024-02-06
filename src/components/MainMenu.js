import React from 'react';
import '../styles/styles.css';
import Cell from './Cell';

const generateCells = (count) => {
  const cells = [];
  for (let i = 0; i < count; i++) {
    cells.push(<Cell key={i} />);
  }
  return cells;
};

const MainMenu = () => {
  const numberOfCells = 35; // We can adjust  this value as needed
  return (
    <div className='main-menu'>
      {generateCells(numberOfCells)}
    </div>
  );
};

export default MainMenu;
