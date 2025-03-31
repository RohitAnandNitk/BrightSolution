import React from 'react'
// import "@material-tailwind/react/tailwind.css";
import { Card, CardBody, Typography } from "@material-tailwind/react";



function Home() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
    {/* Header */}
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Typography variant="h5" className="text-blue-500 font-bold">
        BRIGHTVISION Services
      </Typography>
      <Typography variant="small" className="text-gray-700">
        115A, 1st Floor, Hari Nagar Ashram, New Delhi-110014
      </Typography>
    </header>

    {/* Hero Section */}
    <div className="relative">
      <img
        src="/1.jpg" // Ensure the image is inside the public folder
        alt="Post Construction Cleaning"
        className="w-full h-64 object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
        <Typography variant="h2" className="text-white font-bold">
          POST CONSTRUCTION CLEANING
        </Typography>
        <Typography variant="small" className="text-white">
          Home / Post Construction Cleaning
        </Typography>
      </div>
    </div>

    {/* Content Section */}
    <Card className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <CardBody>
        <Typography variant="h4" className="text-blue-500 font-bold">
          POST CONSTRUCTION CLEANING
        </Typography>
        <Typography className="mt-4 text-gray-700">
          Building a house or a commercial building is a long-term project that creates a lot of mess that can be inconvenient to live with. Post-construction cleaning is essential because no one can live in an environment filled with dust, dirt, trash, and other hazardous particles. Brightvision Solution offers the best post-construction service in Delhi NCR at an affordable price.
        </Typography>
        <Typography className="mt-4 text-gray-700">
          Any commercial or residential construction project requires post-construction cleaning. We go above and beyond at Brightvision Solution to ensure that your office or home renovation does not turn into a post-construction nightmare.
        </Typography>
      </CardBody>
    </Card>

    {/* Services List */}
    <Card className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <CardBody>
        <Typography variant="h5" className="font-bold">
          OUR POST-CONSTRUCTION SERVICES INCLUDE:
        </Typography>
        <ul className="mt-4 space-y-2 text-gray-700">
          {[
            "Vacuuming construction and drywall dust",
            "Spot Cleaning Walls",
            "Sweeping stairs, landing, decks, and garages etc",
            "Dusting air diffuser",
            "Cleaning Interior and exterior glass",
            "Cleaning and polishing mirrors",
            "Cleaning Lights",
            "Dust removal from ceiling pipes, ductwork, vents, and light fixtures",
          ].map((service, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> {service}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>

    {/* Footer */}
    <footer className="text-center py-4 mt-6 bg-gray-800 text-white">
      &copy; 2025 Brightvision Services. All rights reserved.
    </footer>
  </div>
  )
}

export default Home
