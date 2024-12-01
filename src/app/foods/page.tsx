import React from 'react';
import AOS from 'aos';

const Foods = () => {

    const foodData = [
        {id: 1, name: "Alfredo Pasta", price: 700, description: "Chicken", image: '/Alfredo-Pasta.jpg' },
        {id: 2, name: "Karahi", price: 1100, description: "Chicken & Beef", image: '/chicken karahi.jpg' },
        {id: 3, name: "Tikka", price: 450, description: "Chicken", image: '/Chicken tikka.jpg' },
        {id: 4, name: "Chowmein", price: 400, description: "Chicken & Vegetable", image: '/Chiken Chowmein.jpg' },
        {id: 5, name: "Club Sandwich", price: 380, description: "Chicken", image: '/club sandwich.jpg' },
        {id: 6, name: "Zinger Burger", price: 460, description: "Chicken & Beef", image: '/Zinger burger.jpg' },
    ]
  
    return (
        <div>
            <h2 className="text-center text-5xl py-8" data-aos="zoom-in">Food Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-8">
                {foodData.map((food) => (
                    <div key={food.id} className="food-card bg-white p-5 mb-5 rounded-lg shadow-md text-center transform transition-all hover:scale-105">
                        <img src={food.image} alt={food.name} className="w-full rounded-lg h-auto" />
                        <h3 className="mt-3 text-lg font-semibold">{food.name}</h3>
                        <p className="text-sm text-gray-600">{food.description}</p>
                        <div className="text-blue-500 text-xl mt-2">${food.price}</div>
                        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Foods;