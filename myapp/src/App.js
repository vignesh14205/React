import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="parent">
    <div className="Form">
     <form>
      <label for="username">Username:</label>
      <input type="text" id="username" placeholder='Name'>
      </input>
      <br></br>
      <label for="password">Password:</label>
      <input type="password" id="username"></input>
      <br></br>
      <label for="gender">Gender:</label>
      <input type="radio" id="gender"></input>Male
      <input type="radio" id="gender"></input>Female
      <br></br>
      <label for="Hobbie">Hobbie:</label>
      <input type="checkbox" id="hobbie"></input>Reading
      <input type="checkbox" id="hobbie"></input>Movie
      <input type="checkbox" id="hobbie"></input>Playing
      <input type="checkbox" id="hobbie"></input>Singing
      <input type="checkbox" id="hobbie"></input>Others
      <br></br>
      <label for="date">DOB:</label>
      <input type="date" id="date"></input>
      <br></br>
      <label for="range">Age:</label>
      <input type="range" id="range"></input>
      <br></br>
      <label for="tel">Pnumber:</label>
      <input type="tel" id="tel" placeholder='Number'></input>
      <br></br>
      <label for="mail">Email:</label>
      <input type="email" id="mail" placeholder='Email'></input>
      <br></br>
      <label for="lang">Language:</label>
      <select id="lang">
        <option>Tamil</option>
        <option>Malaylam</option>
        <option>Hindi</option>
        <option>English</option>
        <option>Other</option>
      </select>
      <br></br>
      <label for="describe">About You:</label>
      <textarea></textarea>
     </form>
    </div>
    </div>
  );
}

export default App;
