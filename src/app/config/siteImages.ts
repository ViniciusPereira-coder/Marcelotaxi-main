import airportSp from "@/app/assets/photos/airport-sp.jpg";
import heroSpinRoad from "@/app/assets/photos/Foto spin na estrada.png";

export const SITE_IMAGES = {
  // Brazilian taxi context + Spin as lead vehicle.
  hero: heroSpinRoad,
  airport: airportSp,
  // Temporary fallbacks until dedicated files are added.
  corporate: airportSp,
  fleet: heroSpinRoad,
  service: airportSp,
} as const;
