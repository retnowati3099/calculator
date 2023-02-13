import CalculatorTitle from "./CalculatorTitle"
import Screen from "./Screen";
import Button from "./Button";
import HandleClick from "./HandleClick";

// Membuat function component Calculator
function Calculator (){
    return (
        <>
            <CalculatorTitle value="Simple Calculator"/>
            <br />
            <div className="container-calculator">
                <Screen value={}/>
                <div className="btn">
                    <Button label="Clear" />
                    <Button label="Delete" />
                    <Button label=","/>
                    <Button label=":" />
                </div>
                <div className="btn">
                    <Button label="7" />
                    <Button label="8" />
                    <Button label="9"/>
                    <Button label="&#215;" />
                </div>
                <div className="btn">
                    <Button label="4" />
                    <Button label="5" />
                    <Button label="6"/>
                    <Button label="-" />
                </div>
                <div className="btn">
                    <Button label="1" />
                    <Button label="2" />
                    <Button label="3"/>
                    <Button label="+" />
                </div>
                <div className="btn">
                    <Button label="0" />
                    <Button label="(" />
                    <Button label=")" />
                    <Button label="=" />
                </div>
            </div>
        </>
    );
}

export default Calculator;