import logo from './logo.svg';
import './Style.css';
import Home from './Home';
import { useState, useEffect } from 'react';
import Pamplet from './Pamplet';
import Tabular from './Tabular';
import Indexpage from './Indexpage';
import Search from './Search';
function App() {
  
  var [u,setu]=useState(null);
  var [page, setpage] = useState(1);
var s;

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
  function findout(){
    
var k=document.querySelector('#search');
setu(k.value)
console.log(u)
setpage(18);

  }
  return (
    <div className="App">
<div style={{marginTop:'35px'}}>
  <input id='search' type='text'/>
  <button  onClick={findout} >Search</button>
</div>
      {(page == 1 ? <Home p={toIndex}></Home> : '')}
      {(page == 2 ? <Indexpage x={toIndex}></Indexpage> : '')}

      {(page > 2 && page != 18 ? <Tabular p={page} upage={updatepage}></Tabular> : '')}
      {(page == 18 ? <Search z={u}></Search> : '')}
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
