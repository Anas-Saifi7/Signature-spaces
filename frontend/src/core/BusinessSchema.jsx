import { Helmet } from "react-helmet-async";

export default function BusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://signaturespacestudio.com/#business",
          name: "Signature Space Studio Interiors",
          url: "https://signaturespacestudio.com",
          logo: "https://signaturespacestudio.com/logo.png",
          image: "https://signaturespacestudio.com/og-image.jpg",

          telephone: "+91-9643715746",
          priceRange: "₹₹₹",

          description:
            "Signature Space Studio Interiors is a premium interior design and custom furniture company based in Sarita Vihar, New Delhi. With over 28 years of experience, we specialize in residential interiors, modular kitchens, office and commercial interiors, and custom furniture manufacturing. Visits by appointment only.",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Madanpur Khadar, Sarita Vihar",
            addressLocality: "New Delhi",
            postalCode: "110076",
            addressCountry: "IN",
          },

          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Delhi",
            },
            {
              "@type": "AdministrativeArea",
              name: "Noida",
            },
            {
              "@type": "AdministrativeArea",
              name: "Gurgaon",
            },
            {
              "@type": "AdministrativeArea",
              name: "Faridabad",
            },
            {
              "@type": "AdministrativeArea",
              name: "Ghaziabad",
            },
          ],

          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "10:00",
              closes: "19:00",
            },
          ],

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Interior Design & Furniture Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Residential Interior Design",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Modular Kitchen Design",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Office & Commercial Interiors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Furniture Manufacturing",
                },
              },
            ],
          },
        })}
      </script>
    </Helmet>
  );
}
