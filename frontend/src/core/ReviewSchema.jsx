import { Helmet } from "react-helmet-async";

export default function ReviewSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Signature Space Studio Interiors",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "350",
          },
        })}
      </script>
    </Helmet>
  );
}
