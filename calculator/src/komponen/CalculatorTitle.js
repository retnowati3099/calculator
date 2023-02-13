// Membuat function component CalculatorTitle untuk menampilkan judul
function CalculatorTitle (props){
    return (
        <div className="calculator-title">{props.value}</div>
    );
}

export default CalculatorTitle;