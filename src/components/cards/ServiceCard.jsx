import Image from 'next/image';
import React from 'react';

const ServiceCard = ({service}) => {
    const {title,img,price,description}=service
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <Image 
        src={img}
        height={500}
        width={500}
    />
    {/* <img
      src={img}
      alt="Shoes" /> */}
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;