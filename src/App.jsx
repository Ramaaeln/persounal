import Find from "./Elements/Find";
import Home from "./Elements/Home";
import Header from "./Fragments/Header";
import Bottle from "./assets/bottle.png";

export default function App() {
  return (
    <div>
      <Header/>
      <div>
        <Home/>
        <Find Bottle={Bottle}/>
      </div>
    </div>
  );
}
