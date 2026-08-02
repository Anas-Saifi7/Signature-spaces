import { Helmet } from "react-helmet-async";

export default function BusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",

          "@id": "https://signature-spaces.vercel.app/#business",
          name: "Signature Space Studio Interiors",

          url: "https://signature-spaces.vercel.app",

          logo: "https://signature-spaces.vercel.app/logo.png",

          image: "https://signature-spaces.vercel.app/og-image.jpg",

          telephone: "+91-7668014201",

          email: "signatureinteriors8@yahoo.com",

          priceRange: "₹₹₹",

          description:
            "Signature Space Studio Interiors is a premium interior design and custom furniture company with over 28 years of experience. We specialize in residential interiors, modular kitchens, office interiors, commercial interiors, hospital interiors, custom furniture manufacturing, and turnkey interior solutions across Delhi NCR and PAN India.",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Madanpur Khadar, Sarita Vihar",
            addressLocality: "New Delhi",
            postalCode: "110076",
            addressCountry: "IN",
          },

          areaServed: [
            {
              "@type": "City",
              name: "Delhi",
            },
            {
              "@type": "City",
              name: "Noida",
            },
            {
              "@type": "City",
              name: "Gurugram",
            },
            {
              "@type": "City",
              name: "Faridabad",
            },
            {
              "@type": "City",
              name: "Ghaziabad",
            },
            {
              "@type": "Country",
              name: "India",
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

          sameAs: [
            "https://www.instagram.com/ornexa.living",
            "https://www.facebook.com/signaturespacestudio",
          ],

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Interior Design & Furniture Services",

            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Home Interior Design",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Luxury Villa Interiors",
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
                  name: "Hospital Interiors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Restaurant & Cafe Interiors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Furniture Manufacturing",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Turnkey Interior Solutions",
                },
              },
            ],
          },
        })}
      </script>
    </Helmet>
  );
}






///////////////
// When you buy a .com domain later

// You only need to replace these four lines:

// "@id": "https://signature-spaces.vercel.app/#business",

// url: "https://signature-spaces.vercel.app",

// logo: "https://signature-spaces.vercel.app/logo.png",

// image: "https://signature-spaces.vercel.app/og-image.jpg",