import './App.css';
import React, { useState, setState } from 'react';

function App() {
  //localStorage.removeItem('todo');

  const [valDesc, setDesc] =  useState('');
  const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem('todo')));
  
  const getCheckeCount = () => {
    let count = 0;
    if (Array.isArray(toDoList))
      toDoList.forEach((item) => { count += item.done ? 1 : 0 });
    return count;

  };
  const [checkCount, setToDoIsDoneList] = useState(getCheckeCount());
  
  useState(JSON.parse(localStorage.getItem('todo')));
  

  const handleInput = (e) => {
    setDesc(e.target.value);
  }  
  const handleButton = (e) => {
    let val = {desc: valDesc};
    setDesc('');
    setToDoList((items) => {
      let newItems = Array.isArray(items) ? [...items, {desc: valDesc, done: false}] : [{desc: valDesc, done: false}];
      localStorage.setItem('todo', JSON.stringify(newItems));
      return newItems;
    });
  }
  

  const handleCheckBox = (e, i) => {
    toDoList[i].done = e.target.checked;
    setToDoIsDoneList(toDoList[i].done ? checkCount + 1 : checkCount -1);
    localStorage.setItem('todo', JSON.stringify(toDoList));
  }


  const reactItems = (toDoList && toDoList.length) ? toDoList.map((e, i) =>
    <div key={i}>{i + 1}. {e.desc}<input key={i} type="checkbox" checked={toDoList[i].done} onChange={(e)=>(handleCheckBox(e, i))}/></div>
  ) : (<div>nothing</div>);

  return (
    <div className="App">
      <div style={{backgroundColor:"#999999"}}>
          todo
      </div>
      {reactItems}
      <div style={{backgroundColor:"#999999"}}>
        <input value={valDesc} onChange={handleInput}/>
        <button onClick={handleButton}>add</button>
      </div>
    </div>
  );
}

export default App;
