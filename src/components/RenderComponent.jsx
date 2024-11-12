const products = [
    {id: '123', name: 'Хлеб'},
    {id: '456', name: 'Рыба'},
]

export const RenderComponent = () => {
    return (
        <>
            <ul>
                {products.map(({id, name}) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </>
    )
}
