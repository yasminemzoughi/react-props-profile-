import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardproduct from './Profile/Components/Cardproduct';

function App() {
 const styleObject = { color: "blue", textAlign: 'center',}
  return (
    <div style={styleObject} className="App">
  <Cardproduct name='yasmine'  age={22} profession='web developper '> 
<img src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png " alt="pic"/>
  </Cardproduct>
    </div>
  );
}

export default App;
