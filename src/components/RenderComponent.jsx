const products = [
    {id: '123', name: 'Example_1'},
    {id: '456', name: 'Example_2'},
]


export const RenderComponent = () => {
    return (
            <ul>
                {products.map(({id, name}) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
    )
}