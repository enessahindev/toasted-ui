import { useToast } from "@/hooks/useToast";
import { useState } from "react";
import ToastContainer from "./ToastContainer";
import { MousePointer2Icon } from "lucide-react";

const ToastPlayground = () => {
  const toast = useToast();

  const [message, setMessage] = useState("This is a toast message");
  const [title, setTitle] = useState("Notification");
  const [duration, setDuration] = useState(3000);
  const [type, setType] = useState("info");
  const [position, setPosition] = useState<
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
  >("top-right");

  const showToast = () => {
    (toast as any)[type](message, {
      title,
      duration: Number(duration),
      position,
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Toasted Playground</h2>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded  bg-black/5"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded  bg-black/5"
        />
        <input
          type="number"
          placeholder="Duration (ms)"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="border p-2 rounded bg-black/5"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded bg-black/5 text-white appearance-none"
        >
          <option value="info" className="bg-black text-white">
            Info
          </option>
          <option value="success" className="bg-black text-white">
            Success
          </option>
          <option value="warning" className="bg-black text-white">
            Warning
          </option>
          <option value="error" className="bg-black text-white">
            Error
          </option>
        </select>
        <select
          value={position}
          onChange={(e) =>
            setPosition(
              e.target.value as
                | "top-right"
                | "top-left"
                | "top-center"
                | "bottom-left"
                | "bottom-center"
                | "bottom-right"
            )
          }
          className="border p-2 rounded bg-black/5 text-white appearance-none"
        >
          <option value="top-left" className="bg-black text-white">
            Top Left
          </option>
          <option value="top-center" className="bg-black text-white">
            Top Center
          </option>
          <option value="top-right" className="bg-black text-white">
            Top Right
          </option>
          <option value="bottom-left" className="bg-black text-white">
            Bottom Left
          </option>
          <option value="bottom-center" className="bg-black text-white">
            Bottom Center
          </option>
          <option value="bottom-right" className="bg-black text-white">
            Bottom Right
          </option>
        </select>
        <button
          onClick={showToast}
          className="p-2 rounded-full text-white bg-gradient-to-r from-black to-red-800 hover:from-red-700 hover:to-red-300 transition-all duration-300"
        >
          <p className="flex text-center items-center justify-center"><MousePointer2Icon className="mr-3" /> Show Your Demo Toast</p>
        </button>
      </div>
      <ToastContainer position={position} limit={5} newestOnTop />
    </div>
  );
};

export default ToastPlayground;
