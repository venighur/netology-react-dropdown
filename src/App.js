import './App.css';
import Dropdown from './components/Dropdown';
import { dropdownList } from './dropdownList';

function App() {
  return (
    <Dropdown list={dropdownList} />
  );
}

export default App;
