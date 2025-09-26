import React from 'react';
import './App.css'

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">
        🚀 Tailwind is Working!
      </h1>
      <p className="mt-4 text-lg opacity-90">
        React + Vite + Tailwind = Super fast dev setup ⚡
      </p>
      <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105 hover:bg-gray-100">
        Click Me
      </button>
    </div>
  );
}

export default App;
