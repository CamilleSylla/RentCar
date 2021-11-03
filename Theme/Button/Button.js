import style from './button.module.scss'

export default function Button ({text, icon}) {

    return (
        <div className={style.button}>
            {icon ? <img src={icon}/> : null}
            <span>{text}</span>
        </div>
    )
}