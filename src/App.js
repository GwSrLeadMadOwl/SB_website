import './App.css';
import Logo from "./img/SB logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello world wide web!</h1> */}
        {/* <img src={`${process.env.PUBLIC_URL}/src/img/SB logo.png`} alt="fu" /> */}
        <img src={Logo} alt="LOGO" />

      </header>
      {/* WTF??? */}
      {/* <img src={window.location.origin + '/img/SB logo.png'} alt="LOGO" /> */}
    </div>
  );
}

export default App;
