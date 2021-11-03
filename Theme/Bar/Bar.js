import style from './bar.module.scss'

export default function Bar ({height}) {

    return <div style={{height: `${height ? height : "2px"}`}} className={style.bar}/>
}