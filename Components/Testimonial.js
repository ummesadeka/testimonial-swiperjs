import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';




const data=[
  {
    "id": 1,
    "username": "Bret",
    "testimonial": " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi reprehenderit delectus iusto tempore quam tenetur, aliquid impedit odio inventore neque in sit fugit hic eveniet suscipit corrupti, voluptas eius sequi. Sapiente illum similique aut numquam tenetur! Nobis nemo expedita qui rerum, culpa blanditiis quia corrupti totam. Ab praesentium consectetur eligendi. "
  },
  {
    "id": 2,
    "username": "Brettttt",
    "testimonial": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi reprehenderit delectus iusto tempore quam tenetur, aliquid impedit odio inventore neque in sit fugit hic eveniet suscipit corrupti, voluptas eius sequi. Sapiente illum similique aut numquam tenetur! Nobis nemo expedita qui rerum, culpa blanditiis quia corrupti totam. Ab praesentium consectetur eligendi."
  },
  {
    "id": 3,
    "username": "Bretuu",
    "testimonial": "Leanne Graham Leanne Graham Leanne Graham Leanne Graham john linkonLorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem aliquam deleniti tempore et quod nobis, magni sit nam eaque non, necessitatibus consectetur facere nulla suscipit dignissimos sint aperiam. Impedit."
  },
  {
    "id": 4,
    "username": "Sam",
    "testimonial": "Leanne Graham Leanne Graham Leanne Graham Leanne Graham john linkonLorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem aliquam deleniti tempore et quod nobis, magni sit nam eaque non, necessitatibus consectetur facere nulla suscipit dignissimos sint aperiam. Impedit. "
  },
  {
    "id": 5,
    "username": "Samu",
    "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem aliquam deleniti tempore et quod nobis, magni sit nam eaque non, necessitatibus consectetur facere nulla suscipit dignissimos sint aperiam. Impedit."
  },
  {
    "id": 6,
    "username": "Sami",
    "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem aliquam deleniti tempore et quod nobis, magni sit nam eaque non, necessitatibus consectetur facere nulla suscipit dignissimos sint aperiam. Impedit."
  },
  
]

const Testimonial = () => {
    return (
        <Swiper
      effect= ""
      modules={[Pagination ]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        data.map( user =>(
      <SwiperSlide key={user.id} className="flex items-center justify-center " >
        <div role="list" aria-label="Testimonials" className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-center">
          <div className="container mx-auto px-4 flex flex-col lg:items-center lg:flex-row border-4      border-light-green-500 border-opacity-1 ">
                  <div role="listitem" className="bg-white shadow rounded  justify-center flex p-4 xl:p-8 ">
                      <div className="pl-4 pt-4 flex items-center justify-center ">
                          <img className="pr-4 mr-4 rounded-full h-24 w-24 flex items-center justify-center" src="/user-1.jpg" alt="Smith" role="img" />
                          <div className="mr-6">
                              <p className="mt-4  text-5xl  leading-none font-George font-bold text-indigo-400">Anna Smith</p>
                              <p className="tracking-normal md:leading-none font-George text-indigo-400  xl:text-xl  text-b text-red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem aliquam deleniti tempore et quod nobis, magni sit nam eaque non, .</p> <br />
                          </div>
                      </div>
                  </div>
            </div>
        </div>
        
       </SwiperSlide>
        ))
      }
    </Swiper>
  
    )
}

export default Testimonial
