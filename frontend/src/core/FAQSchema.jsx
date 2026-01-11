import { Helmet } from "react-helmet-async";

export default function FAQSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much experience does Signature Space Studio Interiors have?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Signature Space Studio Interiors has over 28 years of experience in interior design and custom furniture manufacturing across India.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide PAN India interior design services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide complete PAN India interior design services for residential, office, hospital, retail, and commercial projects.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer custom furniture manufacturing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer in-house custom furniture manufacturing with premium materials and finishes.",
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
}
