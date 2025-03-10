
function Input({
    type,
    id,
    labelText,
    placeholder,
    onChange,
    "data-key": dataKey
}) {
    let Element;
    if (type === "text") { 
        Element = "input";
    } else if (type === "textarea") {
        Element = "textarea";
    } else {
        throw new Error(`Type is not valid. Only text or textarea are accepted. Given type is "${type}"`);
    }

    return (
        <div className="input">
            <label
                htmlFor={id}
            >
                {labelText}
            </label>

            <Element
                id={id}
                data-key={dataKey}
                placeholder={placeholder}
                onChange={onChange}
                autoComplete="off"
            >
            </Element>
        </div>
    )
}

export default Input;