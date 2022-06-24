import { Todos } from "../todos/Todos";
import './App.css';


const App = () => {
  const appStyles = {
    /*backgroundColor: "white"*/
  }
  return (
    <div className="app" style={appStyles}>
    <Todos />
    </div>
  );
}

export default App;
