"use client";
import { useState, useRef } from "react";

// ==================== PlayButton Component ====================
interface PlayButtonProps {
  selected: string;
}

export function PlayButton({ selected }: PlayButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "playing" | "paused">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = async () => {
    // Pause
    if (status === "playing") {
      audioRef.current?.pause();
      setStatus("paused");
      return;
    }

    // Resume
    if (status === "paused") {
      await audioRef.current?.play().catch((err) => console.error("Resume failed:", err));
      setStatus("playing");
      return;
    }

    // Load new audio
    setStatus("loading");
    try {
      const response = await fetch(`/get-audio/${selected}`);
      if (!response.ok) {
        alert("Audio not found");
        setStatus("idle");
        return;
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);

      // Cleanup old audio
      audioRef.current?.pause();
      if (audioRef.current?.src) URL.revokeObjectURL(audioRef.current.src);

      const audio = new Audio(audioUrl);
      audio.volume = 1.0;
      audio.muted = false;
      audioRef.current = audio;
      audio.onended = () => setStatus("idle");

      await audio.play();
      setStatus("playing");
    } catch (err) {
      console.error("Audio play failed:", err);
      setStatus("idle");
    }
  };

  // Render SVG icons based on status
  const renderIcon = () => {
    if (status === "loading") {
      return (
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
        >
          <circle
            cx={10}
            cy={10}
            r={8}
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray={24}
          />
        </svg>
      );
    }

    if (status === "playing") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
          <path fill="currentColor" d="M6 4h3v12H6V4zm5 0h3v12h-3V4z" />
        </svg>
      );
    }

    // idle or paused → show play icon
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
        <path fill="currentColor" d="M17 10 5.75 16.928V3.072z" />
      </svg>
    );
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center px-4 py-3 rounded-full bg-black text-white font-bold cursor-pointer select-none"
    >
      {renderIcon()}
      <span className="mx-2 whitespace-nowrap">
        {status === "loading" ? "LOADING..." : status === "playing" ? "PAUSE" : "PLAY"}
      </span>
    </div>
  );
}

// ==================== Dropdown Component ====================
interface DropdownProps {
  selected: string;
  setSelected: (value: string) => void;
}

export function Dropdown({ selected, setSelected }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const options = ["ENGLISH", "HINDI", "FRENCH", "SPANISH"];

  return (
    <div className="relative w-32">
      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className="border rounded-full pl-3 pr-6 py-3 font-bold cursor-pointer bg-white flex justify-between items-center border-gray-300 whitespace-nowrap"
      >
        {selected}
        <span className="ml-2">▼</span>
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="absolute mt-2 bg-white border rounded-2xl shadow-lg z-30 border-gray-300">
          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`px-6 rounded-2xl py-2 mx-1 my-1 cursor-pointer hover:bg-gray-100 whitespace-nowrap ${
                option === selected ? "bg-gray-200 font-bold" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
