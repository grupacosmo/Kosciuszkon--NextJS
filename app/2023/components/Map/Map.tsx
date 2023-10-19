import { type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@iconify/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.scss';

type MapProps = {
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
};

const CORDS = [50.0838332, 19.9960192]

export function Map({ isOpen, setIsOpen }: MapProps): ReactElement {
  return (
    <>
      <div className={`map-portal ${isOpen ? 'show' : ''}`}>
        <div className='map-portal__menu'>
          <div>Lokalizacja</div>
          <div onClick={() => setIsOpen(false)}>
            <Icon icon='material-symbols:close' />
          </div>
        </div>
        <div className='map-portal__map'>
          <MapContainer center={CORDS} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={CORDS}>
              <Popup>Klub Kwadrat - lokalizacja hackathonu</Popup>
            </Marker>
          </MapContainer>
          <div className='map-portal__map-link'>
            <a href='https://maps.google.com/maps?q=Klub+Kwadrat,+Kraków&lci=transit_comp'>
              Otwórz lokalizacje w mapach
            </a>
          </div>
        </div>
      </div>
      <div
        className={`map-portal-backdrop ${isOpen ? 'show' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}
