import pp from './Homepage.jpg';
import pp2 from './Homepage2.jpg';
import './Style.css';
function Home(props) {

    return (
        <div>{console.log(props.p)}

            <div className="Home">
                <div className="pic"><img src={pp} ></img></div>
                <div>
                    <div><img src={pp2} /></div>
                    <div><button id="cont" onClick={() => { props.p(2) }} >Continue</button></div>
                </div>
            </div>
        </div>
    )
}
export default Home;