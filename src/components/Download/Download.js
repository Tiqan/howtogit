import style from './Download.module.css'

function openDownloadPage(type) {
    let url = "";
    switch(type) {
        case "windows": 
            url = "https://gitforwindows.org/"
            break;
        case "osx":
            url = "http://git-scm.com/download/mac";
            break;
        case "linux":
            url = "http://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
            break;
        default:
            break;
    }
    window.open(url, "_blank")
}

const Download = () => {
    return (
        <div className={style.body}>
            <p className={style.headline}>download</p>
            <div className={style.buttons}>
                <button onClick={() => openDownloadPage("windows")}>download git for windows</button>
                <button onClick={() => openDownloadPage("linux")}>download git for linux</button>
                <button onClick={() => openDownloadPage("osx")}>download git for osx</button>
            </div>
            
        </div>
    )
}

export default Download