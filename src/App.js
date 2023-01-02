import logo from './logo.svg';
import './Style.css';
import Home from './Home';
import { useState, useEffect } from 'react';
import Pamplet from './Pamplet';
import Tabular from './Tabular';
import Indexpage from './Indexpage';
function App() {
  var u;
  var [page, setpage] = useState(1);


  function inc() {

    var t = page;
    t++;
    setpage((t));
  }
  function dec() {
    var t = page;
    t--;
    setpage(t);
  }
  function updatepage(m, t) {
    var k = Pamplet.find((e) => {
      return (e.module == m && e.tab == t)
    })
    setpage(k.page);
  }
  function toIndex(b) {
    setpage(b);
  }
  return (
    <div className="App">

      {(page == 1 ? <Home p={toIndex}></Home> : '')}
      {(page == 2 ? <Indexpage x={toIndex}></Indexpage> : '')}

      {(page > 2 ? <Tabular p={page} upage={updatepage}></Tabular> : '')}
      <div className='menu'>
        <button onClick={() => { setpage(1); }}>Home</button>
        <button onClick={dec}>{'<'}</button>
        {' ' + page + ' '}
        <button onClick={inc}>{'>'}</button>
      </div>
    </div>
  )
}
export default App;
