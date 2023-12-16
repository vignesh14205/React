// import React, { Component } from 'react'
// class ComponentLife extends Component{
//     constructor(props){
//     super(props);
//     this.state={favColor:'Yellow'};
//     }

// componentDidMount(){
//     setTimeout(()=>{this.setState({favColor:'Blue'})},3000);
// }

// shouldComponentUpdate(){
//     return true;
// }
// render(){
//     return(
//         <div>
//             <h1>My Favorite Color is {this.state.favColor}</h1>
//         </div>
//     )
//   }
// }

// export default ComponentLife

import React, { Component } from 'react'

export default class ComponentLife extends Component {
    constructor(props) {
        super(props);
        this.state = {favColor : 'Red'};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favColor: 'Blue' });
          }, 5000);          
    }
    shouldComponentUpdate() {
        return true;
    }
    componentDidUpdate() {
        document.getElementById('heading').innerHTML = "I am new color : " + this.state.favColor;
    }
    getSnapshotBeforeUpdate(prvVal , prvState) {
        document.getElementById('para').innerHTML = "I was there Up : " + prvState.favColor;
    }
  render() {
    return (
      <div>
        <h1>Color : {this.state.favColor}</h1>
        <p id='para'></p>
        <p id='heading'></p>
      </div>
    )
  }
}