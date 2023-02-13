import { useState } from "react";

function HandleClick (value){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    switch (value){
        case "=":{
            break;
        }
        case "Clear": {
            setQuestion("");
            setAnswer("");
            break;
        }
        case "delete": {
            let str = question.substring(0, question.length-1);
            setQuestion(str); 
            break;
        }
        default: {
            break;
        }
    }    
}

export default HandleClick;