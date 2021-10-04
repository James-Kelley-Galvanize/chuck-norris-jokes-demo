export default function Joke({ jokeSelectorFunc, joke, id }) {
  return (
    <div className="joke" onClick={()=>jokeSelectorFunc(id)}>
      {joke}
    </div>
  );
}
