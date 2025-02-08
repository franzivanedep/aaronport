"use client"; // This makes it a client component

import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal & Bold
  variable: "--font-poppins",
});
export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="landing-container">
      <button onClick={() => router.push("/alt")} className="continue-button">
        see gallery
      </button>
    </div>
  );
}
