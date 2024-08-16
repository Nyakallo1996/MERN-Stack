export default function LoginPage() {
    return (
        <div>
            <form className="login">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}