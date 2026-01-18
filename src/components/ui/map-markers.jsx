import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";

const locations = [
  { id: 1, name: "Eleanor Roosevelt High School", lat: 40.7703, lng: -73.9533 },
  { id: 2, name: "Prestonwood Christian Academy", lat: 33.0296, lng: -96.8436 },
  { id: 3, name: "Stuyvesant High School", lat: 40.7179, lng: -74.0138 },
  { id: 4, name: "Parsons School of Design", lat: 40.7354, lng: -73.9971 },
  { id: 5, name: "Crescenta Valley High School", lat: 34.2233, lng: -118.2431 },
  { id: 6, name: "Francis Lewis High School", lat: 40.7408, lng: -73.7939 },
  { id: 7, name: "Boston University", lat: 42.3505, lng: -71.1054 },
  { id: 8, name: "New York University (NYU)", lat: 40.7295, lng: -73.9965 },
  { id: 9, name: "Purchase College (SUNY)", lat: 41.047, lng: -73.702 },
  { id: 10, name: "Syosset High School", lat: 40.8308, lng: -73.4829 },
  { id: 11, name: "Kings Park High School", lat: 40.8839, lng: -73.2408 },
  { id: 12, name: "White Plains High School", lat: 41.0201, lng: -73.7378 },
  { id: 13, name: "Fort Hamilton High School", lat: 40.6272, lng: -74.0394 },
  {
    id: 14,
    name: "Intl. Leadership of Texas, Garland",
    lat: 32.96,
    lng: -96.67,
  },
  { id: 15, name: "Herricks High School", lat: 40.7647, lng: -73.6628 },
  {
    id: 16,
    name: "Institute for Law and Technology",
    lat: 40.6884,
    lng: -73.9208,
  },
  { id: 17, name: "Flushing High School", lat: 40.765, lng: -73.8275 },
  {
    id: 18,
    name: "Plainview High School (POB JFK)",
    lat: 40.7808,
    lng: -73.4639,
  },
  { id: 19, name: "Hunter College", lat: 40.7685, lng: -73.9648 },
  { id: 20, name: "River Dell High School", lat: 40.9444, lng: -74.0346 },
  {
    id: 21,
    name: "Brooklyn Technical High School",
    lat: 40.6889,
    lng: -73.9772,
  },
  { id: 22, name: "Beacon High School", lat: 40.7614, lng: -73.9961 },
  {
    id: 23,
    name: "Manhattan Hunter Science High School",
    lat: 40.7748,
    lng: -73.9864,
  },
  {
    id: 24,
    name: "Manhattan Center for Science & Math",
    lat: 40.7941,
    lng: -73.9339,
  },
  { id: 25, name: "Manhattan Village Academy", lat: 40.7419, lng: -73.9919 },
  { id: 26, name: "Central Valley High School", lat: 37.5792, lng: -120.9592 },
  { id: 27, name: "Millennium High School", lat: 40.7046, lng: -74.0114 },
  { id: 28, name: "Curtis High School", lat: 40.6453, lng: -74.0817 },
  {
    id: 29,
    name: "Franklin D. Roosevelt High School",
    lat: 40.6214,
    lng: -73.9826,
  },
  {
    id: 30,
    name: "HS for Health Careers & Sciences",
    lat: 40.8526,
    lng: -73.9276,
  },
  { id: 31, name: "HS for Environmental Studies", lat: 40.7679, lng: -73.9884 },
  { id: 32, name: "Townsend Harris High School", lat: 40.735, lng: -73.8222 },
  { id: 33, name: "Aviation High School", lat: 40.743, lng: -73.9298 },
  { id: 34, name: "La Cañada High School", lat: 34.1929, lng: -118.1796 },
  { id: 35, name: "Prestwood High School", lat: 40.814, lng: -73.818 },
  { id: 36, name: "Riverside High School", lat: 40.9575, lng: -73.8997 },
  { id: 37, name: "Lab High School (NYC Lab)", lat: 40.7425, lng: -74.0025 },
  { id: 38, name: "Emory University", lat: 33.7925, lng: -84.3209 },
  { id: 39, name: "Stony Brook University", lat: 40.9124, lng: -73.1234 },
  { id: 40, name: "Columbia University", lat: 40.8075, lng: -73.9626 },
  { id: 41, name: "Northeastern University", lat: 42.3398, lng: -71.0892 },
];

export function SchoolsMarkers() {
  return (
    <div className="h-[350px] w-full">
      <Map center={[-98.5795, 39.8283]} zoom={3}>
        {locations.map((location) => (
          <MapMarker
            key={location.id}
            longitude={location.lng}
            latitude={location.lat}
          >
            <MarkerContent>
              <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white shadow-lg" />
            </MarkerContent>

            <MarkerTooltip>
              <span className="text-white font-medium text-sm">
                {location.name}
              </span>
            </MarkerTooltip>

            <MarkerPopup>
              <div className="space-y-1">
                <p className="font-semibold text-white">{location.name}</p>
                <p className="text-gray-200">
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
