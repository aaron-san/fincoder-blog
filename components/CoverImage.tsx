import React from "react";

type CoverImageProps = {
  src: string;
  alt?: string;
};

export default function CoverImage({ src, alt }: CoverImageProps) {
  return (
    <div className="shadow mx-2 my-4 w-[calc(100%-1rem)] max-w-full h-[140px] overflow-hidden">
      <img
        className="w-full h-full object-cover filter"
        src={src}
        alt={alt}
        style={{
          filter: "grayscale(100%) brightness(0.7)",
        }}
      />
    </div>
  );
}
