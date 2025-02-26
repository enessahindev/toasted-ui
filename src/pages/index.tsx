import React from "react";
import Head from "next/head"; // Eğer pages dizinini kullanıyorsan
import { ToastProvider, ToastContainer } from "../index";
import ToastDemo from "@/components/ToastDemo";
import ToastPlayground from "@/components/ToastPlayground";

export default function App() {
  return (
    <>
      <Head>
        <title>Toasted UI - Toast</title>
        <meta name="description" content="A lightweight and customizable toast notification system for React" />
        <meta name="keywords" content="react,toast,notification,alert,popup,enes şahin,enes,şahin,yazılım" />
        <meta name="author" content="Muhammet Enes Şahin" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="Turkish" />
        <meta name="rating" content="general" />
        <meta property="og:title" content="Toasted UI - Toast" />
        <meta property="og:description" content="A lightweight and customizable toast notification system for React" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.enessahin.dev" />
        <meta property="og:type" content="website" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container">
        <ToastProvider>
          <ToastDemo />
          <ToastPlayground />
          <ToastContainer position="top-right" limit={5} />
        </ToastProvider>
      </div>
    </>
  );
}
