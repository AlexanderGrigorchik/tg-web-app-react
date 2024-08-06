import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./Header/Header";
import {Route,Routes} from "react-router-dom";
import Form from "./Form/Form";
import Req from "./Req/Req";

function App() {
    const{onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<Req />}/>
            <Route path={'form'} element={<Form />}/>
        </Routes>
    </div>
  );
}

export default App;
