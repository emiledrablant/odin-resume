
function Input({name, value}) {
    return(<>
    {name}:{' '}
    <input type="text" value={value} />
    </>)
}

export default Input