'use client';

import 'leaflet/dist/leaflet.css';
import { MdClose } from 'react-icons/md';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import styles from './MapDialog.module.scss';

const POSITION = [50.0838332, 19.9960192];

const icon = new Icon({
  iconUrl: '/2023/marker.svg',
  iconSize: [48, 48],
});

export default function MapDialog({ isOpen, setIsOpen }) {
  return isOpen ? (
    <>
      <dialog className={styles.dialog}>
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
            <Marker className={styles.marker} position={POSITION} icon={icon}>
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
      </dialog>
      <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
    </>
  ) : null;
}
