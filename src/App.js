import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <div className="bubble">
          <h1>Hi, this is my art portfolio</h1>
          <p>What do you want to see?</p>
          <Home/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
