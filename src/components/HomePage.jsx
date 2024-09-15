import React from 'react';
import { Link } from 'react-router-dom';

function MyCard(props){
    return (
        
        <>
        <h1 className='text-green-500 text-5xl'>MY CARD</h1>
        <div className="mt-4 p-2 rounded-xl bg-blue-500"> {props.children}</div>
        </>
    )
}

const HomePage = () => {
  return (
    <div className='font-serif'>

      {/* Hero Section */}
      <header className="bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to MyWebsite</h1>
            <p className="text-lg mb-6">We provide the best solutions for your business</p>
            <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, debitis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, debitis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, debitis.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
