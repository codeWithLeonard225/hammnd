import "./globals.css";

export const metadata = {
  title: "Hammond International Preparatory & Academy – Quality Education in Sierra Leone",
  description:
    "Hammond International Preparatory & Academy offers high-quality education, strong moral values, and modern digital learning for pupils in Sierra Leone. Enroll today for academic excellence.",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },

  keywords: [
    "Hammond International Academy",
    "Hammond Preparatory School",
    "School in Sierra Leone",
    "Private Schools in Sierra Leone",
    "Best Schools in Freetown",
    "Primary School Sierra Leone",
    "Secondary School Sierra Leone",
    "Education Sierra Leone",
    "International Schools Sierra Leone",
    "School Portal Sierra Leone",
    "Hammond Learning",
    "Hammond",
  ],

  authors: [{ name: "Hammond International Preparatory & Academy" }],
  creator: "Hammond International Preparatory & Academy",
  publisher: "Hammond International Preparatory & Academy",

  metadataBase: new URL("https://www.hammondinternationalacademy.sl"),
  applicationName: "Hammond International School Portal",
  classification: "Educational Institution",

  robots: { index: true, follow: true },
  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical: "https://www.hammondinternationalacademy.sl",
  },

  openGraph: {
    title: "Hammond International Preparatory & Academy – Excellence in Education",
    description:
      "A leading school in Sierra Leone providing quality education with modern facilities, experienced teachers, and digital learning systems.",
    url: "https://www.hammondinternationalacademy.sl",
    siteName: "Hammond International Preparatory & Academy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hammond.jpg", // 🔁 replace with your actual school image
        width: 1200,
        height: 630,
        alt: "Hammond International Preparatory & Academy Campus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hammond International Preparatory & Academy – Sierra Leone",
    description:
      "Providing quality education, discipline, and digital learning for pupils in Sierra Leone.",
    images: ["/images/hammond.jpg"], // 🔁 replace image
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1a3a", // 🔵 modern dark blue
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0a1a3a" />
        <meta name="color-scheme" content="light" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}