function Scroll (props) {
    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '50em'}}>
            {props.children}
        </div>
    );
}
export default Scroll 