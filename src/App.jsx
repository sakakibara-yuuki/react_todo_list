import Logo from './logo/logo';
import LogoText from './logo/logoText';
import './App.css';

function HeaderLogo() { 
  return (
    <>
    <div className="header-logo">
      <Logo className="App-logo App-logo-animation"  viewBox="0 0 512 512" alt="logo"/>
      <LogoText className="App-logo" viewBox="0 0 1696.703 512.01" alt="logo"/>
    </div>
    </>
  );
}

          // <path d="M 0,0 v 100,0 q 150,50 300,0 t 300,0 q 150,50 300,0 v 0,-100 Z" />
function Progress() {
  let start = 50;
  let wave = `M 0,300 v -${start},0 q 150,-15 300,0 t 300,0 q 150,-15 300,0 v ${start} Z`;
  return (
    <div className="progress">
      <div className="progress-metrics">
        <div>100</div>
        <div className="progress-metrics_inside">
          <div>10</div>
          <div>90</div>
        </div>
      </div>
      <div className="progress-container">
        <svg className="progress-wave"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300">
          <path d={wave} />
        </svg>
        <svg>
          <path d={wave} />
        </svg>
      </div>
    </div>
  );
}

function TodoInput() {
  return (
    <div className="todo-input">
      <input type="text" placeholder="Add todo" />
      <button>Add</button>
    </div>
  );
}

function TodoList() {
  return (
    <div className="todo-list">
      <ul>
        <li>todo1</li>
        <li>todo2</li>
      </ul>
    </div>
  );
}

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
