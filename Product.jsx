import React from 'react'
import Img1 from "../../assets/p18.png";
import Img2 from "../../assets/p27.png";
import Img3 from "../../assets/p4.png";
import Img4 from "../../assets/p5.png";
import Img5 from "../../assets/p13.png";
import { FaStar } from "react-icons/fa6";


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "silver papers",
        rating: 5.0,
        color: "silver",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Yarn Basket Weaving",
        rating: 4.5,
        color: "pink",
        aosDelay: "0"
    },
    {
        id: 3,
        img: Img3,
        title: "Cake wall decor",
        rating: 5.0,
        color: "white",
        aosDelay: "0"
    },
    {
        id: 4,
        img: Img4,
        title: "organizer",
        rating: 5.0,
        color: "white",
        aosDelay: "0"
    },
    {
        id: 5,
        img: Img5,
        title: "Graphic papers",
        rating: 4.9,
        color: "pink",
        aosDelay: "0"
    },
];



const Product = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px]
            mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Molestiae corporis 
                    quia dolorum.</p>
            </div>
            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center
                gap-5'>
                    {/* card section */}
                    {
                        ProductsData.map((data) => (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id}
                            className='space-y-3'>
                                <img src={data.img} alt="" 
                                className='h-[220px] w-[150px]
                                object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p>{data.color}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        )
                    )
                    }
                        {/* view all buttons */}
                        <div className='flex justify-center'>
                            <button className='text-center mt-10
                            cursor-pointer bg-primary text-white py-1
                             px-5 rounded-md'>View all</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product