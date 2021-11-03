import Bar from '../../../../Theme/Bar/Bar'
import Icon from '../../../../Theme/Icon/Icon'
import style from './arguments.module.scss'

export default function Arguments () {

    const data = [
        {
            label: "Lorem ipsum dolor",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            icon: "/assets/img/rent.svg"
        },
        {
            label: "Lorem ipsum dolor",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            icon: "/assets/img/rent.svg"
        },
        {
            label: "Lorem ipsum dolor",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            icon: "/assets/img/rent.svg"
        },
    ]

    const Args = ({data, i}) => {

        return(
            <article>
                <Icon url={data.icon} square="4vw"/>
                <div style={{marginLeft: "2vw"}}>
                    <h1>{data.label}</h1>
                    <p> {data.para} </p>
                </div>
            </article>
        )
    }

    const Content = () => {
        return (
            <div className={style.content}>
                <h1>Pourquoi nous choisir ?</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                <Bar height='8px'/>
                <div className={style.args}>
                    {data.map((el, i) => {
                        return <Args data={el} i={i}/>
                    })}
                </div>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <img className={style.illustration} src="/assets/img/rover.png"/>
            <Content/>
        </section>
    )
}