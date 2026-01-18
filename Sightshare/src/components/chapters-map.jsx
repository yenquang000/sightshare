import { Map } from "@/components/ui/map";
import { Card } from "@/components/ui/card";
import { SchoolsMarkers } from "./ui/map-markers";

export function MyMap() {
  return (
    <Card className="h-[300px] p-0 overflow-hidden">
      <Map center={[-74.006, 40.7128]} zoom={11}>
        <SchoolsMarkers />
      </Map>
    </Card>
  );
}
