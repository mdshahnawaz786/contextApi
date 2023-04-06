import './App.css';
import A from './ChildToParent/A';
import One from './parentToChild/One';


function App() {
  return (
    <div className="App">

      <div className='Div'>
        <One/>
      </div>
      <div className='Div'>
        <A/>
      </div>
    </div>
  );
}

export default App;
