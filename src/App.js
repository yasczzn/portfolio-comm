import Background from './bg.png';
import Footer from './Footer'

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};

function App() {
  return (
    <div className="App">
      <div className="content" style={ sectionStyle }>
        <p>Hello _World</p>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
