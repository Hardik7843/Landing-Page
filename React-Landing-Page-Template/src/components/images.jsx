import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const Images = () => {
    


    return (
        <Carousel 
        infinite={true}
        autoPlay={true}
        showThumbs = {false} 
        transitionDuration={5000}
        rewind = {true}
        autoPlaySpeed={800}
        >
            <div>
                <img src="img/image-carousel/img1.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="img/image-carousel/img1.jpg" />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="img/image-carousel/img1.jpg" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );
}

// import { CCarousel } from '@coreui/react'

// import CCarousel from '@coreui/react/src/components/carousel/CCarousel'

// export const Images = () => {
//     return (
//         <CCarousel controls transition="crossfade">
//             <CCarouselItem>
//                 <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
//             </CCarouselItem>
//             <CCarouselItem>
//                 <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
//             </CCarouselItem>
//             <CCarouselItem>
//                 <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
//             </CCarouselItem>
//         </CCarousel>
//     );
// }