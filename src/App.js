import logo from './logo.svg';
import './App.css';

function Header(){
  return (

    <header className="App-header" > ReactFacts </header>
    
  )
}

function MainContent(){
  return(
    <ul>
      <li> hi </li>
      <li> there </li>
      <li> hmm </li>
      <li> colll </li>
    </ul>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
