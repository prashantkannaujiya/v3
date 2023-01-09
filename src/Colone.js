import './Style.css';
import React from 'react';
function Colone(){
  var id=0;
    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        console.log(ev.target.id);
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
      function add(){
        var h=document.getElementById('div1');
        var ch=h.childNodes;
        console.log(ch);
        if(ch.length<8)
        {
        id++;
        var k=document.createElement('div');
        k.setAttribute("id",id);
        k.className='redbox';
        var k1=document.createElement('input');
        k1.setAttribute("type","text");
       
        k.appendChild(k1);
        var z=document.createElement('button');
        z.id='del';
        z.innerHTML='X';
        k.appendChild(z);
        z.addEventListener('click',()=>{k.remove();})
       
        h.appendChild(k);
        
        k.setAttribute("draggable","true")
        k.addEventListener('dragstart',(event)=>{drag(event)})
      }
      else
      {
        alert('Cards are limited upto 8');
      }
    }
    return(
<div>
  <div><button onClick={add}>Add</button></div>
<div id="div1" onDrop={(event)=>{drop(event)}} onDragOver={(event)=>{allowDrop(event)}}></div>

</div>
    )
}
export default Colone;