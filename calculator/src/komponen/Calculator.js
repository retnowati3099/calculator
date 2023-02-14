import { useState } from "react";
import CalculatorTitle from "./CalculatorTitle"
import Screen from "./Screen";
import Button from "./Button";

// Membuat function component Calculator
function Calculator (){
    let [question, setQuestion] = useState("");
    let [answer, setAnswer] = useState("");

    function handleClick (value){
        switch (value){
            case "=":{
                if (question !== ""){
                    let ans = "";                    
                    try{
                        ans = Function("return " + question)();
                        // ans = eval(question);
                    } catch(err){
                        setAnswer("Math error");
                    }
                    if (ans === undefined || typeof(ans) !== "number"){ 
                        setAnswer("Math error");
                    }
                    else{
                        setAnswer(ans);
                        setQuestion("");
                    }
                }
                break;
            }
            case "CE": {
                setQuestion("");
                setAnswer("");
                break;
            }
            case "DEL": {             
                setQuestion(question.substring(0, question.length-1)); 
                break;
            }
            default: {
                setQuestion(question += value);
                break;
            }
        }    
    }

    return (
        <>
            <CalculatorTitle value="Basic Calculator"/>
            <br />
            <div className="container-calculator">
                <Screen question={question} answer={answer}/>
                <br />
                <div className="btn">
                    <Button label="CE" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="DEL" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="." handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="/" handleClick={(e) => handleClick(e.target.value)} />
                </div>
                <div className="btn">
                    <Button label="7" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="8" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="9"handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="*" handleClick={(e) => handleClick(e.target.value)} />
                </div>
                <div className="btn">
                    <Button label="4" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="5" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="6" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="-" handleClick={(e) => handleClick(e.target.value)} />
                </div>
                <div className="btn">
                    <Button label="1" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="2" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="3" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="+" handleClick={(e) => handleClick(e.target.value)} />
                </div>
                <div className="btn">
                    <Button label="0" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="(" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label=")" handleClick={(e) => handleClick(e.target.value)} />
                    <Button label="=" handleClick={(e) => handleClick(e.target.value)} />
                </div>
            </div>
        </>
    );
}

export default Calculator;