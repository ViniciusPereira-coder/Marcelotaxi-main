import airportSp from "@/app/assets/photos/airport-sp.jpg";
import congonhasAirport from "@/app/assets/photos/Congonhas airport.jpg";
import heroTaxiPlane from "@/app/assets/photos/taxi-e-aviao.png";
import businessTrips from "@/app/assets/photos/Viagens de negocios.jpg";
import carFleet from "@/app/assets/photos/Frota de carro.png";
import taxiNaEstrada from "@/app/assets/photos/taxi na estrada.png";

export const SITE_IMAGES = {
  // Hero principal.
  hero: heroTaxiPlane,
  airport: congonhasAirport,
  // Temporary fallbacks until dedicated files are added.
  corporate: businessTrips,
  fleet: carFleet,
  service: taxiNaEstrada,
} as const;
