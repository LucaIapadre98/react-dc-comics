import Alert from "./alert";
import ComicsList from "./products/ComicsList";

export default function Main({ comics }){
    return (
        <main>
            <section id="page-content">
            <>
                <Alert type="info">
                    CURRENT SERIES
                </Alert>
            </> 
            </section> 
            <ComicsList comics={comics} />
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
    );
}