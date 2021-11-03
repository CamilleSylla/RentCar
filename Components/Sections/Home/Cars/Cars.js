import Title from '../../../../Theme/Title/Title'
import style from './cars.module.scss'

export default function Cars () {

    const data = [
        {
            brand: "BMW",
            model: "M2",
            img : "https://www.tuningblog.eu/wp-content/uploads/2020/12/BMW-M2-Competition-F87-Thunder-Edition-Schwarz-7.jpg",
            price: "120",
            year: "2020"
        },
        {
            brand: "BMW",
            model: "M2",
            img : "https://www.tuningblog.eu/wp-content/uploads/2020/12/BMW-M2-Competition-F87-Thunder-Edition-Schwarz-7.jpg",
            price: "120",
            year: "2020"
        },
        {
            brand: "BMW",
            model: "M2",
            img : "https://www.tuningblog.eu/wp-content/uploads/2020/12/BMW-M2-Competition-F87-Thunder-Edition-Schwarz-7.jpg",
            price: "120",
            year: "2020"
        },
        {
            brand: "BMW",
            model: "M2",
            img : "https://www.tuningblog.eu/wp-content/uploads/2020/12/BMW-M2-Competition-F87-Thunder-Edition-Schwarz-7.jpg",
            price: "120",
            year: "2020"
        },
        {
            brand: "BMW",
            model: "M2",
            img : "https://www.tuningblog.eu/wp-content/uploads/2020/12/BMW-M2-Competition-F87-Thunder-Edition-Schwarz-7.jpg",
            price: "120",
            year: "2020"
        },
        {
            brand: "BMW",
            model: "M2",
            img : "https://www.tuningblog.eu/wp-content/uploads/2020/12/BMW-M2-Competition-F87-Thunder-Edition-Schwarz-7.jpg",
            price: "120",
            year: "2020"
        },
    ]

    const Card = ({data, i}) => {
        return (
            <article key={i} className={style.card}>
                <img src={data.img} />
                <div>
                    <span className={style.year}>{data.year}</span>
                    <h1>{data.brand} - {data.model} </h1>
                    <p>{data.price}€<span>/jour</span> </p>
                    <button> Vérifier le disponibilité </button>
                </div>
            </article>
        )
    }

    return (
        <section className={style.wrapper}>
            <Title h1="Nos Véhicules" h2="Lorem ipsulm keit tait yok grodura hdrue"/>
            <div className={style.container}>
                {data.map((el, i) => {
                    return <Card data={el} i={i}/>
                })}
            </div>
        </section>
    )
}