import React, { useEffect, useState } from "react";
import { usePostApi } from "../hooks/use-api";
import { useAuthStore } from "../stores/auth-store";
import "./PepaModal.css";

interface PepaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Promocion {
  name: string;
  benefitValue: string;
  days: string[];
  heading: string;
  locations: Array<{
    name: string;
    lat: string;
    lon: string;
  }>;
}

const PepaModal: React.FC<PepaModalProps> = ({ isOpen, onClose }) => {
  const { user } = useAuthStore();
  const postApiMutation = usePostApi();
  const [data, setData] = useState<any>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showPromos, setShowPromos] = useState(false);

  useEffect(() => {
    if (isOpen && user) {
      postApiMutation.mutate(
        {
          province: user.provincia,
          name: user.name,
        },
        {
          onSuccess: (response) => {
            setData(response);
            setShowMessage(false);
            setShowPromos(false);
            
            setTimeout(() => setShowMessage(true), 500);
            setTimeout(() => setShowPromos(true), 1500);
          },
        }
      );
    }
  }, [isOpen, user]);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="pepa-modal-overlay" onClick={onClose}>
      <div className="pepa-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pepa-modal-header">
          <h2>🐷 Pepa</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="pepa-modal-content">
          {data?.message && showMessage && (
            <p className="modal-pepa-message modal-fade-in">{data.message}</p>
          )}

          {showPromos && (
            <div className="modal-promociones-list modal-slide-up">
              {data?.promociones?.map((promo: Promocion, index: number) => (
                <div key={index} className="modal-promo-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="modal-promo-icon">
                    {promo.heading === "Gastronomía" ? "☕" : "🛒"}
                  </div>

                  <h3 className="modal-promo-title">{promo.name}</h3>
                  <div className="modal-promo-benefit">
                    {promo.benefitValue}
                  </div>
                  <div className="modal-promo-days">
                    {promo.days[0].split(", ").map((day, dayIndex) => (
                      <span key={dayIndex} className="modal-day-chip">
                        {day}
                      </span>
                    ))}
                  </div>

                  <div className="modal-promo-category">{promo.heading}</div>

                  <div className="modal-promo-locations">
                    <div className="modal-locations-title">Sucursales:</div>
                    {promo.locations.map((location, locIndex) => (
                      <div key={locIndex} className="modal-location-item">
                        {location.name.split(",")[0]}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PepaModal;
