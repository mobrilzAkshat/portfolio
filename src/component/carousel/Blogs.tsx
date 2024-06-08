import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';

function Blogs() {
  return (
    <div>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
            <div className=' w-52 text-center'>

          <img width={100} height={100} className='mx-5 ' src="https://imgs.search.brave.com/7qvu_dNY6EHodkmP_bm3akDMDUiYjSxk35Bv3XuOjuA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw" alt="Image 1" />
          <h3 className='text-xl font-semibold pt-5'>Title of the blog</h3>
          <p>Description of the Blog <span className='text-blue-500'>Read more...</span></p>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className=' w-52 text-center'>

          <img width={100} height={100} className='mx-5 ' src="https://imgs.search.brave.com/7qvu_dNY6EHodkmP_bm3akDMDUiYjSxk35Bv3XuOjuA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw" alt="Image 1" />
          <h3 className='text-xl font-semibold pt-5'>Title of the blog</h3>
          <p>Description of the Blog <span className='text-blue-500'>Read more...</span></p>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className=' w-52 text-center'>

          <img width={100} height={100} className='mx-5 ' src="https://imgs.search.brave.com/7qvu_dNY6EHodkmP_bm3akDMDUiYjSxk35Bv3XuOjuA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw" alt="Image 1" />
          <h3 className='text-xl font-semibold pt-5'>Title of the blog</h3>
          <p>Description of the Blog <span className='text-blue-500'>Read more...</span></p>
            </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Blogs;
