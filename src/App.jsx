import React from "react";
import Header from "./components/Header";
import AddToCart from "./components/AddToCart";
import About from "./components/About";
import PhotographyHeader from "./components/PhotographyHeader";
import PhotoCard from "./components/PhotoCard";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";

function App() {
  const photoCards = [
    {
      bgImage: "/images/Rectangle 2.png",
      category: "People",
      title: "Red Bench",
      price: "$3.89",
    },
    {
      bgImage: "/images/Rectangle 2.1.png",
      category: "Food",
      title: "Egg Baloon",
      price: "$93.89",
    },
    {
      bgImage: "/images/Rectangle 2.4.png",
      category: "People",
      title: "Man",
      price: "$100.00",
    },
    {
      bgImage: "/images/Rectangle 2.5.png",
      category: "Landmarks",
      title: "Architecture",
      price: "$101.00",
    }
  ];

  return (
    <div className="flex h-screen flex-col lg:mx-10">
      <Header />
      <div className="m-2 border">
        <p className="text-black font-extrabold text-2xl self-start">
          Samurai King Resting
        </p>
        <div className="bg-[url(./images/dog1.png)] lg:bg-[url(./images/dog2.png)] mt-2 w-full h-64 lg:h-[500px] bg-cover bg-center flex items-end justify-start my-2">
          <div className="bg-white text-center px-1 py-3 my-0.5">
            <p>Post of the day</p>
          </div>
        </div>
        <AddToCart />

        <About />
        <PhotographyHeader />
        <div className="lg:flex">
            <Filter />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photoCards.map((card, key) => (
            <PhotoCard key={key} card={card} />
          ))}
        </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
}

export default App;
