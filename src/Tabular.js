import { useEffect, useState } from "react";
import Pamplet from "./Pamplet";
import './Style.css';
function Tabular(props) {
    var [loc, setloc] = useState({});
  var found;
    useEffect(() => {
        if (props.p > 2) {
            found = Pamplet.find((e) => {
                return e.page == props.p;
            })


            console.log(found);
            console.log(found.module);
           
        }
        var k = document.getElementsByClassName('tabbut');
        console.log('in useeffect')
        console.log(k)
        for (var i = 0; i < k.length; i++) {
            k[i].style.backgroundColor = 'white';
        }
        k[found.tab - 1].style.backgroundColor = 'cyan';
        setloc(found)
    }, [props]);

    function clickedtab(el) {

        var k = document.getElementsByClassName('Tab');
        if (el != loc.tab) {
            props.upage(loc.module, el);

        }

    }
    return (
        <div style={{ margintop: '100px' }}>
            <div className="module"><h2>Module {loc.module}</h2></div>

            <div className="tab-but">
                <button onClick={(event) => { console.log(event); clickedtab(1) }} className='tabbut'><h3>Tab 1</h3></button>
                <button onClick={(e) => { clickedtab(2) }} className='tabbut'><h3>Tab 2</h3></button>
                <button onClick={(e) => { clickedtab(3) }} className='tabbut'><h3>Tab 3</h3></button>
            </div>
            <div>
                <div className='Tab'>
                    <div><img src={loc.pic} id='picture'></img></div>
                    <div style={{ width: '500px', marginLeft: '30px' }}>
                        <div style={{ marginTop: '60px' }}>{loc.des}</div></div>
                </div>

            </div>

        </div>
    )
}
export default Tabular;