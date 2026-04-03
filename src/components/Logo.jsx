export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      
      {/* Icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="text-black dark:text-white"
      >
        {/* Location Pin */}
        <path
          d="M12 22s7-5.686 7-12a7 7 0 1 0-14 0c0 6.314 7 12 7 12z"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Bed */}
        <rect
          x="7"
          y="10"
          width="10"
          height="3"
          rx="1"
          fill="currentColor"
        />
      </svg>

      {/* Text */}
      <span className="text-lg font-bold tracking-tight text-gray-800 dark:text-white">
        AlmaHotels
      </span>
    </div>
  );
}