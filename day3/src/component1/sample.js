import React from "react"
import Logo1 from './Logo1.png';
import signup from './signup.jpg';
class Signup extends React.Component
{
    render()
    {
        return(

            <div class="smain">
            <div class="logo">
            <img class="img2" src={Logo1} alt="Logo1"/>
            <h1 class="head">SmartCart</h1>
            </div>
                <div class="sform">
                <img class="img1" src={signup} alt="signup"/>
                <div class="form2">
                    <form>
                    <p class="SUP">SIGNUP</p>
                    <label for="Uname">Username</label>
                    <input type="text" id="Uname"></input>
                    <br></br>
                    <label for="email">Email</label>
                    <input type="email" id="email"></input>
                    <br></br>
                    <label for="Pass">CreatePassword</label>
                    <input type="password" id="Pass"></input>
                    <br></br>
                    <label for="number">PhoneNumber</label>
                    <input type="number" id="number"></input>
                    <br></br>
                    <br></br>
                    <button class="submit">SignUp</button>
                    </form>
                    </div>
                </div>
                </div>
        )
    }
}

export default Signup