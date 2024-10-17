import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from './Modal';

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Charger les données du fichier JSON
  useEffect(() => {
    fetch('/projects.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du fichier JSON');
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error('Erreur lors du chargement des données :', error));
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="card" onClick={() => handleCardClick(project)}>
              <div className="card-image">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className="card-description">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <p>{project.techs}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && (
        <Modal onClose={handleCloseModal} showModal={showModal}>
          {selectedProject && (
            <>
              <h2>{selectedProject.title}</h2>
              <div className="image-container">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="modal-image"
                  width={500}
                  height={300}
                />
              </div>
              <div className="modal-infos">
                <p>{selectedProject.largeDescription || selectedProject.description}</p>
                <p>Technologies : {selectedProject.techs}</p>
                 <div className='github-link'>
                   <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">Lien Github</a>
                   <FontAwesomeIcon icon={faGithub} />
                 </div>
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default ProjectsCarousel;

