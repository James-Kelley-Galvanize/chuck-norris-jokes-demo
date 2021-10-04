import Joke from "./Joke";

export default function JokeList({ list, jokeSelectorFunc}) {

  return (
    <div className="joke-list">
      {list.map((jokeObj, index) => (
        <Joke jokeSelectorFunc={jokeSelectorFunc} joke={jokeObj.joke} id={jokeObj.id} key={index} /> // What would happen if we didn't pass down the jokeSelectorFunc?
      ))}
    </div>
  );
}
