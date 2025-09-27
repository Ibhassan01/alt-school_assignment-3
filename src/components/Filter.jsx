const Filter = () => {
    const categories = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"]
    const prices = ["Lower than $20", "$20 - $100", "$100 - $200", "More than $200"]
    return (
        <div>
            <div className="flex py-3 px-2 justify-between md:hidden items-center">
                <p className="font-extrabold text-2xl">Filter</p>
                <img src="./icons/Group 33.png" alt="" />
            </div>
            <div className="border-b-1 border-b-gray-600 m-2">
                <p className="m-4 font-extrabold text-2xl">Categories</p>
                {categories.map((category, key) => (
                    <ul className="my-4">
                        <li key={key} for="category" className="m-4">
                            <input type="checkbox" name="" id="category" className="mx-2" />
                            {category}
                        </li>
                    </ul>
                ))}
            </div>
            <div className="m-4">
                <p className="m-4 font-extrabold text-2xl">Prices</p>
                {prices.map((price, key) => (
                    <ul className="my-4">
                        <li key={key} for="price" className="m-4">
                            <input type="checkbox" name="" id="price" className="mx-2" />
                            {price}
                        </li>
                    </ul>
                ))}
            </div>
            <div className="flex justify-between px-4 py-5 border-t border-t-gray-500">
                <button className="px-8 py-2 border-3 border-black bg-white font-extrabold text-lg">CLEAR</button>
                <button className="px-8 py-2 border-3 border-black bg-black font-extrabold text-lg text-white">SAVE</button>
            </div>
        </div>
    );
}

export default Filter;