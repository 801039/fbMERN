import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import { Widgets } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar/>

      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />
      
    </div>
  );
}

export default App;
