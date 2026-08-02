import { Helmet } from "react-helmet-async";

export default function ReviewSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Signature Space Studio Interiors",
          url: "https://signature-spaces.vercel.app",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "57",
          },
        })}
      </script>
    </Helmet>
  );
}