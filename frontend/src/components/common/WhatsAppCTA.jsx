export default function WhatsAppCTA({ city = "" }) {
  const message = encodeURIComponent(
    `Hi, I am interested in interior design services${
      city ? " in " + city : ""
    }. Please share details.`
  );

  return (
    <a
      href={`https://wa.me/919643715746?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* SOFT PULSE */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></span>

      {/* CIRCLE BUTTON */}
      <div className="relative h-14 w-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:bg-green-600 transition">
        {/* WHATSAPP SVG LOGO */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16.003 3C9.373 3 4 8.372 4 15.003c0 2.64.87 5.08 2.34 7.04L4 29l7.18-2.28a12 12 0 0 0 4.823 1.01c6.63 0 12-5.372 12-12.003C28 8.372 22.63 3 16.003 3zm0 21.82a9.8 9.8 0 0 1-4.2-.94l-.3-.14-4.26 1.36 1.4-4.14-.16-.32a9.8 9.8 0 1 1 7.52 3.18zm5.4-7.38c-.3-.14-1.76-.86-2.04-.96-.28-.1-.48-.14-.68.14-.2.28-.78.96-.96 1.16-.18.2-.36.22-.66.08-.3-.14-1.28-.46-2.44-1.48-.9-.8-1.52-1.78-1.7-2.08-.18-.3-.02-.46.12-.6.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.06-.34-.02-.48-.08-.14-.68-1.64-.94-2.24-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.48.06-.74.34-.26.28-.98.96-.98 2.34 0 1.38 1.02 2.72 1.16 2.9.14.18 2 3.06 4.86 4.28.68.3 1.2.48 1.6.62.68.22 1.3.18 1.78.1.54-.08 1.76-.72 2.02-1.42.26-.7.26-1.3.18-1.42-.08-.12-.28-.18-.58-.32z" />
        </svg>
      </div>
    </a>
  );
}
