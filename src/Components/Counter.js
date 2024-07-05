import { useState } from "react";

const CounterFunctional = () => {
    const[count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const styles = {
        button: {
            background:"green",
             fontWeight:"bold"
        },
        button2: {
            background: "red",
            fontWeight: "bold"
        }
    }
 
  
    return (
        <div >
            <p>Count: {count}</p>
            <button style={styles.button} onClick={increment}>Increment</button>
            <button style={styles.button2} onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterFunctional;