import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import "./App.css"
import {action,originals,trending,Comedy,Horror,Romance,Document} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
      <RowPost url={originals} title='NetFlix Originals'/>
      <RowPost url={trending} title='Trending'/>
      <RowPost  url={action} title='Actions' isSmall/>
      <RowPost  url={Comedy} title='Comedy' isSmall/>
      <RowPost  url={Horror} title='Horror' isSmall/>
      <RowPost  url={Romance} title='Romance' isSmall/>
      <RowPost  url={Document} title='Document' isSmall/>

    </div>
  );
}

export default App;
