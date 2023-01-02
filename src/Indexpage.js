import pp from './Homepage.jpg';
function Indexpage(props)
{
    return(
        <div>
<div className='Home'>
    <div className='pic'>
        <img src={pp}/>
    </div>
    <div style={{width:'180px'}}>
        <div style={{marginTop:'90px'}}>
        <p><button onClick={()=>{props.x(3)}}>Module 1</button></p>
        <p><button onClick={()=>{props.x(4)}}>Module 2</button></p>
        <p><button onClick={()=>{props.x(5)}}>Module 3</button></p>
        <p><button onClick={()=>{props.x(6)}}>Module 4</button></p>
        <p><button onClick={()=>{props.x(7)}}>Module 5</button></p>
        </div>
    </div>
</div>
        </div>
    )
    
}
export default Indexpage;