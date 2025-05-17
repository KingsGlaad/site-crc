'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {  divIcon } from "leaflet";
import 'leaflet/dist/leaflet.css'
import { renderToStaticMarkup } from 'react-dom/server'
import { MapPin } from 'lucide-react'


const ZOOM = 15

const iconMarkup = renderToStaticMarkup(<MapPin className="fill-red-600 text-primary" />);
const customIcon = divIcon({
  html: iconMarkup,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  className: '',
})
const position: [number, number] = [-20.574371, -47.853418] // Exemplo: São Paulo

export default function LocationSection() {
  return (
    <section id="location" className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Nossa Localização
        </h2>
        <p className="text-zinc-400 mb-8">
          Venha nos visitar! Estamos localizados em um ponto de fácil acesso.
        </p>

        <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
          <MapContainer
            center={position}
            zoom={ZOOM}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                Cristo Reina Church<br />Seja bem-vindo!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <p className="mt-4 text-zinc-400">Rua: Sergipe, n°3111 - Baixada - São Joaquim da Barra</p>
      </div>
    </section>
  )
}
