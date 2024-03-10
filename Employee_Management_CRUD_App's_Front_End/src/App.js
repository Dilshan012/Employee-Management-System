import { useNavigate} from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className='background'>
      <div className="App">
        <header className="App-header">
          <h1>Welcome</h1>
          <h1>Employee Registration System</h1>
          <button className='users-button' onClick={() => navigate('/users')} >Users</button>
        </header>
      </div>
    </div>
  );
}

export default App;
