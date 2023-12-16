import React,{Component} from 'react';
class ErrorBoundary extends Component{
    state={
        hasError:false
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    render(){
        if(this.state.hasError===true){
            return <h1>Something Went Wrong</h1> 
        }
        return this.props.children;
    }
}
export default ErrorBoundary;