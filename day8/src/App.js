import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero';
import  ErrorBoundary  from './component/ErrorBoundary';
import TryCatch from './component/TryCatch';
import LifeCycle from './component/LifeCycle';
import ComponentLife from './component/ComponentLife';
function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <Hero heroName="Batman"/>
      </ErrorBoundary> */}
        {/* <ErrorBoundary>
        <Hero heroName="Joker"/>
        </ErrorBoundary> */}
      {/* <TryCatch fruit="apple"/> */}
      <ComponentLife/>
      <LifeCycle/>
    </div>
  );
}

export default App;
