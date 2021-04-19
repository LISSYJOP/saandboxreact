import Menu from './Paginas/Menu';
import SubMenu from './Paginas/SubMenu';
import Cliente from './Paginas/Jsx/Cliente';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Menu />
        </p>
      </header>
      <main>
        
        <div>
          <SubMenu />

        </div>
        <div>
          <Cliente/>

        </div>
        <p>@adrielalisbeth</p>
      </main>
    </div>
  );
}

export default App;
