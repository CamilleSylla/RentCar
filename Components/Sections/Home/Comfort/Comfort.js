import Title from '../../../../Theme/Title/Title'
import style from './comfort.module.scss'
import Icon from '../../../../Theme/Icon/Icon'

export default function Comfort () {

    const data = [
        {
            icon: "/assets/img/rent.svg",
            para: "Lorem Ipsum something that you wanna say"
        },
        {
            icon: "/assets/img/rent.svg",
            para: "Lorem Ipsum something that you wanna say"
        },
        {
            icon: "/assets/img/rent.svg",
            para: "Lorem Ipsum something that you wanna say"
        },
        {
            icon: "/assets/img/rent.svg",
            para: "Lorem Ipsum something that you wanna say"
        },
        {
            icon: "/assets/img/rent.svg",
            para: "Lorem Ipsum something that you wanna say"
        },
        {
            icon: "/assets/img/rent.svg",
            para: "Lorem Ipsum something that you wanna say"
        },
    ]

    const Illustration = () => {
        return <img src="/assets/img/drive.svg" className={style.illustration}/>
    }

    const RightCard = ({data}) => {

        return (
            <div style={{display: "flex"}} className={style.rigthCard}>
                <p style={{width: "60%"}}>{data.para}</p>
                <Icon url={data.icon} square="4vw"/>
            </div>
        )
    }
    const LeftCard = ({data}) => {

        return (
            <div style={{display: "flex"}} className={style.leftCard}>
                <Icon url={data.icon} square="4vw"/>
                <p style={{width: "60%"}}>{data.para}</p>
            </div>
        )
    }

    const Container = ({iconSide}) => {
        return (
            <div className={style.container}>
                <div className={style.left}>
                {data.map((el, i) => {
                    if (i <= 2) {
                        return <LeftCard data={el} i={i}/>
                    }
                })}
                </div>
                <div className={style.right}>
                {data.map((el, i) => {
                    if (i >= 3) {
                        return <RightCard data={el} i={i}/>
                    }
                })}
                </div>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Title h1="Votre confort est notre priorité" h2="Nous nous engageons afin que vous puissiez avoir le meilleur confort possible" />
            <Illustration/>
            <Container/>
        </section>
    )
}