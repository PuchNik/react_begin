import {useState} from "react";

export const EventComponent = () => {
    const [showText, setShowText] = useState(true)

    const onClick = () => {
        setShowText(!showText)
    }

    const text = <div>Текст</div>

    return (
        <>
            {showText && text}
            <button onClick={onClick}>{showText ? 'Скрыть' : 'Показать'} текст</button>
        </>
    )
}


// import {useState} from "react";
//
// export const EventComponent = () => {
//     const [value, setValue] = useState(0)
//
//     const onClick = () => setValue(value + 1)
//
//     return (
//         <>
//             <div>{value}</div>
//             <button onClick={onClick}>Click me!</button>
//         </>
//     )
// }


// import {useState} from "react";
//
// export const EventComponent = () => {
//      const [colorButton, setColorButton] = useState('black')
//
//      const onClick = () => {
//          setColorButton((prevColor) => (prevColor === 'black' ? 'red' : 'black'))
//      }
//
//      return <button onClick={onClick} style={{backgroundColor: colorButton}}>Click me!</button>
// }








