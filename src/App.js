import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
//import {
//  BrowserRouter as Router,
//  Routes,
//  Route,
//} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');//wether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enable","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable","success")
    }
  }
  return (
    <>
    {/*<Router>*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        {/*<Routes>*/}
            {/*<Route exact path="/about" element={<About/>} >*/}
            {/*</Route>*/}
          {/*<Route exact path="/" element={}>*/}
          <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>
          {/*</Route>*/}
        {/*</Routes>*/}
      </div>
    {/*</Router>*/} 
  </>
  );
}

export default App;
