import { Helmet } from "react-helmet-async";

export default function VideoSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Interior Design & Furniture Manufacturing Process",
          description:
            "Watch how Signature Space Studio Interiors transforms spaces with 28+ years of expertise in interior design and custom furniture.",
          thumbnailUrl:
            "https://signaturespacestudio.com/videos/workshop-poster.jpg",
          uploadDate: "2025-01-01",
          contentUrl:
            "https://signaturespacestudio.com/videos/furniture-workshop.mp4",
          publisher: {
            "@type": "Organization",
            name: "Signature Space Studio Interiors",
            logo: {
              "@type": "ImageObject",
              url: "https://signaturespacestudio.com/logo.png",
            },
          },
        })}
      </script>
    </Helmet>
  );
}
