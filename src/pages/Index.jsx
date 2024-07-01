import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <div
        className="hero-section bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      >
        <h1 className="text-4xl font-bold text-white">Welcome to UFOs in USA</h1>
      </div>
      <p className="text-lg">
        Discover and report UFO sightings across the United States.
      </p>
      <Button onClick={() => navigate("/sightings")} className="mt-4">
        View Sightings
      </Button>
    </div>
  );
};

export default Index;
