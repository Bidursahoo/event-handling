import React,{useState} from "react";
// var t1 = "Submitted";
// var t2 = "Hello";
// const count = 1;
function App() {
    const [text , setText] = useState("Hello");
    // const [fname , setFname] = useState("");
    // const [lname , setLname] = useState("");
    // const [color , setColor] = useState("white");
    // const [value , setValue] = useState("");
    // function onValue(event) {
        // if(event.target.value.length > 6){
        //   setColor("green")
        // }
        // setValue(event.target.value)
        // if(text.length > 5){
        //   setColor("green")
        // }
    // }
    // function onFname(event) { 
    //     setFname(event.target.value);
    // }
    // function onLname(event) { 
    //     setLname(event.target.value);
    // }
    const [name , setName] = useState({
      fname: "",
      lname : ""
    });
    function clicks(){
        // setText(t1);
        // var t3 = t1;
        // t1 = t2;
        // t2 = t3;
        // setText(value)
    }
    // function mouseOut(){
    //     setColor("white")
    // }
    // function mouseIn(){
    //     setColor("black")
    // }
    function formSubmit(event) { 
      event.preventDefault()
      setText("")
     }
     function updateValues(event){
        //Object deStructuring
        const {name , value} = event.target;


        //object structured
        // const targetValue = event.target.value;
        // const targetName = event.target.name;
        // setName(name[targetElement] = targetValue)
        if(name === "fname"){
          setName({fname : value , lname: name.lname});
        }else if(name === "lname"){
          setName({fname : name.fname , lname:value})
        }
     }
  return (
    <div className="container">
    <form onSubmit={formSubmit}>
      <h1>{text} {name.fname} {name.lname}</h1>
      <input onChange={updateValues} type="text" name="fname" placeholder="First Name" value={name.fname}/>
      <input onChange={updateValues} type="text" name="lname" placeholder="Last Name" value={name.lname}/>
      {/* <button onClick={clicks} onMouseOut={mouseOut} onMouseOver={mouseIn} style={{backgroundColor:color}}>Submit</button> */}
      <button type="submit" onClick={clicks} >Submit</button>
      </form>
    </div>
  );
}

export default App;
