import React from "react";

const App = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
         <div>
         <input className="btn1" type="text" value={value} />
         </div>
         <div >
          <input className="btn" type="button" value="AC" onClick={e=>setValue("")} />
          <input className="btn" type="button" value="DC" onClick={e => setValue(value.slice(0,-1))} />
          <input  className="btn" type="button" value="." onClick={e => setValue(value + e.target.value)} />
          <input  className="btn" type="button" value="/" onClick={e => setValue(value + e.target.value)} />
         </div>
         <div>
          <input className="btn" type="button" value="7" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="8" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="9" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="*" onClick={e => setValue(value + e.target.value)} />
         </div>
         <div>
          <input className="btn" type="button" value="4" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="5" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="6" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="+" onClick={e => setValue(value + e.target.value)} />
         </div>
         <div>
          <input className="btn" type="button" value="1" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="2" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="3" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="-" onClick={e => setValue(value + e.target.value)} />
         </div>
         <div>
          <input className="btn" type="button" value="00" onClick={e => setValue(value + e.target.value)} />
          <input className="btn" type="button" value="0" onClick={e => setValue(value + e.target.value)} />
          <input className="btn btn-eql" type="button" value="=" onClick={e => setValue(eval(value))} />
         </div>
        </form>
      </div>
    </div>
  );
};

export default App;
