import style from './title.module.scss'

export default function Title ({h1, h2}) {

    return (
        <div className={style.content}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
        </div>
    )
}