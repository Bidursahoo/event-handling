import React,{useState} from "react";
// var t1 = "Submitted";
// var t2 = "Hello";
function App() {
    const [text , setText] = useState("Hello");
    // const [color , setColor] = useState("white");
    const [value , setValue] = useState("");
    function onValue(event) {
        // if(event.target.value.length > 6){
        //   setColor("green")
        // }
        setValue(event.target.value)
        // if(text.length > 5){
        //   setColor("green")
        // }
    }
    function clicks(){
        // setText(t1);
        // var t3 = t1;
        // t1 = t2;
        // t2 = t3;
        setText(value)
    }
    // function mouseOut(){
    //     setColor("white")
    // }
    // function mouseIn(){
    //     setColor("black")
    // }
  return (
    <div className="container">
      <h1>{text}</h1>
      <input onChange={onValue} type="text" placeholder="What's your name?" value={value}/>
      {/* <button onClick={clicks} onMouseOut={mouseOut} onMouseOver={mouseIn} style={{backgroundColor:color}}>Submit</button> */}
      <button onClick={clicks} >Submit</button>
    </div>
  );
}

export default App;
