import style from './brandbanner.module.scss'

export default function BrandBanner () {

    const brandImgUrl = ["/assets/img/carLogo/bmw.svg","/assets/img/carLogo/merco.svg","/assets/img/carLogo/audi.svg","/assets/img/carLogo/porsche.svg","/assets/img/carLogo/volkswagen.svg","/assets/img/carLogo/tesla.svg",]
    return (
        <section className={style.wrapper}>
            {brandImgUrl.map((el, i) => {

                return <img src={el} key={i} />
            })}
        </section>
    )
}