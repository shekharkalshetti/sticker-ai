import Form from "@/components/form";
import { Twitter } from "@/components/icons";
import PhotoBooth from "@/components/photo-booth";
import { CountDisplay, GeneratedCount } from "./generated-count";
import { Suspense } from "react";

export default function FormRSC({
  prompt,
  pattern,
  image,
}: {
  prompt?: string;
  pattern?: string;
  image: string | null;
}) {
  return (
    <div className="z-10 w-full max-w-3xl  px-2.5 xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[4rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Generate beautiful AI stickers in one click.
      </h1>
      {/* <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Generate beautiful AI stickers in one click.
      </p> */}
      <Form promptValue={prompt} patternValue={pattern} />
      <Suspense fallback={<CountDisplay />}>
        {/* <GeneratedCount /> */}
      </Suspense>
      <PhotoBooth image={image} />
    </div>
  );
}
