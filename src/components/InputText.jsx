
function InputText({name, value}) {
    return(<>
    {name}:{' '}
    <input type="text" value={value} />
    </>)
}

export default InputText