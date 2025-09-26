import React, { useState } from 'react';
import Image from '../../../components/AppImage.jsx';
import Button from '../../../components/ui/Button.jsx';
import ResumeFile from '../../../assets/Sahil.jpg';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
      >
        View Resume
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[95vh] overflow-auto p-6 relative">
            
            {/* Modal Header */}
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              My Resume
            </h2>

            {/* Scrollable Image */}
            <div className="overflow-auto max-h-[70vh] mb-6">
              <Image
                src={ResumeFile}
                alt="Resume"
                className="w-full object-contain"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <a
                href={ResumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-success text-success-foreground rounded-lg hover:bg-success/90 transition"
              >
                Resume
              </a>
              <Button
                variant="default"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeModal;
