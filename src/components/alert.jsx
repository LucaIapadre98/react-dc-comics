export default function Alert({type, children}){
    if(!children) return <></>;

    return(
    <div className={`alert alert-${type || "type"}`}>{children}</div>
    );
}