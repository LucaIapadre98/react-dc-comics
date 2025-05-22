export default function ComicsCard ({comic}){
    return (
        <div className="col-1-6">
            <div className="card-image">
                <img src={comic.thumb} alt={comic.title} />
            </div>
            <div className="card-title">{comic.series}</div>
        </div>
    );
}