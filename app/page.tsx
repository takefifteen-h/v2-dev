import React from "react";

import Navbar from "@/components/Navbar";
import AnimatePageContent from "@/components/AnimatePageContent";

export default function Home() {
  return (
    <AnimatePageContent>
      <React.Fragment>
        <Navbar />
        <main className="mt-[90px]">
          <h1 className="text-xl">Home</h1>
        </main>
      </React.Fragment>
    </AnimatePageContent>
  );
}
