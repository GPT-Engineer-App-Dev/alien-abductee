import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Reports = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Report a UFO Sighting</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" {...register("date", { required: true })} />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location", { required: true })} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register("description", { required: true })} />
        </div>
        <div>
          <Label htmlFor="image">Upload Image</Label>
          <Input id="image" type="file" {...register("image")} />
        </div>
        <Button type="submit">Submit Report</Button>
      </form>
    </div>
  );
};

export default Reports;