import LoginImage from './LoginImage.jpg';
import Logo1 from './Logo1.png';

function Login()
{
    return(
         <div class="parent">
         <div class="logo">
         <img class="img2" src={Logo1} alt="Logo1"/>
         <h1 class="head">SmartCart</h1>
         </div>
         <div className="main">
         <img class="img1" src={LoginImage} alt="LoginImage"/>
         <div className="Login">
         <form>
         <p class="Lname">LOGIN</p>
         <label for="username">Username</label>
         <input type="text" id="username"></input>
         <br></br>
         <label for="password">Password</label> 
         <input type="password" id="password"></input>
         <br></br>
         <br></br>
         <button class="submit">SignIn</button>
         <br></br>
         <br></br>
         <label for="newuser">NewUser?</label>
         <a href='#' class="sigin">Signup</a>
         </form>
         </div>
         </div>
         </div>
    )
}
export default Login