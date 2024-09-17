export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper container flex-row">
                <a href="#" className="header__left flex-row">
                    <div className="header__left-img-wrapper">
                        <img src="./img/logo.png" alt="Logo" />
                    </div>
                    <h2 className="header__title">Traffic Magnit</h2>
                </a>
            </div>
        </header>
    );
}
