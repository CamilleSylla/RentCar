import Button from '../Button/Button'
import style from './navbar.module.scss'

export default function NavBar () {

    const links = ["Accueil","Véhicules","A propos","Contact",]

    const Buttons = () => {

        return (
            <div className={style.buttons}>
                <button>M'inscrire</button>
                <button>Connection</button>
                </div>
        )
    }

    const Links = () => {

        return (
            <ul className={style.links}>
                {links.map((el, i ) => {
                    return <li key={i}>{el}</li>
                })}
            </ul>
        )
    }

    const Logo = () => {

        return <h1 className={style.logo}>RentCar.</h1>
    }

    return (
        <nav className={style.nav}>
            <Logo/>
            <Links/>
            <Buttons/>
        </nav>
    )
}