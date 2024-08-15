// import Logo from '../components/logo/Logo';
// import LogoText from '../components/logo/LogoText';
import './App.css';
import { HeaderLogo } from '../components/molecules/header/HeaderLogo';
import { Todo } from '../components/todo/Todo';

export function App() {
  return (
    <div className="App">
      <header>
        <HeaderLogo />
      </header>
      <main>
        <div className="container">
          <Todo />
        </div>
      </main>
    </div>
  );
}
