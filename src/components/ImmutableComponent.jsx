import { useState } from "react";

export const ImmutableComponent = () => {
    const [obj, setObj] = useState({a: 10, b: 20, c: 30})

    // Первый вариант правильной записи
    // if (obj.a === 10) {
    //     setObj({a: 40, b: 20, c: 30})
    // }

    // Второй вариант правильной записи (Например, если массив очень большой)
    if (obj.a === 10) {
        setObj({...obj, a: 40, c: 50})
    }

    return <div>{obj.a}, {obj.b}, {obj.c},</div>
}
