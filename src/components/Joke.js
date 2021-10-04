export default function Joke({ jokeSelectorFunc, joke, id }) {
  
  return (
    <div className="joke" onClick={()=>jokeSelectorFunc(id)}>
      {/* The jokeSelectorFunc is being called with a props value as an argument - cool!  It's also wrapped in an arrow func... why?  Hint, in this situation, it's not because of 'this' */}
      {joke}
    </div>
  );
}
