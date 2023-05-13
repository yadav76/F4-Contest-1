
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="heading">React Calculator</h1>
      <input id="num" className='inputField' type="number" placeholder='Num 1'/>
      <input id="num2" className='inputField' type="number" placeholder='Num 2'/>

      <div className="operators">
        <button clasName="btn" id="add">+</button>
        <button clasName="btn" id="sub">-</button>
        <button clasName="btn" id="mul">*</button>
        <button clasName="btn" id="div">/</button>

        <p id="message"></p>
      </div>
    </div>
  );
}

export default App;
