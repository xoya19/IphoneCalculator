import './index.css'
import React from 'react'
export default function App() {
  const [value, setValues] = React.useState([])
  function clear() {
    setValues([])
  }
  //the function sets value as result no need to call the function 
  function pullValue(newvalue) {
    setValues(prevvalue => {
      const newLocal = [...prevvalue, newvalue];
      console.log(newLocal)
      const ops = ["+", "-", "*", "/"]
      const eQ = "="
      const beforeOp = []
      const afterOp = []
      let opsIs = null
      let nextOp = null
      let foundOperator = false
      let result = null

      for (let i of newLocal) {
        if (ops.includes(i)) {
          if (!opsIs) {
            opsIs = i;
            console.log("OP", opsIs)
            console.log("NOP", nextOp)
          } else if (!nextOp) {
            nextOp = i;
            console.log("OP", opsIs)
            console.log("NOP", nextOp)
            break;
          }
          foundOperator = true;
          continue;
        }
        if (i === eQ) {
          continue;
        }
        if (!foundOperator) {
          beforeOp.push(i);
        } else {
          afterOp.push(i);
        }
      }
      
      if (beforeOp.length > 0 && opsIs !== null && (nextOp !== null || newvalue === eQ)) {
        console.log(`new value is ${newvalue} `)
        const var1 = Number(beforeOp.join(''));
        const var2 = Number(afterOp.join(''));
        if (opsIs === "+") {
          result = var1 + var2
        }
        else if (opsIs === "-") {
          result = var1 - var2
        }
        else if (opsIs === "*") {
          result = var1 * var2
        }
        else if (opsIs === "/") {
          result = var1 / var2
        }

        console.log("B4", beforeOp)
        console.log("AF", afterOp)
        console.log("RES", result)
        setValues([result, nextOp]);
      }
      return newLocal;
    }
    )
  }

  // all values get inputed to an empty array in an single index till an operator enters 
  //operator is stored in the next arrayindex and a var called the operator name and values after operator is store in next index and so on
  // checks value left to right in array asa an operator enters it takes all the values b4 it and the value after(till nomore)operator and operate wrt operator and stores it in result
  //to operate values b4 is stored in a var
  //then asa the = operator it hit it displays the result




  return (
    <main className='maincontainer'>

      <div className='display'>
        <h2>{value}</h2>
      </div>
      <button className='button-clear' value="C" onClick={clear}>AC </button>


      <button className='button-7' value="7" onClick={() => pullValue(7)}>7 </button>
      <button className='button-8' value="8" onClick={() => pullValue(8)}>8 </button>
      <button className='button-9' value="9" onClick={() => pullValue(9)}>9 </button>
      <button className='button-divide' value="/" onClick={() => pullValue("/")}>÷ </button>

      <button className='button-4' value="4" onClick={() => pullValue(4)}>4 </button>
      <button className='button-5' value="5" onClick={() => pullValue(5)}>5 </button>
      <button className='button-6' value="6" onClick={() => pullValue(6)}>6 </button>
      <button className='button-multiply' value="*" onClick={() => pullValue("*")}>x </button>

      <button className='button-1' value="1" onClick={() => pullValue(1)}>1 </button>
      <button className='button-2' value="2" onClick={() => pullValue(2)}>2 </button>
      <button className='button-3' value="3" onClick={() => pullValue(3)}>3 </button>
      <button className='button-minus' value="-" onClick={() => pullValue("-")}>- </button>

      <button className='button-0' value="0" onClick={() => pullValue(0)}>0</button>
      <button className='dobutton-dot' style={{backgroundColor:" #5c5c5f"}}
      value="." onClick={() => pullValue(".")}>.</button>
      <button className='button-equalto' value="=" onClick={() => pullValue("=")}>= </button>
      <button className='button-plus' value="+" onClick={() => pullValue("+")}>+</button>

    </main >
  )
}
