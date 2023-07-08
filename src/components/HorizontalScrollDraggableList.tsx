"use client";

import { useRef, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import service from "../app/api/data/services.json";

export default function HorizontalScrollDraggable() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (event: MouseEvent) => {
        if (startX !== null && scrollLeft !== null) {
          const delta = event.clientX - startX;
          containerRef.current!.scrollLeft = scrollLeft - delta;
        }
      };
      const handleMouseUp = () => {
        setIsDragging(false);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    setStartX(event.clientX);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    const container = containerRef.current!;
    const scrollWidth = container.scrollWidth;
    const maxScrollLeft = scrollWidth - container.clientWidth;
    const scrollStep = container.clientWidth * 0.8;
    const currentScrollLeft = container.scrollLeft;
    let newScrollLeft = currentScrollLeft;
    if (direction === "left") {
      newScrollLeft = Math.max(currentScrollLeft - scrollStep, 0);
    } else if (direction === "right") {
      newScrollLeft = Math.min(currentScrollLeft + scrollStep, maxScrollLeft);
    }
    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="horizontal-scrollbar">
      <button
        className="btn z-10 py-2 px-4 rounded-l absolute left-0 top-0 bottom-0"
        onClick={() => handleArrowClick("left")}
      >
        <svg
          className="w-6 h-6 rotate-180 hover:text-gray-500"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.293,11.293c0.391-0.391,0.391-1.023,0-1.414L9.586,4.293C9.195,3.902,8.562,3.902,8.171,4.293 c-0.391,0.391-0.391,1.023,0,1.414l5.707,5.707l-5.707,5.707c-0.391,0.391-0.391,1.023,0,1.414C8.562,18.098,8.781,18.205,9,18.205 s0.438-0.107,0.707-0.293l5.707-5.707C15.684,12.316,15.684,11.684,15.293,11.293z"
          />
        </svg>
      </button>
      <div
        ref={containerRef}
        className="flex flex-col items-center py-12 px-16 space-x-10"
        onMouseDown={handleMouseDown}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
      >
        {service[0].service.map((product) => (
          <ProductItem
            key={product.id}
            img={product.img}
            title={product.title}
          />
        ))}
      </div>
      <button
        className="btn z-10 py-2 px-4 rounded-r absolute right-0 top-0 bottom-0"
        onClick={() => handleArrowClick("right")}
      >
        <svg className="w-6 h-6 hover:text-gray-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.293,11.293c0.391-0.391,0.391-1.023,0-1.414L9.586,4.293C9.195,3.902,8.562,3.902,8.171,4.293 c-0.391,0.391-0.391,1.023,0,1.414l5.707,5.707l-5.707,5.707c-0.391,0.391-0.391,1.023,0,1.414C8.562,18.098,8.781,18.205,9,18.205 s0.438-0.107,0.707-0.293l5.707-5.707C15.684,12.316,15.684,11.684,15.293,11.293z"
          />
        </svg>
      </button>
    </div>
  );
}
