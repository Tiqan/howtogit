import style from './PushingChanges.module.css'


const Download = () => {
    return (
        <div className={style.body}>
            <p className={style.headline}>pushing changes</p>
            <p className={style.text}>to connect your repository you want to push to type</p>
            <p className={style.sideText}>(as server enter the url of the repository)</p>
            <div className={style.terminal}>
                <p>git remote add origin &lt;server&gt;</p>
            </div>
            <p className={style.text}>to finally push the changes to the remote repository run the command</p>
            <p className={style.sideText}>(if you want to push to another branch change master to whatever branch you want to push to)</p>
            <div className={style.terminal}>
                <p>git push origin master</p>
            </div>
            <p className={style.text}>now everytime you want to push new changes repeat the last two steps</p>
        </div>
    )
}

export default Download