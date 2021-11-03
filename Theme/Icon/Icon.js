import style from './icon.module.scss'

export default function Icon ({url, square}) {

    return (
        <div style={{height: `${square ? square : "5vw"}`, width: `${square ? square : "5vw"}`}} className={style.icon}>
                <img src={url}/>
            </div>
    )
}