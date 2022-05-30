import { useState } from "react";

//? usuarios = ['diego3g', 'dieegosf', 'danileao']

//* Sem imutabilidade
//! usuarios.push('rafacamarda')

//* Com imutabilidade
//TODO: novoUsuarios = [...usuarios, 'rafacamarda']


export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}