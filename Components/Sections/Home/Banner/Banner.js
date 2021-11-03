import Bar from '../../../../Theme/Bar/Bar'
import Button from '../../../../Theme/Button/Button'
import style from './banner.module.scss'
import SearchBar from './SearchBar/SearchBar'

export default function Banner () {

    const Background = () => {
        return (
            <div className={style.content}>
                <div className={style.container}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adip</h1>
                    <Bar height="8px"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod maximus tempus. Donec feugiat odio quis commodo ultricies.</p>
                    <Button text="Loué" icon="/assets/img/carkey.svg"/>
                </div>
            </div>
        ) 
    }

    const Illustration = () => {
        return (
            <div className={style.illustration}>
                <img src="/assets/img/bmw.png"/>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Background/>
            <Illustration/>
            <SearchBar/>
        </section>
    )
}