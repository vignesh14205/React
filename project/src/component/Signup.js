import React from "react"
class Signup extends React.Component
{
    render()
    {
        return(
                <div class="smain">
                <div class="sform">
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
        )
    }
}

export default Signup