// import logo from './logo.svg';
// import logo from './logo/Logo.svg';
import Logo from './logo/logo';
import LogoText from './logo/logoText';

import './App.css';

function TitleLogo() { 
  const style = {
    // width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={style}>
      <Logo className="App-logo" alt="logo"/>
      <LogoText className="App-logo" alt="logo"/>
    </div>
  );
}

        // <img src={logo} className="App-logo" alt="logo" />
export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleLogo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
