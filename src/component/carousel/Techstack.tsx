// import React, { useEffect } from 'react';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import style from "../common/carousel/Carousel.module.scss";
// import { Splide, SplideSlide } from "splide-nextjs/react-splide";
// import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
// import { LOOP, SLIDE } from "@splidejs/splide";

// const Techstack = () => {
//   useEffect(() => {
//     // Initialize Splide with the desired options.
//     const splide = new Splide('.splide', {
//       type: 'loop',
//       drag: 'free',
//       focus: 'center',
//       perPage: 3,
//       autoScroll: {
//         speed: 1,
//       },
//     });

//     // Mount the Splide instance.
//     splide.mount();

//     // Cleanup function to destroy Splide instance when component unmounts.
//     return () => {
//       splide.destroy();
//     };
//   }, []);

//   return (
//     <div className="splide">
//       <div className="splide__track">
//         <ul className="splide__list">
//           <li className="splide__slide">
//             <img src="path_to_your_image_1" alt="Image 1" className="w-full h-auto" />
//           </li>
//           <li className="splide__slide">
//             <img src="path_to_your_image_2" alt="Image 2" className="w-full h-auto" />
//           </li>
//           {/* Add more li elements with images as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Techstack;
