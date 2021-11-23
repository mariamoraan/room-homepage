import './global.css';

import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';

const App = () => {
  return(
    <div className="App">
      <Menu/>
      <Main/>
      <About/>
    </div>
  )
}

export default App;
