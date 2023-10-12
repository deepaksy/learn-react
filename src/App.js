import './App.css';
import Introduction from './Pages/Introduction';
// import Button from './components/Button';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Introduction/>
    {/* <Button text={'hello'}/> */}
    <div style={{minHeight:'100vh'}}>
      Hello
    </div>
    <div style={{minHeight:'100vh'}}>
      Hello
    </div>
    </>
  );
}

export default App;
