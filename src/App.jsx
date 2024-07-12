// import logo from './logo.svg';
// import logo from './logo/Logo.svg';
import Logo from './logo/logo';
import LogoText from './logo/logoText';

import './App.css';

function TitleLogo() { 
  const style = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.2rem',
    height: '5vh',
    paddingBottom: '0.2rem',
    borderBottomStyle: 'solid',
  }

  return (
    <div style={style}>
      <Logo className="App-logo App-logo-animation"  viewBox="0 0 512 512" alt="logo"/>
      <LogoText className="App-logo" viewBox="0 0 1696.703 512.01" alt="logo"/>
    </div>
  );
}

export function App() {
  return (
    <div className="App">
      <header>
        <TitleLogo />
      </header>
    </div>
  );
}
