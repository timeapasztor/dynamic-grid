import React from 'react';
import './App.css';
import testtimi from "./data-example-timi.json";
// import testtimi2 from "./data-example-timi2.json";
// import test1 from "./data-example01.json";
// import test2 from "./data-example02.json";
// import test3 from "./data-example03.json";
import {HRectangle, Placeholder, Square, VRectangle} from './StyledComponents.css';

function App() {

// the 3 possible shapes -> giving them a number to represent each case
// 1 horizontal position, 1 vertical position = 1
// 1 horizontal position, 2 vertical position = 2
// 2 horizontal position, 1 vertical position = 3

  const helper: any[] = [];
  let data = testtimi;
  if (data.array.length > 0) {
    // I iterate through the array and prepare one array with the cases
    data.array.forEach((item) => {
      if (item.horizontalOccupation === 1 && item.verticalOccupation === 1) {
        helper.push(1);
      }
      if (item.horizontalOccupation === 1 && item.verticalOccupation === 2) {
        helper.push(2);
      }
      if (item.horizontalOccupation === 2 && item.verticalOccupation === 1) {
        helper.push(3);
      }
    })
  }
  console.log('helper', helper);
  // one dimensional array <- to build up the blocks and reserve the spaces
  const special = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const edit = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  helper.forEach((el) => {
    if (el === 1) {
      // 1 meaning: it is a square
      for (let i = 0; i < special.length; i++) {
        if (special[i] === 0) {
          edit[i] = 1;
          return special[i] = 1;
        }
      }
    }
    if (el === 2) {
      // 2 meaning: it is a vertical rectangle -> then i and i+3 will be occupied
      for (let i = 0; i < special.length; i++) {
        if (special[i] === 0 && special[i + 3] === 0) {
          edit[i] = 2;
          edit[i + 3] = 0;
          special[i] = 2;
          return special[i + 3] = 2;
        }
      }
    }
    if (el === 3) {
      // 3 meaning: it is a horizontal rectangle -> then i and i+1 will be occupied
      for (let i = 0; i < special.length; i++) {
        if (special[i] === 0 && special[i + 1] === 0) {
          edit[i] = 3;
          edit[i + 1] = 0;
          special[i] = 3;
          return special[i + 1] = 3;
        }
      }
    }
  })
  //special: [2, 1, 1, 2, 3, 3, 1, 1, 1] (in testtimi case)
  console.log('special', special);
  // if array is longer and the grid is 3x3, I need only the first 9
  const slicedArray = edit.slice(0, 9);
  console.log('sliced', slicedArray);
  // edit is for: removing the partner-elements value and put 0 instead
  // edit: [2, 1, 1, 0, 3, 0, 1, 1, 1] (in testtimi case)
  console.log('edit', edit);
  const firstRow = edit.slice(0, 3);
  const secondRow = edit.slice(3, 6);
  const thirdRow = edit.slice(6, 9);
  const finalGrid = [firstRow, secondRow, thirdRow];
  // [2, 1, 1]
  // [0, 3, 0]
  // [1, 1, 1] (in testtimi case)
  console.log('FINAL', finalGrid);

  const elements: any[] = [];
  const renderShapes = (shape: any, index: any) => {
    if (shape === "rectanglePlaceholder") {
      // this is where the box is 0
      return elements.push(
          <Placeholder id={index} key={`${shape}-${index}-${Math.floor(Math.random() * 10) + 1}`} />
      );
    }
    if (shape === "square1") {
      return elements.push(
          <Square id={index} key={`${shape}-${index}-${Math.floor(Math.random() * 10) + 1}`} i={index[0]} j={index[1]} />
      );
    }
    if (shape === "rectangle2") {
      // for example: [2,1] (in testtimi case)
      return elements.push(
          <VRectangle id={index} key={`${shape}-${index}-${Math.floor(Math.random() * 10) + 1}`} i={index[0]} j={index[1]} />
      );
    }
    if (shape === "rectangle3") {
      // for example: [3,3] (in testtimi case)
      return elements.push(
          <HRectangle id={index} key={`${shape}-${index}-${Math.floor(Math.random() * 10) + 1}`} i={index[0]} j={index[1]} />
      )
    }
  };

  const iMax = 3;
  const jMax = 3;
  const renderElements = () => {
    for (let i = 0; i < iMax; i++) {
      for (let j = 0; j < jMax; j++) {
        if (finalGrid[i][j] === 0) {
          continue;
        }
        // +1 everywhere below in the if's -> to switch from 0-based
        if (finalGrid[i][j] === 1) {
          renderShapes("square1", [i+1,j+1])
        }
        if (finalGrid[i][j] === 2) {
          renderShapes("rectangle2", [i+2,j+1])
        }
        if (finalGrid[i][j] === 3) {
          renderShapes("rectangle3", [i+1,j+2])
        }
      }
    }
  }
  renderElements();

  return (
    <div className="App">
      <h1>Dynamic Grid Task</h1>
      <div style={{ justifyContent: 'center', display: 'grid', gridTemplateColumns: '32px 32px 32x', gridTemplateRows: '32px 32px 32x', gap: '12px' }}>{elements}</div>
    </div>
  );
}

export default App;
