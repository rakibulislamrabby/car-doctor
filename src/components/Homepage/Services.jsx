"use client";  // Add this line at the top of the file

import ServiceCard from '../cards/ServiceCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/services.json');
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching the JSON data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Render a loading state while data is being fetched
  }

  return (
    <div>
      <div className='text-center'>
        <p className='text-primary font-semibold'>Service</p>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected humour, or randomised
          <br /> words which don't look even slightly believable.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3'>
        {services.map((service, id) => (
          <ServiceCard key={id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
