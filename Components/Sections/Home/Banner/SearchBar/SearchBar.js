import style from './searchbar.module.scss'

export default function SearchBar () {

    const selectData = [
        {
            placeholder: "Choisissez une marque",
            brand: ["BMW", "Mercedes"],
            icon: "/assets/img/rent.svg"
        }, 
        {
            placeholder: "Choisissez une marque",
            brand: ["BMW", "Mercedes"],
            icon: "/assets/img/rent.svg"
        }, 
        {
            placeholder: "Choisissez une marque",
            brand: ["BMW", "Mercedes"],
            icon: "/assets/img/rent.svg"
        }, 
    ]

    const Select = ({data, i,}) => {

        return (
            <div key={i} className={style.select}>
                <img src={data.icon}/>
                <select>
                    {data.brand.map((el, i) => {
                        return <option key={i}>{el}</option>
                    })}
                </select>
            </div>
        )
    }

    return (
        <div className={style.wrapper}>
            {selectData.map((el, i) => {
                return <Select data={el} i={i}/>
            })}
            <button>Search</button>
        </div>
    )
}