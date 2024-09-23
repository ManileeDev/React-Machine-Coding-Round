import {componentA} from "./ComponentA"
const ComponentB = () => {
    const {c} = componentA(7,3) 
    console.log(c)
}

export default ComponentB;