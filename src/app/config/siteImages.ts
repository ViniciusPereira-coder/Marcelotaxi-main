import airportSp from "@/app/assets/photos/airport-sp.jpg";
import congonhasAirport from "@/app/assets/photos/Congonhas airport.jpg";
import heroSpinRoad from "@/app/assets/photos/Foto spin na estrada.png";
import heroTaxiPlane from "@/app/assets/photos/taxi-e-aviao.png";
import businessTrips from "@/app/assets/photos/Viagens de negocios.jpg";

export const SITE_IMAGES = {
  // Hero principal.
  hero: heroTaxiPlane,
  airport: congonhasAirport,
  // Temporary fallbacks until dedicated files are added.
  corporate: businessTrips,
  fleet: heroSpinRoad,
  service: airportSp,
} as const;
