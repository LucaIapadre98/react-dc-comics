import Alert from "./alert";
export default function Main(){
    return <main>
        <section id="page-content">
            <h2> --&gt; Contente goes here! &lt;--
                <>
                <Alert type="info">
                    Contenuto di Testo
                </Alert>
                </> 
            </h2>
        </section>
        <section id="page-function">
            <div className="row">
                <div className="col-1-5">
                    <div className="card-image">
                        <img src="/buy-comics-digital-comics.png" alt="logo digital"></img>
                    </div>
                    <div className="card-title">
                        <h4>DIGITAL COMICS</h4>
                    </div>
                </div>
                <div className="col-1-5">
                    <div className="card-image">
                        <img src="/buy-comics-merchandise.png" alt="logo merchandise"></img>
                    </div>
                    <div className="card-title">
                        <h4>DC MERCHANDISE</h4>
                    </div>
                </div>
                <div className="col-1-5">
                    <div className="card-image">
                        <img src="/buy-comics-subscriptions.png" alt="logo subscriptions "></img>
                    </div>
                    <div className="card-title">
                        <h4>SUBSCRIPTIONS</h4>
                    </div>
                </div>
                <div className="col-1-5">
                    <div className="card-image">
                        <img src="/buy-comics-shop-locator.png" id="logo-locator" alt="logo locator"></img>
                    </div>
                    <div className="card-title">
                        <h4>COMIC SHOP LOCATOR</h4>
                    </div>
                </div>
                <div className="col-1-5">
                     <div className="card-image">
                        <img src="/buy-dc-power-visa.svg" id="logo-visa" alt="logo power visa"></img>
                    </div>
                    <div className="card-title">
                        <h4>DC POWER VISA</h4>
                    </div>
                </div>
            </div>
        </section>
    </main>
}