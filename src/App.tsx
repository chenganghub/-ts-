import React from 'react';
import './App.css';
import  ClassList   from  './component/ClassList'
import  Hookslist   from  './component/Hookslist'
function App() {
  return (
    <div className="App">
         <ClassList></ClassList> 
         <hr></hr>
         <Hookslist></Hookslist>
    </div>
  );
}

export default App;
