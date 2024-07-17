import {useRef,useState} from "react"
import './App.css';

function App() {
  const [elements,setelements]=useState([]);
  const inputref=useRef(null);
  let addelement=()=>{
      if(elements==null){
        setelements([{id:Date.now(),task:inputref.current.value}])
      }else{
setelements([{id:Date.now(),task:inputref.current.value},...elements]);
        inputref.current.value=""
      }

  }
  return (
    <>
    <div className="calculator-container">
     <div>
      <label><h2>Enter your task</h2> </label>
      <br />
      <input type="text"ref={inputref}></input>
      <button onClick={addelement}>submit</button>
      </div>
       <div>
        <p></p>
       </div>
       <ul>
        {elements.map(current => (
          <li key={current.id}>{current.task} {"    "}
           <button onClick={()=>
            {
              setelements(elements.filter((a)=>{ return a.id !== current.id}))
              }}>
            delete
            </button>
           </li>
        ))}
      </ul>
    {console.log(elements)}
    </div>
    </>
  );
}

export default App;
