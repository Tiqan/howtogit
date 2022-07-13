import style from './Help.module.css'


const Help = () => {

    
    return (
        <div className={style.body}>
            <p className={style.headline}>help</p>
            <p className={style.text}>if you need help feel free to contact me on twitter or discord</p>
            <p className={style.text}>Twitter: <a href='https://twitter.com/Tiqantweet' target='_blank' rel="noreferrer" className={style.nonStyledHyperlinks}>@tiqantweets</a></p>
            <p className={style.text}>Discord: <a href='https://discord.com/users/560194136188256277' target='_blank' rel="noreferrer" className={style.nonStyledHyperlinks}>Tiqan#4757</a></p>
            
        </div>
    )
}

export default Help