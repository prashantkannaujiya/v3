import './Style.css';
import React from 'react';

function Coltwo(){
  var id=30;
    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {

        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        console.log(ev);
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
      function add(){
        var h=document.getElementById('div2');
        var ch=h.childNodes;
        console.log(ch);
        if(ch.length<8)
        {
        id++;
        var k=document.createElement('div');
        k.setAttribute("id",id);
        k.className='greenbox';
        var k1=document.createElement('input');
        k1.setAttribute("type","text");
       
        k.appendChild(k1);
      
        h.appendChild(k);
        var z=document.createElement('button');
        z.id='del';
        z.innerHTML='X';
        k.appendChild(z);
        z.addEventListener('click',()=>{k.remove();})
       
        
        k.setAttribute("draggable","true")
        k.addEventListener('dragstart',(event)=>{drag(event)})
        }
        else{
          alert('Cards are limited upto 8');
        }
      }
    return(
<div>
<div><button onClick={add}>Add</button></div>
<div id="div2" onDrop={(event)=>{drop(event)}} onDragOver={(event)=>{allowDrop(event)}}></div>

</div>
    )
}
export default Coltwo;