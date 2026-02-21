export function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "годжи",
        alternateName: "Годжи",
        url: "https://goji.studio",
        logo: "https://goji.studio/logo.svg",
        description:
            "Студия веб-разработки и AI решений. Разрабатываем, поддерживаем и развиваем web и AI решения.",
        foundingDate: "2025",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+7-912-712-01-25",
            contactType: "sales",
            availableLanguage: "Russian",
        },
        sameAs: ["https://t.me/MaksIgitov"],
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "годжи",
        alternateName: "Годжи",
        url: "https://goji.studio",
        logo: "https://goji.studio/logo.svg",
        image: "https://goji.studio/logo.svg",
        telephone: "+7-912-712-01-25",
        address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Железнодорожная д. 1",
            addressLocality: "пгт. Мурыгино",
            addressRegion: "Кировская область",
            addressCountry: "RU",
        },
        priceRange: "$$",
        description:
            "ИП Игитов Максим Дмитриевич. Веб-разработка, нейросети, аналитика данных, дизайн, Telegram-разработка.",
        knowsAbout: [
            "Веб-разработка",
            "Нейросети",
            "AI",
            "Аналитика данных",
            "Дизайн",
            "Telegram-разработка",
        ],
    };

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "годжи",
        url: "https://goji.studio",
        inLanguage: "ru",
        description: "Студия веб-разработки и AI решений",
        publisher: {
            "@type": "Organization",
            name: "годжи",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webSiteSchema),
                }}
            />
        </>
    );
}
