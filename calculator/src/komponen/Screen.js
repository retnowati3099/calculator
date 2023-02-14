function OutputScreen(props){
    return (
        <div className="output-screen">
            <input type="text" readOnly value={props.value}/>
        </div>
    );
}
function Screen(props){
    return (
        <div>
            <OutputScreen value={props.question}/>
            <OutputScreen value={props.answer}/>
        </div>
    );
}

export default Screen;