import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sightingsData = [
  {
    title: "Bright Light in the Sky",
    date: "2023-09-01",
    location: "Los Angeles, CA",
    description: "A bright light was seen moving rapidly across the sky.",
  },
  {
    title: "Flying Saucer",
    date: "2023-08-15",
    location: "Roswell, NM",
    description: "A flying saucer was spotted hovering over a field.",
  },
  // Add more sightings here
];

const Sightings = () => {
  const [search, setSearch] = useState("");

  const filteredSightings = sightingsData.filter(
    (sighting) =>
      sighting.title.toLowerCase().includes(search.toLowerCase()) ||
      sighting.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Recent UFO Sightings</h1>
      <Input
        placeholder="Search by title or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSightings.map((sighting, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{sighting.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Date:</strong> {sighting.date}</p>
              <p><strong>Location:</strong> {sighting.location}</p>
              <p>{sighting.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sightings;