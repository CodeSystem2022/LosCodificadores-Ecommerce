import './Button.css'

function Button (props){
    const {variant, text} = props

    return(
        <button className={'btn' + ' ' + variant}>{text}</button>
    )
}

export default Button