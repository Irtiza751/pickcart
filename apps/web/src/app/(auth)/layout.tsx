// import { Pickcart } from "@/components/logo";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container full-screen grid place-items-center">
      {children}
    </div>
  );
}
