import { useState } from "react";

export const ImmutableComponent = () => {
    const [obj, setObj] = useState({a: 10, b: 20, c: 30})

    // obj.a = 20 - Данный вариант является неправильным, потому что код в реакт должен быть иммутабельным

    // Первый вариант правильной записи
    // if (obj.a === 10) {
    //     setObj({a: 40, b: 20, c: 30})
    // }

    // Второй вариант правильной записи (Например, если массив очень большой)
    if (obj.a === 10) {
        setObj({...obj, a: 40,})
    }

    return <div>{obj.a}</div>
}
