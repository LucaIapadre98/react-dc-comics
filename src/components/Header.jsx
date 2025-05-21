export default function Header () {
    return <header id="page-header">
        <div className="nav-bar">
            <img src="/dc-logo.png" alt="logo dc"></img>
            <nav>
                <ul>
                    <li>
                        <a href="#">CHARACTERS</a>
                    </li>
                    <li className="active">
                        <a href="">COMICS</a>
                    </li>
                    <li>
                        <a href="#">MOVIES</a>
                    </li>
                    <li>
                        <a href="#">TV</a>
                    </li>
                    <li>
                        <a href="#">GAMES</a>
                    </li>
                    <li>
                        <a href="#">COLLECTIBLES</a>
                    </li>
                    <li>
                        <a href="#">VIDEOS</a>
                    </li>
                    <li>
                        <a href="#">FANS</a>
                    </li>
                    <li>
                        <a href="#">NEWS</a>
                    </li>
                    <li>
                        <a href="#">SHOP</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}