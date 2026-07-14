type SupportIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className }: SupportIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35m-5.42 7.41h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.9 9.9 0 0 1 12.06 2a9.82 9.82 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.9 6.99 9.9 9.9 0 0 1-9.9 9.89M20.46 3.49A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.15 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45C18.61 23.8 23.95 18.46 23.95 11.9a11.82 11.82 0 0 0-3.49-8.41" />
    </svg>
  );
}

export function AiSupportIcon({ className }: SupportIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 64 64"
    >
      <circle cx="32" cy="32" r="29" fill="#07111F" />
      <circle cx="32" cy="32" r="27" stroke="#60A5FA" strokeOpacity=".5" />
      <path d="M32 13V9" stroke="#FDE68A" strokeLinecap="round" strokeWidth="2" />
      <circle cx="32" cy="7.5" r="2.5" fill="#FBBF24" />
      <rect x="18" y="16" width="28" height="29" rx="9" fill="#E5F3FF" stroke="#93C5FD" strokeWidth="2" />
      <path d="M23 20h18" stroke="white" strokeLinecap="round" strokeOpacity=".8" strokeWidth="2" />
      <circle cx="27" cy="29" r="3" fill="#2563EB" />
      <circle cx="37" cy="29" r="3" fill="#2563EB" />
      <circle cx="27" cy="28" r="1" fill="#DBEAFE" />
      <circle cx="37" cy="28" r="1" fill="#DBEAFE" />
      <path d="M27 36.5c3 2.5 7 2.5 10 0" stroke="#1D4ED8" strokeLinecap="round" strokeWidth="2" />
      <path d="M15 31a17 17 0 0 1 34 0" stroke="#FDE68A" strokeLinecap="round" strokeWidth="3.5" />
      <rect x="12.5" y="29" width="7" height="13" rx="3.5" fill="#2563EB" stroke="#93C5FD" strokeWidth="1.5" />
      <rect x="44.5" y="29" width="7" height="13" rx="3.5" fill="#2563EB" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="M48 41c0 5-3.5 7-8.5 7" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
      <circle cx="37" cy="48" r="2.5" fill="#FDE68A" />
      <path d="M17 59c2-8 7-12 15-12s13 4 15 12" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1.5" />
      <path d="M27 48l5 6 5-6" stroke="#FDE68A" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
