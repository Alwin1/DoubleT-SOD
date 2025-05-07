import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./GalleryImages.css";
import GrassFooter from "../assets/grassFooter.jpeg";

const TOTAL_IMAGES = 42;
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

    current.forEach((img, i) => {
      setTimeout(() => {
        setRevealedImages((prev) => [...prev, img.id]);
      }, i * 400);
    });
  }, [currentPage]);

  const goToPage = (index) => {
    if (index >= 0 && index < totalPages) {
      setCurrentPage(index);
      window.scrollTo(0, 0);
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
        setModalImage({
          src: `/galleryImages/image${nextIndex + 1}.jpg`,
          id: nextIndex,
        });
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => navigateModal(1),
    onSwipedRight: () => navigateModal(-1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

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
              loading="lazy"
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

      {modalImage && (
        <div className="modalOverlay" onClick={closeModal}>
          <div
            className="modalContent"
            {...handlers}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="closeButton" onClick={closeModal}>
              &#10005;
            </button>

            <button
              className="modalArrow left"
              onClick={() => navigateModal(-1)}
              disabled={modalImage.id === 0}
            >
              &#10094;
            </button>

            <img
              src={modalImage.src}
              alt={`Modal Image ${modalImage.id + 1}`}
              className="modalImage"
            />

            <button
              className="modalArrow right"
              onClick={() => navigateModal(1)}
              disabled={modalImage.id === TOTAL_IMAGES - 1}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      <img src={GrassFooter} className="grassFooter" alt="Grass Footer" />
    </div>
  );
};

export default GalleryImages;
