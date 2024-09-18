import Image from "next/image";
// import LandingPage from "@/components/landing2";
import LandingPage from "@/components/landing";

import Navbar from "@/components/appbar";
export default function Home() {
  return (
    <div>
      <div>
        {" "}
        <Navbar />
      </div>
      <div>
        <LandingPage />
      </div>
    </div>
  );
}
