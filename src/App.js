import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode==='light' && (cls!=='primary' && cls!=='danger' && cls!=='warning' && cls!=='success'))
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //document.title = "TextUtils - Dark Mode";
      /*setInterval(()=>{
        document.title = "TextUtils is amazing";
      },2000);
      setInterval(()=>{
        document.title = "Install TextUtils now";
      },1500);*/
    }
    else if(mode==='dark' && (cls!=='primary' && cls!=='danger' && cls!=='warning' && cls!=='success'))
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      //document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">

            {/* <About mode={mode}/> */}
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, character counter, Extract emails" mode={mode}/> 

          </div>
    </>
  );
}

export default App;
