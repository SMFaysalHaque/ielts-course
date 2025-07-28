import { Media } from "@/types/product";
import Image from "next/image";
import { useState } from "react";

export default function Trailer({ media }: { media: Media[] }) {
  console.log("Media:::::", media);
  const videoItems = media.filter(
    (item) => item.resource_type === "video" && item.resource_value
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoItems.length) return null;

  const selectedVideo = videoItems[selectedIndex];

  return (
    <div className="">
      {/* Video Player */}
      <div className="relative aspect-video rounded-lg overflow-hidden border bg-black">
        {/* Left Arrow - Only show if more than 1 video */}
        {videoItems.length > 1 && (
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#1cab55] bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow z-10 transition-all"
            onClick={() => {
              setIsPlaying(false);
              setSelectedIndex((prev) =>
                prev > 0 ? prev - 1 : videoItems.length - 1
              );
            }}
            aria-label="Previous video"
          >
            &#8592;
          </button>
        )}

        {/* Video Content */}
        {!isPlaying ? (
          // Thumbnail with Play Button
          <div className="relative w-full h-full">
            <Image
              src={
                selectedVideo.thumbnail_url ||
                `https://img.youtube.com/vi/${selectedVideo.resource_value}/maxresdefault.jpg`
              }
              alt={`Video thumbnail`}
              className="object-cover"
              layout="fill"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.includes("maxresdefault")) {
                  target.src = `https://img.youtube.com/vi/${selectedVideo.resource_value}/hqdefault.jpg`;
                }
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 bg-[#1cab55] text-white text-3xl rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-colors"
                aria-label="Play video"
              >
                ▶
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo.resource_value}?autoplay=1&modestbranding=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        )}

        {/* Right Arrow - Only show if more than 1 video */}
        {videoItems.length > 1 && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1cab55] bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow z-10 transition-all"
            onClick={() => {
              setIsPlaying(false);
              setSelectedIndex((prev) =>
                prev < videoItems.length - 1 ? prev + 1 : 0
              );
            }}
            aria-label="Next video"
          >
            &#8594;
          </button>
        )}
      </div>

      {/* Thumbnail List - Only show if more than 1 video */}
      {videoItems.length > 1 && (
        <div className="my-4 overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${selectedIndex * 140}px)` }} // 140px = thumbnail width + gap
          >
            {videoItems.map((item, idx) => (
              <div
                key={`${item.resource_value}-${idx}`}
                onClick={() => {
                  setSelectedIndex(idx);
                  setIsPlaying(false);
                }}
                className={`cursor-pointer border-2 rounded-md p-1 flex-shrink-0 transition-colors ${
                  idx === selectedIndex
                    ? "border-[#1cab55]"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="w-32 aspect-video relative">
                  <div className="w-full h-full">
                    <Image
                      src={
                        item.thumbnail_url ||
                        `https://img.youtube.com/vi/${item.resource_value}/mqdefault.jpg`
                      }
                      alt={`Video ${idx + 1} thumbnail`}
                      className="object-cover rounded"
                      layout="fill"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes("hqdefault")) {
                          target.src = `https://img.youtube.com/vi/${item.resource_value}/hqdefault.jpg`;
                        }
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded">
                    <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <span className="text-xs ml-0.5 text-[#1cab55]">▶</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
