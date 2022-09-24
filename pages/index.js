import Head from "next/head";
import Script from "next/script";
import App from "../app/App";
import styles from "../styles/home.module.css";

export default function Home({ images }) {
  console.log("props", images);

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Boost business productivity with mini-massage breaks on office premises." />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="preload" as="image" href="/images/heroCompressed.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigi />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600;700&family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        <title>rolf.fit: An Employee Wellness Company | Introducing massage therapy</title>
        <meta content="rolf.fit: An Employee Wellness Company | Introducing massage therapy" property="og:title" />
        <meta content="Boost business productivity with mini-massage breaks on office premises." property="og:description" />
        <meta property="og:url" content="https://www.rolf.fit/" />

        <meta property="og:image" content="%PUBLIC_URL%/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="Cache-control" content="no-cache, no-store, must-revalidate" />
        <link rel="icon" type="image/x-icon" href="https://www.rolf.fit/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "rolf.fit",
                  url: "https://www.rolf.fit",
                  address: "",
                  email: "collaboration@rolf.fit",
                  sameAs: [],
                },
                {
                  "@id": "www.rolf.fit",
                  "@type": "LocalBusiness",
                  address: { "@type": "PostalAddress", addressCountry: "India", addressLocality: "HSR Layout", addressRegion: "Bangalore", postalCode: "560035", streetAddress: "2nd Sector HSR Layout" },
                  alternateName: "rolf.fit",
                  description: "Boost business productivity with mini-massage breaks on office premises",
                  duns: "11485543",
                  email: "collaboration@rolf.fit",
                  founder: "Manjunath K & Gaurav Verma",
                  foundingDate: "2022",
                  foundingLocation: "Bangalore",
                  name: "rolf.fit",
                  openingHoursSpecification: [
                    { "@type": "OpeningHoursSpecification", closes: "20:30:00", dayOfWeek: ["Monday"], opens: "12:00:00" },
                    { "@type": "OpeningHoursSpecification", closes: "20:30:00", dayOfWeek: ["Tuesday"], opens: "12:00:00" },
                    { "@type": "OpeningHoursSpecification", closes: "20:30:00", dayOfWeek: ["Wednesday"], opens: "12:00:00" },
                    { "@type": "OpeningHoursSpecification", closes: "20:30:00", dayOfWeek: ["Thursday"], opens: "12:00:00" },
                    { "@type": "OpeningHoursSpecification", closes: "20:30:00", dayOfWeek: ["Friday"], opens: "12:00:00" },
                  ],
                  priceRange: "$",
                  url: "https://rolf.fit",
                },
              ],
            }),
          }}
        />
      </Head>
      <App images={images} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://api.rolf.fit/rolffit/business-partner/web/logo/");
  const jsonResponse = await response.json();
  return {
    props: { images: jsonResponse?.logos },
  };
}
