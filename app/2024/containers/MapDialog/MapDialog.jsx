'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { MdClose } from 'react-icons/md';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import styles from './MapDialog.module.scss';
import 'leaflet/dist/leaflet.css';

const POSITION = [50.0838332, 19.9960192];

const MOTION_CONFIG = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const ICON = new Icon({
  iconUrl: '/2023/marker.svg',
  iconSize: [48, 48],
});

export default function MapDialog({ isOpen, setIsOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <motion.dialog {...MOTION_CONFIG} className={styles.dialog}>
            <div className={styles.mapHeader}>
              <h4>Lokalizacja</h4>
              <button onClick={() => setIsOpen(false)}>
                <MdClose aria-label='Zamknij dialog' />
              </button>
            </div>

            <div className={styles.mapContainer}>
              <MapContainer
                className={styles.mapContent}
                center={POSITION}
                zoom={15}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker
                  className={styles.marker}
                  position={POSITION}
                  icon={ICON}
                >
                  <Popup className={styles.popup}>
                    Klub Kwadrat - lokalizacja hackathonu
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className={styles.mapLink}>
              <a href='https://maps.google.com/maps?q=Klub+Kwadrat,+Kraków&lci=transit_comp'>
                Otwórz lokalizacje w google maps
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </motion.dialog>
        </AnimatePresence>
      )}

      <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
    </>
  );
}
