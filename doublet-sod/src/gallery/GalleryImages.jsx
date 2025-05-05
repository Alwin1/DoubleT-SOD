import React, { useEffect, useState } from "react";
import "./GalleryImages.css";
import GrassFooter from "../assets/grassFooter.jpeg";
const TOTAL_IMAGES = 23;
const IMAGES_PER_PAGE = 16;

const generateImageList = () => {
  return Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    src: `/galleryImages/image${i + 1}.jpg`,
    id: i,
  }));
};

const GalleryImages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [revealedImages, setRevealedImages] = useState([]);
  const [pageImages, setPageImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const totalPages = Math.ceil(TOTAL_IMAGES / IMAGES_PER_PAGE);

  useEffect(() => {
    const allImages = generateImageList();
    const startIdx = currentPage * IMAGES_PER_PAGE;
    const current = allImages.slice(startIdx, startIdx + IMAGES_PER_PAGE);

    setPageImages(current);
    setRevealedImages([]);

    // Generate a random order of indexes just for revealing
    const indices = Array.from(current.keys());
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    indices.forEach((i, revealIndex) => {
      const img = current[i];
      setTimeout(() => {
        setRevealedImages((prev) => [...prev, img.id]);
      }, revealIndex * 800 + Math.random() * 300);
    });
  }, [currentPage]);

  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const goToPage = (index) => {
    if (index >= 0 && index < totalPages) {
      setCurrentPage(index);
    }
  };

  const openModal = (img) => {
    setModalImage(img);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const navigateModal = (direction) => {
    if (modalImage) {
      const nextIndex = modalImage.id + direction;
      if (nextIndex >= 0 && nextIndex < TOTAL_IMAGES) {
        setModalImage(pageImages.find((img) => img.id === nextIndex));
      }
    }
  };

  return (
    <div className="galleryContainer">
      <h2>Past Installations</h2>

      <div className="flexGalleryWrapper">
        {pageImages.map((img) => (
          <div
            className="flexGalleryItem"
            key={img.id}
            onClick={() => openModal(img)}
          >
            <img
              src={img.src}
              alt={`Gallery ${img.id + 1}`}
              className={`galleryImage ${
                revealedImages.includes(img.id) ? "fadeIn" : "hidden"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="galleryNavigation">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          &#10094;
        </button>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          &#10095;
        </button>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closeModal}>
              &#10005;
            </button>
            <img
              src={modalImage.src}
              alt={`Modal Image ${modalImage.id + 1}`}
              className="modalImage"
            />
            <div className="modalNavigation">
              <button
                className="modalArrow"
                onClick={() => navigateModal(-1)}
                disabled={modalImage.id === 0}
              >
                &#10094;
              </button>
              <button
                className="modalArrow"
                onClick={() => navigateModal(1)}
                disabled={modalImage.id === TOTAL_IMAGES - 1}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
      <img src={GrassFooter} className="grassFooter" />
    </div>
  );
};

export default GalleryImages;
