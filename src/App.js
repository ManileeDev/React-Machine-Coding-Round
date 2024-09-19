import { throttle } from "lodash";
import { useCallback, useRef } from "react";

function App() {
  const circleRef = useRef(null)
  
  const handleMouseMove = useCallback(throttle((e) => {
    const circle = circleRef.current;
    if(circle){
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`
    }
},100),[])

  return (
    <div className="App" onMouseMove={handleMouseMove}>
       <div className="circle-style" ref={circleRef}></div>
    </div>
  );
}

export default App;
