import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Profesjonalne Sprzątanie Biur i Mieszkań | Ideal Service Poznań</title>
        <meta 
          name="description" 
          content="Ideal Service - profesjonalne usługi sprzątania biur, mieszkań i biurowców w Poznaniu. Bezpłatna wycena w 24h. Ekologiczne środki, doświadczony zespół. Zadzwoń!" 
        />
        <meta 
          name="keywords" 
          content="sprzątanie biur, sprzątanie mieszkań, sprzątanie biurowców, firma sprzątająca Poznań, usługi sprzątania, sprzątanie po remoncie, ideal service" 
        />
        <link rel="canonical" href="https://www.idealservice.pl" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Profesjonalne Sprzątanie Biur i Mieszkań | Ideal Service" />
        <meta property="og:description" content="Ideal Service - profesjonalne usługi sprzątania dla firm i osób prywatnych. Bezpłatna wycena w 24h." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ideal Service Usługi Sprzątające Sp. z o.o.",
            "description": "Profesjonalne usługi sprzątania biur, mieszkań i biurowców w Poznaniu",
            "url": "https://www.idealservice.pl",
            "telephone": "+48576322363",
            "email": "kontakt@idealservice.pl",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ul. A. Szamarzewskiego 21/2",
              "addressLocality": "Poznań",
              "postalCode": "60-514",
              "addressCountry": "PL"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 08:00-18:00",
            "sameAs": [],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 52.4064,
                "longitude": 16.9252
              },
              "geoRadius": "50000"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <WhyUsSection />
          <BenefitsSection />
          <ServicesSection />
          <ProcessSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
