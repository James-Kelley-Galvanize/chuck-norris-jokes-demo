import logo from "./logo.svg";
import "./App.css";
import react, { Component } from "react";
import JokeList from "./components/JokeList";
const url = "http://api.icndb.com/jokes/random/10";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokeList: [],
      selectedJoke:0,
    };
    this.selectJoke = this.selectJoke.bind(this)
  }

  selectJoke(jokeId){
    console.log(this)
    this.setState({selectedJoke:jokeId})
  }

  async componentDidMount() {
    let res = await fetch(url);
    let json = await res.json();
    let value = await json.value;
    this.setState({ jokeList: value });
  }

  render() {
    const { jokeList } = this.state;
    return (
      <div className="App">
        <JokeList jokeSelectorFunc={this.selectJoke} list={jokeList} />
     

        {/* <button onClick={()=>{this.selectJoke(`THIS WORKS - WHY?`)}}>CLICK ME</button> */}
      </div>
    );
  }
}
export default App;
