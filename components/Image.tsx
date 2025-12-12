import React from "react";

type ImgProps = {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  maxHeight?: string | number; // optional max height
};

export default function Img({
  src,
  alt,
  title,
  caption,
  maxHeight = "100px",
}: ImgProps) {
  return (
    <div className="inline-block mx-auto my-4 p-2 rounded w-max max-w-full overflow-x-auto">
      {title && <div className="mb-2 font-semibold">{title}</div>}
      <img
        className="object-contain"
        src={src}
        alt={alt}
        style={{ maxHeight }}
      />
      {caption && <p className="mt-2 text-sm text-center">{caption}</p>}
    </div>
  );
}
