import React, { useState, useEffect } from 'react';
import { FaTimes, FaEnvelope, FaTelegram, FaWhatsapp, FaInstagram, FaQrcode } from 'react-icons/fa';
import './DisclaimerModal.css';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeCard, setActiveCard] = useState('telegram');

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = (card) => {
    setActiveCard(card);
  };

  const handleMouseLeave = () => {
    setActiveCard('telegram');
  };

  // Actual contact information
  const contactInfo = {
    email: "manuchehrqoriev798@gmail.com",
    telegram: "manuchehr0",
    whatsapp: "992928481064",
    instagramAmirbek: "amirbek.islomov"
  };

  // Generate QR code URLs
  const emailQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mailto:${contactInfo.email}`;
  const telegramQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/${contactInfo.telegram}`;
  const whatsappQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/${contactInfo.whatsapp}`;
  const instagramQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://instagram.com/${contactInfo.instagramAmirbek}`;

  return isOpen ? (
    <div className="disclaimer-modal-overlay">
      <div className="disclaimer-modal">
        <div className="disclaimer-header">
          <h2>Welcome to Our Demo</h2>
          <button className="close-button" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>
        <div className="disclaimer-content">
          <div className="disclaimer-section">
            <h3>Important Notice</h3>
            <p>
              This is a <span className="highlight">demonstration version</span> of our educational platform 
              being presented at the tutoring conference in Dubai. What you're seeing is a vision of how 
              this educational tool could be implemented in the future. We are actively developing this product 
              and seeking investors to help us expand our team and deploy the full version. This demo showcases 
              our concept and potential features, but is not yet a complete product.
            </p>
          </div>
          
          <div className="disclaimer-section">
            <h3>Contact Us</h3>
            <p>
              Interested in our vision? We'd love to connect with potential investors and partners.
            </p>
            
            <div className="contact-grid">
              <div 
                className="contact-card" 
                onMouseEnter={() => handleMouseEnter('email')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-info">
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                  <div className="hover-hint">
                    <FaQrcode /> <span>Hover for QR</span>
                  </div>
                </div>
                {activeCard === 'email' && (
                  <div className="qr-container active-qr">
                    <img src={emailQR} alt="Email QR Code" className="qr-code" />
                    <p>Scan to send an email</p>
                  </div>
                )}
              </div>
              
              <div className={`contact-card telegram-card ${activeCard === 'telegram' ? 'active' : 'inactive'}`}>
                <div className="visible-qr">
                  <img src={telegramQR} alt="Telegram QR Code" className="qr-code" />
                  <p className="telegram-username">@{contactInfo.telegram}</p>
                  <p className="scan-text">Scan to connect on Telegram</p>
                </div>
              </div>
              
              <div 
                className="contact-card"
                onMouseEnter={() => handleMouseEnter('whatsapp')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-info">
                  <h4>WhatsApp</h4>
                  <p>+{contactInfo.whatsapp}</p>
                  <div className="hover-hint">
                    <FaQrcode /> <span>Hover for QR</span>
                  </div>
                </div>
                {activeCard === 'whatsapp' && (
                  <div className="qr-container active-qr">
                    <img src={whatsappQR} alt="WhatsApp QR Code" className="qr-code" />
                    <p>Scan to connect on WhatsApp</p>
                  </div>
                )}
              </div>
              
              <div 
                className="contact-card"
                onMouseEnter={() => handleMouseEnter('instagram')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="contact-icon">
                  <FaInstagram />
                </div>
                <div className="contact-info">
                  <h4>Instagram (Amirbek)</h4>
                  <p>@{contactInfo.instagramAmirbek}</p>
                  <div className="hover-hint">
                    <FaQrcode /> <span>Hover for QR</span>
                  </div>
                </div>
                {activeCard === 'instagram' && (
                  <div className="qr-container active-qr">
                    <img src={instagramQR} alt="Instagram QR Code" className="qr-code" />
                    <p>Scan to follow on Instagram</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="disclaimer-footer">
          <button className="primary-button" onClick={handleClose}>
            Proceed to Demo
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default DisclaimerModal; 