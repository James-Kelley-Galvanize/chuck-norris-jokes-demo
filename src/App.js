import "./App.css";
import { Component } from "react";
import JokeList from "./components/JokeList";
const url = "http://api.icndb.com/jokes/random/10";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokeList: [],
      selectedJoke:0,
    };
    this.selectJoke = this.selectJoke.bind(this) // Why is this important?  What is your alternative?
  }

  selectJoke(jokeId){
    this.setState({selectedJoke:jokeId}) // Remember, it's important what 'this' is...
  }

  async componentDidMount() { // This can also be done with promises!
    let res = await fetch(url);
    let json = await res.json();
    let value = await json.value;
    this.setState({ jokeList: value });
  }

  render() {
    const {selectJoke} = this;
    const { jokeList, selectedJoke } = this.state;

    return (
      <div className="App">
        <JokeList selectedJoke={selectedJoke} jokeSelectorFunc={selectJoke} list={jokeList} />
        {/* <button onClick={()=>{this.selectJoke(`THIS WORKS - WHY?`)}}>CLICK ME</button> */}
        {/* Comment in the button above if you want - line 14 fixes the problem it makes apparent, though - 'this' is correctly bound in the App.js file, but not in others, unless the function is bound on line 14 or surrounded with an arrow func on line 32*/}
      </div>
    );
  }
}
export default App;
