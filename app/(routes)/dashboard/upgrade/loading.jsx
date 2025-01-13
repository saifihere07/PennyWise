import { Loader } from "lucide-react";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <Loader className="animate-spin  text-primary w-12 h-12" />
    </div>
  );
}
