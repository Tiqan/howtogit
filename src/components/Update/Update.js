import style from './Update.module.css'

const Update = () => {
    return (
        <div className={style.body}>
            <p className={style.headline}>update</p>
            <p className={style.text}>if you edited your code from somwhere else you need to update your local repository</p>
            <p className={style.text}>to do so you need to pull the newest commit</p>
            <p className={style.sideText}>(if you want to pull from another branch change master to whatever branch you want to pull from)</p>
            <div className={style.terminal}>
                <p>git pull origin master</p>
            </div>
            <p className={style.text}>now you can do the step "add & commit" and "pushing changes" again</p>
        </div>
    )
}

export default Update