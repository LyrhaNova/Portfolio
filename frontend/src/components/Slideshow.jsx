import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from './Modal';

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const modalImageRef = useRef(null); 

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

  // Fonction pour ajuster le défilement en fonction de la hauteur de l'image
  const adjustImageScroll = () => {
    if (modalImageRef.current) {
      const imageHeight = modalImageRef.current.scrollHeight;
      const containerHeight = modalImageRef.current.parentElement.clientHeight;
      const scrollDistance = imageHeight - containerHeight;

      if (scrollDistance > 0) {
        modalImageRef.current.style.setProperty('--scroll-distance', `${scrollDistance}px`);
        modalImageRef.current.classList.add('animated');
      }
    }
};

  return (
    <>
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
            <div className="card" onClick={() => handleCardClick(project)}>
              <div className="card-image">
                <img src={project.imageUrl} alt={project.title} />
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
        <Modal onClose={handleCloseModal}>
          {selectedProject && (
            <>
              <h2>{selectedProject.title}</h2>
              <div className="image-container">
                <img
                  ref={modalImageRef} // Référence à l'image pour ajuster le scroll
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="modal-image"
                  onLoad={adjustImageScroll} // Ajuste le scroll une fois l'image chargée
                />
              </div>
              <p>{selectedProject.largeDescription || selectedProject.description}</p>
              <p><strong>Technologies :</strong> {selectedProject.techs}</p>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default ProjectsCarousel;
