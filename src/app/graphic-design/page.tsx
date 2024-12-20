import Marquee from "@/components/Marque";
import { graphic_poster } from "@/constants/data";
import GraphicEvalute from "@/pages/Service/Graphic-design/GraphicEvalute";
import GraphicHero from "@/pages/Service/Graphic-design/GraphicHero";
import PosterDesign from "@/pages/Service/Graphic-design/PosterDesign";
import React from "react";

export default function GraphicDesign() {
  return (
    <main>
      <GraphicHero />
      <GraphicEvalute />

      <PosterDesign />
      <div>
        <h1 className="text-5xl text-center py-10">Logos and Posters</h1>
        <Marquee images={graphic_poster} animateClassName="enableAnimation" />
        <Marquee
          images={graphic_poster}
          animateClassName="enableAnimationReverse"
        />
      </div>
    </main>
  );
}
