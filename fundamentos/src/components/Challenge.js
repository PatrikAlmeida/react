const Challenge = () => {

  const res = () => {
    console.log(a + b);
  }
  
  const a = 5;
  const b = 10;

  return (
    <div>
      <p>Primeiro número: {a}</p>
      <p>Segundo número: {b}</p>
      <button onClick={res}>Somar!</button>
    </div>
  );

  // inline
  /*
    return (
        <div>
            <p>Primeiro número: {a}</p>
            <p>Segundo número: {b}</p>
            <button onClick={() => console.log(a + b)}>
            Somar!
            </button>
        </div>
    )
    */
};

export default Challenge;
