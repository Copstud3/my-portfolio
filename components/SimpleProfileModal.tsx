import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import myImg from '@/public/images/my-image.jpg';

interface SimpleProfileModalProps {
  theme?: string; // Making theme optional
}

const SimpleProfileModal = ({ theme }: SimpleProfileModalProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  //   setIsAnimating(true);
  // };

  // const closeModal = () => {
  //   setIsAnimating(false);
  //   setTimeout(() => setIsOpen(false), 300); // Wait for animation before unmounting
  // };

  // const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // };

  // useEffect(() => {
  //   const handleEscape = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') closeModal();
  //   };

  //   if (isOpen) {
  //     document.addEventListener('keydown', handleEscape);
  //   }

  //   return () => {
  //     document.removeEventListener('keydown', handleEscape);
  //   };
  // }, [isOpen]);

  return (
    <div>
      <button 
        // onClick={openModal}
        className="relative overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <Image 
          src="/profile.jpg" 
          alt="profile image" 
          className={`rounded-full border-2 p-2 ${
            theme === 'dark' ? 'border-dull-brown' : 'border-coral-blue'
          }`}
          width={200} 
          height={200} 
        />
      </button>

      {/* {isOpen && (
        <div 
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out ${
            isAnimating ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0'
          }`}
          onClick={handleBackdropClick}
        >
          <div 
            className={`relative max-w-3xl w-[400px] transition-all duration-300 ease-in-out ${
              isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              ✕
            </button>
            <Image
              src={myImg}
              alt="Profile"
              className="w-full max-h-[80vh] rounded-full object-contain"
              width={200}
              height={200}
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SimpleProfileModal;
