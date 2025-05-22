import ComicsCard from "./ComicsCard";

export default function ComicsList ({ comics }){
    return (
        <section id="page-card">
            <div className="container">
                <div className="row">
                    {comics.map((comic, id) => (
                        <ComicsCard comic={comic} key={comic.id} />
                    ))}
                </div>
            </div>
            <div className="load">
                <button>LOAD MORE</button>
            </div>
        </section>
    );
}