import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="iframe-container">
      <div>   
        <iframe src="http://localhost:4848/single/?appid=./ventas.qvf&obj=YAzPRQ&opt=ctxmenu,currsel" className='iFrame'></iframe> 
      </div>
      <div>   
        <iframe src="http://localhost:4848/single/?appid=./ventas.qvf&obj=esShau&opt=ctxmenu,currsel" className='iFrame'></iframe>
      </div>
    </div>
        
  );
}

export default App;
