import logo from './logo.svg';
import './App.css';
import GetAxios from './Axios/GetAxios';
import PostAxios from './Axios/PostAxios';

function App() {
  return (
    <div className="App">
      <GetAxios/>
      <PostAxios/>
    </div>
  );
}

export default App;
