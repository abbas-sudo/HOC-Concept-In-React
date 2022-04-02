import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Table1 from './components/Table1';
import Table2 from './components/Table2';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div>
      <Search />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table1 name='myTable'/>} />
          <Route path="/table2" element={<Table2 name='myTable-2' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
