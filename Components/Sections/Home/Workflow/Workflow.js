import Icon from '../../../../Theme/Icon/Icon'
import Title from '../../../../Theme/Title/Title'
import style from './workflow.module.scss'

export default function Workflow () {

    const data = [
        {
            img: "/assets/img/rent.svg",
            label: "Choisissez une voiture",
            para: "Lorem ipsulm keit tait yok grodura hdrue"
        },
        {
            img: "/assets/img/rent.svg",
            label: "Choisissez une voiture",
            para: "Lorem ipsulm keit tait yok grodura hdrue"
        },
        {
            img: "/assets/img/rent.svg",
            label: "Choisissez une voiture",
            para: "Lorem ipsulm keit tait yok grodura hdrue"
        }
    ]
    const Card = ({data, i}) => {
        return (
            <article className={style.card}>
                <Icon url={data.img} square="6vw"/>
                <div>
                <h1>{data.label}</h1>
                <p>{data.para}</p>
                    </div>
                
            </article>
        )
    }

    return (
        <section className={style.wrapper}>
            <Title h1="Comment ça fonctionne ?" h2="Loué et voyagez en seulement 3 étapes" />
            <div className={style.container}>
                {data.map((el, i) => {
                    return <Card data={el} i={i}/>
                })}
            </div>
        </section>
    )
}