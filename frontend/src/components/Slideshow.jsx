import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a brief description of Project 1.This is a brief description of Project 1.This is a brief description of Project 1..This is a brief description of Project 1',
    imageUrl: '/assets/pro_1img.png',
  },
  {
    title: 'Project 2',
    description: 'This is a brief description of Project 2',
    imageUrl: '/assets/pro_1img.png',
  },
  {
    title: 'Project 3',
    description: 'This is a brief description of Project 3',
    imageUrl: '/assets/pro_2img.png',
  },
];

function ProjectsCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="card">
            <div className="card-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="card-description"> {/* Nouvelle div pour la description */}
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProjectsCarousel;


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const projects = [
//    {
//       title: 'Project 1',
//       description: 'This is a brief description of Project 1',
//       imageUrl: '/assets/WIP_card.webp',
//     },
//     {
//       title: 'Project 2',
//       description: 'This is a brief description of Project 2',
//       imageUrl: '/assets/WIP_card.webp',
//     },
//     {
//       title: 'Project 3',
//       description: 'This is a brief description of Project 3',
//       imageUrl: '/assets/WIP_card.webp',
//     },
// ];

// function ProjectsCarousel() {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       spaceBetween={0}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       loop={true}
//     >
//       {projects.map((project, index) => (
//         <SwiperSlide key={index}>
//           <div className="card">
//             <img src={project.imageUrl} alt={project.title} className="card-image" />
//             <h2 className="card-title">{project.title}</h2>
//             <p className="card-description">{project.description}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default ProjectsCarousel;
