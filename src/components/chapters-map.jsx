import { Map } from "@/components/ui/map";
import { Card } from "@/components/ui/card";
import { SchoolsMarkers } from "./ui/map-markers";

export function MyMap() {
  return (
    <Card className="h-[380px] gap-0 overflow-hidden p-0 md:h-[480px]">
      <Map center={[-74.006, 40.7128]} zoom={11}>
        <SchoolsMarkers />
      </Map>
    </Card>
  );
}
