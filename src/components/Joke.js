export default function Joke({ jokeSelectorFunc, isSelected, joke, id }) {
  
  return (
    <div className="joke" onClick={() => jokeSelectorFunc(id)}>
      {/* The jokeSelectorFunc is being called with a props value as an argument - cool!  It's also wrapped in an arrow func... why?  Hint, in this situation, it's not because of 'this' */}
      {isSelected?(<p><h1>{joke}</h1></p>):(<p>{joke}</p>)}
    </div>
  );
}
