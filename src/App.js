import { useEffect, useRef, useState } from "react";
import "./App.css";


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


