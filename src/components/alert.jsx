export default function Alert({type, children}){
    if(!children) return <>
        <div className="messagge-error">
            Si è verificato un errore: controllare Alert
        </div>
    </>;
    if(type === "danger") return <>
        <div className="text-error">
            Testo di errore
            <ul className="ul-error">
                <li>Errore: </li>
            </ul>
        </div>
    </>;
    return(
    <div className={`alert alert-${type || "type"}`}>{children}</div>
    );
}
