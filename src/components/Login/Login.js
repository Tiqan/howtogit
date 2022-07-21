import style from './Login.module.css'

const Login = () => {
    return (
        <div className={style.body}>
            <p className={style.headline}>login</p>
            <p className={style.text}>create a github account if you dont already have one</p>
            <p className={style.text}>to login into github you need to enter these two commands into a terminal</p>
            <div className={style.terminal}>
                <p>git config --global user.email "you@example.com"</p>
            </div>
            <div className={style.terminal}>
                <p>git config --global user.name "Your Name"</p>
            </div>
            <p className={style.text}>after you executed the second command from step 5 (pushing changes) you are prompted to login into github</p>
            <p className={style.text}>click "sign in with your browser" and login</p>
        </div>
    )
}

export default Login