"use client";

import Button from "@/app/components/button";
import { useEffect, useRef, useState } from "react";
import Header from "./components/header";

function HomePage() {
    const someRef = useRef<HTMLHeadingElement>(null);

    const [count, setCount] = useState(0);

    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);

    const [plusDisabled, setPlusDisabled] = useState(false);
    const [minusDisabled, setMinusDisabled] = useState(false);

    useEffect(() => {
        console.log(count);

        if (count === 0) {
            setMinusDisabled(true);
        } else {
            setMinusDisabled(false);
        }

        setPlusDisabled(count === 10);
    }, [count]);

    useEffect(() => {
        console.log("Mounted");
        if (someRef.current) {
            someRef.current.innerHTML = "Hello again";
        }

        return () => {
            console.log("Unmount");
        };
    }, []);

    return (
        <div className="container mx-auto flex-col p-4 pt-0">
            <Header title="Home"></Header>
            <Button
                disabled={plusDisabled}
                onClick={(e) => setCount((prev) => prev + 1)}
            >
                Increment
            </Button>
            <Button
                disabled={minusDisabled}
                onClick={(e) => setCount((prev) => prev - 1)}
            >
                Decrement
            </Button>
            <p>{count}</p>

            <input
                className="border-black border"
                type="number"
                value={input1}
                onChange={(ev) => setInput1(Number(ev.target.value) ?? 0)}
            />
            <input
                className="border-black border"
                type="number"
                value={input2}
                onChange={(ev) => setInput2(Number(ev.target.value) ?? 0)}
            />
            <p>Result: {input1 + input2}</p>
        </div>
    );
}

export default HomePage;
