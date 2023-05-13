
import './App.css';

function App() {


  var result = document.getElementById("result");
  var message = document.getElementById("message");
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");

  function add() {

    var sum = parseInt(num1.value, 10) + 0 + parseInt(num2.value, 10);
    result.innerText = `Result = ${sum}`;
    message.innerText = "Your Result Will Be Show Above";
    message.style.color = "green";
  }


  function substract(){
    var sum = num1.value - num2.value;
    result.innerText = `Result = ${sum}`;
    message.innerText = "Your Result Will Be Show Above";
    message.style.color = "green";
  }
  
  function mulply(){
    var sum = num1.value * num2.value;
    result.innerText = `Result = ${sum}`;
    message.innerText = "Your Result Will Be Show Above";
    message.style.color = "green";
  }
  
  function divide(){
    var sum = num1.value / num2.value;
    result.innerText = `Result = ${sum}`;
    message.innerText = "Your Result Will Be Show Above";
    message.style.color = "green";
  }

  return (
    <div className="App">
      <h1 id="heading">React Calculator</h1>
      
      <div className="input">
        <input id="num1" className='inputField' type="number" placeholder='Num 1'/>
        <input id="num2" className='inputField' type="number" placeholder='Num 2'/>
      </div>

      <div className="operators">
        <button onClick={add} clasName="btn" id="add">+</button>
        <button onClick={substract} clasName="btn" id="sub">-</button>
        <button onClick={mulply} clasName="btn" id="mul">*</button>
        <button onClick={divide} clasName="btn" id="div">/</button>
      </div>

      <div id="result"></div>

      <p id="message"></p>
    </div>
  );
}

export default App;
