import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      alert("Count should not be less than zero");
      setCount(0); // reset the count to zero if it reaches zero.
    }
  }

  return (
    <div className='bg-red-300 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl text-center font-bold mb-4'>This is Basic Counter Web APP</h1>
      <div className='flex justify-center'>
        <div className='flex'>
          <button type='button' className='px-4 py-2 text-black bg-yellow-300 rounded-md mr-4' onClick={handleIncrement}>Increment</button>
          <button type='button' className='px-4 py-2 text-black bg-yellow-300 rounded-md' onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
      <h2 className='text-center font-bold'>Current Count: {count}</h2>
    </div>
  );
}

export default App;