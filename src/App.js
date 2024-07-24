import { useEffect, useRef, useState } from "react";
// import { useRef } from "react";
// import { useContext } from "react";
// import {DataContext} from "./DataContext.js";
import "./App.css";
// import RandomColor from "./RandomColor";
// import Accordian from "./Accordian";
// import Revise from "./Revise";
// import { List } from "./Revise";
// import {item} from "./Data.js";
// import Todo from "./Todo.js";
// import Weather from "./Weather.js"

// import Accordian from "./Accordian";
// import RandomColor from "./RandomColor";
// import StarRating from "./StarRating";

// function App() {
//  const [position,setPosition]=useState({
//   x:0,
//   y:0
//  })
//   return (
//     <>

//     <div style={{
//       position:"relative",
//       width:'100vw',
//       height:'100vh'}}
//       onPointerMove={(e)=>{
//         setPosition({
//           x:e.clientX,
//           y:e.clientY,
//         })
//       }} >
//     <div style={{
//       position:'absolute',
//       backgroundColor:'green',
//       height:'20px',
//       width:'20px',
//       borderRadius:'50%',
//       transform:`translate(${position.x}px,${position.y}px)`,
//       left:-10,
//       top:-10
//     }}></div>
//   </div>

//     </>
//   );
// }

// export default App;

// export default function App()
// {
//   const [person , setPerson]=useState({
//     name:"",
//     age:0,
//     email:""
//   })
//   function handleName(e)
//   {
//     setPerson({
//       name:e.target.value,
//       age:person.age,
//       email:person.email
//     })
//   }
//   function handleAge(e)
//   {
//     setPerson({
//       name:person.name,
//       age:e.target.value,
//       email:person.email
//     })
//   }
//   function handleEmail(e)
//   {
//     setPerson({
//       name:person.name,
//       age:person.age,
//       email:e.target.value
//     })
//   }
//   return(<>
//       <label>Name : </label>
//       <input placeholder="name" value={person.name} type="text" onChange={handleName}/>
//       <label>Age : </label>
//       <input placeholder="Age" value={person.age}  type="text" onChange={handleAge}/>
//       <label>Email : </label>
//       <input placeholder="Email" value={person.email} type="email" onChange={handleEmail}/>
//       <p>Name : {person.name}</p>
//       <p>Name : {person.age}</p>
//       <p>Name : {person.email}</p>

//     </>)
// }

// let index = 0;
// export default function App() {
//   const [name, setName] = useState("");
//   const [emp, setEmp] = useState([]);
//   function handleAdd() {
//     setEmp([{ id: index++, empName: name }, ...emp]);
//   }
//   return (
//     <>
//       <h2>Employee Name:</h2>
//       <input
//         placeholder="Enter name"
//         value={name}
//         type="text"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <button onClick={handleAdd}>Add</button>
//       <ul>
//         {emp.map((employee) => (
//           <li key={employee.id}>
//             {employee.empName}
//             {employee.id}
//             <button style={{ marginLeft: "1rem" }} onClick={()=>{
//               setEmp(emp.filter((a)=> a.id !==employee.id))
//             }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default function App()
// { const [arr ,setArr]=useState([0,0,0]);
//   function handleCount(i)
//   {
//      setArr(arr.map((ele ,idx)=>{
//        if(idx!==i)
//        {
//         return ele;
//        }
//        else{
//         return ele+1;
//        }
//      }))
//   }
//   return(<>
//   <h2>Arrays Element :</h2>
//   <button onClick={()=>{
//     let a=[...arr];
//     a.sort();
//     setArr(a)
//   }}>Reverse</button>
//   <ul>
//     {arr.map((ele,i)=>{
//      return <li>{ele} <button onClick={()=>handleCount(i)}>+1</button></li>
//     })}
//   </ul>
//   </>);
// }

// function Panel({title , children ,isActive ,onShow})
// {
//   return(<section>
//     <h3>{title}</h3>
//     {isActive ? <p>{children} </p>: <button onClick={onShow}>Show</button>}

//   </section>)
// }
// export default function App()
// {
//   const [active , setActive]=useState(0);

//   return(<>
//       <h2> Delhi , India</h2>
//       <Panel title={"About"} isActive={active===0} onShow={()=>setActive(0)}>
//         what is the hours asdn afdfkahsdfasdbjfs dsjfsdbjf dijeuiewrhewbfd fdhjesfjneafgufg ea f
//         what is the hours asdn afdfkahsdfasdbjfs dsjfsdbjf dijeuiewrhewbfd fdhjesfjneafgufg ea f
//         what is the hours asdn afdfkahsdfasdbjfs dsjfsdbjf dijeuiewrhewbfd fdhjesfjneafgufg ea f

//       </Panel>
//       <Panel title={"Contact"} isActive={active===1} onShow={()=>setActive(1)}>
//       what is the hours asdn afdfkahsdfasdbjfs dsjfsdbjf dijeuiewrhewbfd fdhjesfjneafgufg ea f
//       what is the hours asdn afdfkahsdfasdbjfs dsjfsdbjf dijeuiewrhewbfd fdhjesfjneafgufg ea f

//       </Panel>

//   </>);
// }

// export default function App()
// {
//   const [query ,setQuery]=useState("");
//   let result=FilterItem(item ,query)
//   return(
//     <>
//     <SearchBar query={query} onChange={(e)=>setQuery(e.target.value)} />
//     <hr/>
//     <List  items={result}/>
//     </>
//   )
// }
// function SearchBar({query ,onChange})
// {
//   return(<>
//   <label>Search : </label>
//   <input placeholder="search Item" value={query} onChange={onChange}/>
//   </>);
// }

// function List({items})
// {
//   return(<>
//   <table>
//     {items.map((el)=>{
//     return <tr><td>{el.title}</td>
//     <td>{el.body}</td></tr>})}
//   </table>
//   </>)
// }
// function FilterItem(item ,query)
// {   const qry=query.toLowerCase();
//    return item.filter((element)=>
//      element.title.split(' ').some((ele)=> ele.toLowerCase().startsWith(qry))
//    )
// }

// export default function App()
// {
//   let ref=useRef(0);

//   function handleCount()
//   {
//    ref.current+=1;
//    alert(`you clicked ${ref.current} times`)
//   }
//   return(<>
//    <button onClick={handleCount}>Click</button>

//   </>)
// }

// export default function App()
// { const myref=useRef(null)
//   function handleClick()
//   {
//     myref.current.focus()
//   }
//   return(<>
//     <input ref={myref}/>
//     <button onClick={handleClick}>Focus on Input</button>

//   </>)
// }

// export default function App()
// {  const [isPlaying , setPlay]=useState(false)
//    const ref=useRef(null)
//   function handleClick()
//   {
//      const nextPlaying=!isPlaying;
//      setPlay(nextPlaying);

//      if(nextPlaying)
//      {
//       ref.current.play();
//      }
//      else{
//       ref.current.pause();
//      }
//   }
//   return(<>

//     <button onClick={handleClick}>{isPlaying ? 'Pause' :'Play'}</button>
//     <br/>
//     <video width={"250"} ref={ref}><source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         /></video>
//   </>)
// }

// let index=6;
// export default function App()
// {
//   const [query ,setQuery]=useState("");
//   const [arr ,setArr]=useState(item);

//   return(
//     <>
//     <SearchBar query={query} onChange={(e)=>setQuery(e.target.value)} array={arr} setArray={setArr}/>
//     <hr/>
//     <List  items={arr} setArr={setArr} arr={arr}/>
//     </>
//   )
// }
// function SearchBar({query ,onChange ,array ,setArray})
// {
//   function handleAdd()
//   {
//    setArray([...array,{id:index++,title:query}])
//   }
//   return(<>
//   <label>Search : </label>
//   <input placeholder="search Item" value={query} onChange={onChange}/>
//   <button onClick={handleAdd}>Add</button>
//   </>);
// }
// function List({items,setArr ,arr})
// {

//   function handleDelete(taskid)
//   {
//     setArr(items.filter((element)=> element.id!=taskid))
//   }

//   return(<>

//     {items.map((ele)=>{
//     return  <div><input type="checkbox" value={false}/> <Edit ele={ele} setArr={setArr} arr={arr} /><button onClick={()=>handleDelete(ele.id)}>Delete</button></div>
//     })}

//   </>)
// }
// function Edit({ele ,setArr ,arr})
// { const [edit ,setEdit]=useState(false);
//   const [secondQuery ,setSecQuery]=useState(ele.title);
//   function handleEdit()
//   {
//     setEdit(true)
//   }
// function handleSave()
// { setEdit(false)
//   setArr( arr.map((i)=>{ if(ele.id!==i.id){
//     return i;
//   }
//   else{
//    return {
//     id:i.id,
//     title:secondQuery
//    }

//   }
// }) )

// }
//   return(<>
//   {
//     edit ? <span><input value={secondQuery} onChange={(e)=>setSecQuery(e.target.value)}/><button onClick={handleSave}>save</button></span> : <span>{ele.title}<button onClick={handleEdit}>Edit</button></span>

//   }
//   </>)
// }

// function Parent({children})
// {
//   return(<div>
//     <h1>Parent Element</h1>
//     <DataContext.Provider value={"parent"}>
//     {children}
//     </DataContext.Provider>
//   </div>)
// }
// export default function App()
// {
//   return(<>
//      <Parent>
//       <Child>
//         <SubChild></SubChild>
//       </Child>
//      </Parent>
//   </>)
// }

// function Child({children})
// {  const a=useContext(DataContext);
//   return(<>
//   <DataContext.Provider value={"kumar"+a}>
//    {children}
//    </DataContext.Provider>
//      <ul>
//       <li>Mango</li>
//       <li>Apple</li>
//       <li>Orange</li>
//      </ul>
//   </>)
// }
// function SubChild()
// {
//   const str=useContext(DataContext);
//   return(<>
//   <h2 >Employee Name</h2>
//   {str}
//   </>)
// }

// export default function App() {
//   const [isRunning, setRunning] = useState(false);
//   const [ellapsedTime, setEllapsedTime] = useState(0);
//   const intervalId = useRef(null);
//   const startTime = useRef(0);
//   useEffect(() => {
//     if (isRunning) {
//       intervalId.current = setInterval(() => {
//         setEllapsedTime(Date.now() - startTime.current);
//       }, 10);
//     }
//     return ()=>{clearInterval(intervalId.current);}
//   }, [isRunning]);

//   function handleStart() {
//     setRunning(true);
//     startTime.current = Date.now()-ellapsedTime;
//   }
//   function handleStop() {
//     setRunning(false);
//   }

//   function handleReset() {
//     setEllapsedTime(0);
//     setRunning(false);
//   }
//   function format() {
//     let hours = Math.floor(ellapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor((ellapsedTime / (1000 * 60)) % 60);
//     let sec = Math.floor((ellapsedTime / 1000) % 60);
//     let milisec=Math.floor(ellapsedTime % 1000);
//     minutes=String(hours).padStart(2,"0");
//     sec=String(sec).padStart(2,"0");
//     milisec=String(milisec).padStart(2,"0");
//     return `${minutes}:${sec}:${milisec}`;
//   }
//   return (
//     <>
//       <div>Time : {format()}</div>
//       <button onClick={handleReset}>Reset</button>
//       <button onClick={handleStart}>start</button>
//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }
// function Intersection(cords,x,y)
// {
//   let arr=[]
//    arr.push(cords.forEach((element,idx) => {
//    const distance=Math.sqrt(Math.pow((element.x-x),2)+Math.pow((element.y-y),2));
//    if(x!==element.x || y!==element.y)
//      {
//        if(distance < 2*Radius)
//          {
//           return idx;
//          }
//      }
//  }))
//  return arr;
// }
// const Radius = 100;
// const Color=['red','yellow','green','blue','orange','pink','violet']

// export default function App() {

//   const [cords ,setCords]=useState([]);

//   return (
//     <div
//       style={{ height: "100vh", width: "100vw" }}
//       onClick={(e) => {
//         setCords([...cords,{x:e.clientX,y:e.clientY}]);
//       }}
//     >
//       {cords.map((ele ,idx)=>{
//         return <Circle x={ele.x} y={ele.y} key={idx} color={Color[Math.floor((Math.random()*7))]}/>
//       })}
//     </div>
//   );
// }

// function Circle({ x, y, color}) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         height: `${2 * Radius}px`,
//         width: `${2 * Radius}px`,
//         left:x-Radius,
//         top:y-Radius,
//         backgroundColor:color || 'green',
//         borderRadius:'50%',
//         border:'1px solid black',
//       }}
//     ></div>
//   );
// }

import RunningIcon from "./RunningIcon";
const TechImage = [
  {
    image: "./Images/java.png",
    title: "Java",
    description:
      "Java is a high-level, class-based, object-oriented programming language designed by James Gosling",
  },
  {
    image: `./Images/js.png`,
    title: "JavaScript",
    description:
      "JavaScript is a dynamic programming language that is used for web development",
  },
  {
    image: `./Images/react.png`,
    title: "React JS",
    description:
      "React is a JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    image: `./Images/nodejs.png`,
    title: "Node Js",
    description:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS.",
  },
  {
    image: `./Images/tailwind.png`,
    title: "Tailwind Css",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML",
  },
  {
    image: "./Images/mongodb.png",
    title: "mongoDB",
    description:
      "MongoDB is an open-source document-oriented database that is designed to store a large scale of data.",
  },
];

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const circleRef = useRef(null);

  function handleIconPress(index) {
    setSelectedIndex(index);
  }

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.animation = "rotate 30s linear infinite";
    }
  }, []);

  return (
    <div className="mainContainer">
      <div className="runningCircle" ref={circleRef}>
        {TechImage.map((ele, index) => (
          <RunningIcon
            selectedIndex={selectedIndex}
            onPress={handleIconPress}
            tech={ele}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

// export default function App()
// {
//   return (
// <>
// <Accordian/>
// </>
//   );
// }
