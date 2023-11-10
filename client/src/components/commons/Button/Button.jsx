import './Button.css'

function Button (props){
    const {variant, text, disabled = false, onClick} = props

    return(
        <button onClick={onClick} disabled={disabled} className={'btn' + ' ' + variant}>{text}</button>
    )
}

export default Button