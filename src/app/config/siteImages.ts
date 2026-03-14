import airportSp from "@/app/assets/photos/airport-sp.jpg";
import heroSpinRoad from "@/app/assets/photos/Foto spin na estrada.png";
import heroTaxiPlane from "@/app/assets/photos/taxi-e-aviao.png";

export const SITE_IMAGES = {
  // Hero principal.
  hero: heroTaxiPlane,
  airport: airportSp,
  // Temporary fallbacks until dedicated files are added.
  corporate: airportSp,
  fleet: heroSpinRoad,
  service: airportSp,
} as const;
