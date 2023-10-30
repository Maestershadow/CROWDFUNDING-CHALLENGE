import './Button.css'

export default function Button(props:{ onClick: ()=>void; content:string, disabled: boolean})
{
    return <button onClick={() => props.onClick()} className="button" style={{backgroundColor:props.disabled ? `var(--clr-dark-gray)`:``}}>{props.content}</button>
}