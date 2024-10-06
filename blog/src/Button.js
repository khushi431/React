import {useState} from 'react'

function Button(){

    const[count, setCount] = useState(0)

const increment = () => {
    setCount(count + 1);
}; 

const decrement = () => {
    setCount(count - 1);
};    

    return(
        <>
          <h1>Hello</h1>
          <h1>Count: {count}</h1>
          <button onClick={increment}>
            Increase  &nbsp; &nbsp;
          </button>
          <button onClick={decrement}>
            Decrease
          </button>
        </>
      );


}
export default Button
