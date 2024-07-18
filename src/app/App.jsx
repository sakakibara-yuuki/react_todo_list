// import Logo from '../components/logo/Logo';
// import LogoText from '../components/logo/LogoText';
import './App.css';
import { HeaderLogo } from '../components/header/HeaderLogo';
import { Progress } from '../components/progress/Progress';
import { TodoInput } from '../components/todoinput/TodoInput';
import { TodoList } from '../components/todolist/TodoList';

export function App() {
  return (
    <div className="App">
      <header>
        <HeaderLogo />
      </header>
      <main>
        <div className="container">
          <Progress/>
          <TodoInput/>
          <TodoList/>
        </div>
      </main>
    </div>
  );
}
