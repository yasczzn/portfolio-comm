import Background from './bg.png';

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
    </div>
  );
}

export default App;
