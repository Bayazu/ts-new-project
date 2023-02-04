import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    );
};
