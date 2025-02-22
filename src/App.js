import React from 'react';
import './App.css';
import { CircularProgress, CircularProgressWithLabel, LinearProgress, LinearProgressWithLabel } from './components/atoms/Progress/Progress';


function App() {
  return (
    <div className="App">
        <CircularProgress color={"rgb(144, 202, 249)"} varient={"determinate"} value={"progress"}></CircularProgress>
        <CircularProgress color={"rgb(72, 101, 124)"} varient={"determinate"} value={75}></CircularProgress>
        <CircularProgress color={"rgb(144, 202, 249)"} ></CircularProgress>
        <CircularProgressWithLabel color={"rgb(72, 101, 124)"} varient={"determinate"} value={"progress"} interval={10} ></CircularProgressWithLabel>
        <LinearProgress  varient={"determinate"}></LinearProgress>
        <LinearProgress></LinearProgress>
        <LinearProgressWithLabel value={"progress"} interval={10}></LinearProgressWithLabel>
    </div>
  );
}

export default App;
