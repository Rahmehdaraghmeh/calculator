import { useState } from "react"


const Calculator = () => {
    const[input, setInput] = useState<string>("")

    const handleInputClick = (value: string) => {
        setInput((prev) => prev + value)
    }
    const handleClear = () => { 
        setInput("")
    }
    const handleCalculate = () => {
        try {
          const result = eval(input); 
          setInput(result.toString());
        } catch (error) {
          setInput('Error');
        }
      }
      

  return (
    <div className="container">
    <div className="calculator">

        <div className="display">
            {input}
        </div>
            <div className="buttons">
                <button></button>
                <button onClick={handleClear}>AC</button>
                <button onClick={() => handleInputClick("%")}>%</button>
            
                <button onClick={() => handleInputClick("/")} className="operator">/</button>
                  <button onClick={() => handleInputClick("9")}>9</button>
                <button onClick={() => handleInputClick("8")}>8</button>
                <button onClick={() => handleInputClick("7")}>7</button>
                <button onClick={() => handleInputClick("*")} className="operator">*</button>

                  <button onClick={() => handleInputClick("6")}>6</button>
                <button onClick={() => handleInputClick("5")}>5</button>
                 <button onClick={() => handleInputClick("4")}>4</button>
                <button onClick={() => handleInputClick("-")} className="operator">-</button>

                <button onClick={() => handleInputClick("3")}>3</button> 
                <button onClick={() => handleInputClick("2")}>2</button>
                <button onClick={() => handleInputClick("1")}>1</button>
                <button onClick={() => handleInputClick("+")} className="operator">+</button>


                <button onClick={() => handleInputClick("0")} className="zero">0</button>

          
             
                     <button onClick={() => handleInputClick(".")}>.</button> 
                       <button onClick={handleCalculate} className="operator">=</button>
                </div>
            </div>
    </div>

    
    
  )
}

export default Calculator
