import style from './AddAndCommit.module.css'

const AddAndCommit = () => {
    return (
        <div className={style.body}>
            <p className={style.headline}>add & commit</p>
            <p className={style.text}>to add changes to the index use</p>
            <div className={style.terminal}>
                <p>git add &lt;filename&gt;</p>
            </div>
            <p className={style.text}>or to add all files use</p>
            <div className={style.terminal}>
                <p>git add *</p>
            </div>
            <p className={style.text}>to actually commit the changes to the HEAD run the command</p>
            <p className={style.sideText}>(change the commit message to something more meaningful)</p>
            <div className={style.terminal}>
                <p>git commit -m "commit message"</p>
            </div>
            <p className={style.text}>now the file is commmited to the HEAD, but not in your remote repository yet</p>
        </div>
    )
}

export default AddAndCommit