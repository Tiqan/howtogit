import style from './About.module.css'


const About = () => {

    
    return (
        <div className={style.body}>
            <p className={style.headline}>how to github</p>
            <div className={style.text}>
                <p>a guide on how to upload a project to github</p>
                <p className={style.credits}>by <a href='https://twitter.com/Tiqantweet' target='_blank' rel="noreferrer" className={style.nonStyledHyperlinks}>Tiqan</a></p>
            </div>
            
        </div>
    )
}

export default About