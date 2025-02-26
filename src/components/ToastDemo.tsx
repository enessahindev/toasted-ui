import { useToast } from "@/hooks/useToast";
import { Ban, Copy, Eraser, InfoIcon, TriangleAlert, VerifiedIcon } from "lucide-react";
import React, { useState } from "react";

const ToastDemo = () => {
  const toast = useToast();

  const [copied, setCopied] = useState(false);

  const codeString = `    
    import React from "react";
    import { ToastProvider, ToastContainer, useToast } from '@toastedui';
    
    export default function App() {
      const toast = useToast();
      return (
          <ToastProvider>
            <ToastContainer position="top-right" />
          </ToastProvider>
      );
    }`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="p-4 sm:p-6 font-sans text-white">
      <div className="w-full max-w-4xl mx-auto text-white">
        <div className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 flex text-white">
          <img src="/logo.png" alt="ToastedUI" width="64" height="64" />
          <h1 className="mt-4 ml-4">ToastedUI</h1>
        </div>
        <p className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">
          ToastedUI provides a set of reusable components to help you build your
          notification faster. Here&apos;s an overview of some key components:
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4 text-white">
          Toasted
        </h2>
        <div className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono ">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm">npm install</p>
          </div>
          <div className="mt-4">
            <p className="text-green-400">$ npm install @toastedui</p>
            <p className="text-white">+ @toastedui</p>
            <p className="text-white">
              added 1 package, and audited 2 packages in 3s
            </p>
          </div>
        </div>
        <p className="mb-3 sm:mb-4 text-white">
          The Toasted component is a versatile and customizable Toast that can
          be used for various actions in your application.
        </p>
        <p className="mb-3 sm:mb-4 text-white">
          🚀 Lightweight & Fast - Optimized for performance with minimal overhead. <br />
          🎨 Fully Customizable - Easily adjust the design and behavior to fit your needs. <br />
          🔄 Multiple Toast Types - Supports info, success, warning, and error messages. <br />
          📱 Responsive & Mobile-Friendly - Seamlessly adapts to all devices. <br />
          ⏱️ Configurable Durations - Set toast display times as needed. <br />
          🌈 Sleek Animations - Modern, smooth transitions for an elegant user experience. <br />
          📦 Easy to Install & Use - Quick integration and straightforward usage. <br />
          🔧 TypeScript Support - Ensures a robust and error-free development experience.
        </p>
        <pre className="bg-muted p-3 sm:p-4 rounded-md mb-4 bg-black text-white text-sm sm:text-base overflow-x-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm">App.tsx</p>
          </div>
          <code>{codeString}</code>
          <button
            onClick={handleCopy}
            className="mt-2 px-4 py-2 mb-4 float-right bg-black text-white rounded hover:bg-indigo-700 transition flex"
          >
           <Copy className="mr-3" /> {copied ? "Copied!" : "Copy Code"}
          </button>
        </pre>

        <div className="flex flex-wrap gap-2 sm:gap-3 text-white">
          <button
            className="flex-1 min-w-[120px] px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => toast.info("This is an information message")}
          >
            <p className="flex"><InfoIcon className="mr-3" /> Info Toast</p>
          </button>
          <button
            className="flex-1 min-w-[120px] px-3 py-2 text-sm font-medium text-white bg-teal-500 rounded hover:bg-teal-600"
            onClick={() =>
              toast.success("Operation completed successfully!", {
                title: "Success",
              })
            }
          >
            <p className="flex"><VerifiedIcon className="mr-3" /> Success Toast</p>
          </button>
          <button
            className="flex-1 min-w-[120px] px-3 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
            onClick={() =>
              toast.error("An error occurred while processing your request", {
                title: "Error",
                duration: 0,
              })
            }
          >
            <p className="flex"><Ban className="mr-3" /> Error Toast</p>
          </button>
          <button
            className="flex-1 min-w-[120px] px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-600"
            onClick={() =>
              toast.warning(
                "Please review your information before continuing",
                {
                  title: "Warning",
                  duration: 7000,
                }
              )
            }
          >
            
            <p className="flex"><TriangleAlert className="mr-3" />Warning Toast</p>
          </button>
          <button
            className="w-full p-2 bg-gray-500 text-white rounded"
            onClick={() => toast.clearAll()}
          >
             <p className="flex text-center items-center justify-center"><Eraser className="mr-3" />Clear All Toast</p>
          </button>
          <div className="flex text-center items-center justify-center mt-4 text-white">
            <p className="mr-3 text-white">
              &copy; 2025 Toasted UI | All rights reserved.
            </p>
            <p className="text-white">
              Made with ❤️ by{" "}
              <a
                href="https://enessahin.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Enes Şahin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastDemo;
