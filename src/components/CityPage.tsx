import React from 'react';
import Link from 'next/link';
import { Phone, Clock, MapPin, Car, Bike, Wrench, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface CityPageProps {
  cityName: string;
  cityNameHebrew: string;
  neighborhoods: string[];
  landmarks: string[];
  description: string;
  pageUrl: string;
}

const CityPage: React.FC<CityPageProps> = ({
  cityName,
  cityNameHebrew,
  neighborhoods,
  landmarks,
  description,
  pageUrl
}) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" dir="rtl">
      {/* SEO Schema Markup for City */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `גרירה מהירה - ${cityNameHebrew}`,
            "description": `שירותי גרירה מקצועיים ב${cityNameHebrew}. זמינים 24/7 עם זמני הגעה מהירים.`,
            "url": pageUrl,
            "telephone": "+972-50-123-4567",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cityNameHebrew,
              "@addressRegion": "מחוז המרכז",
              "addressCountry": "IL"
            },
            "areaServed": {
              "@type": "City",
              "name": cityNameHebrew
            },
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
          })
        }}
      />

      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-reverse space-x-3">
            <Car className="h-8 w-8" />
            <h1 className="text-2xl font-bold">גרירה {cityNameHebrew} - זמינים 24/7</h1>
          </div>
          <div className="flex items-center space-x-reverse space-x-4">
            <Phone className="h-5 w-5" />
            <span className="text-xl font-bold">050-123-4567</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">גרירה ב{cityNameHebrew} | שירות מקצועי 24 שעות</h2>
          <p className="text-xl mb-8">{description}</p>
          <div className="flex justify-center space-x-reverse space-x-4 mb-8">
            <div className="flex items-center space-x-reverse space-x-2">
              <Clock className="h-6 w-6" />
              <span>זמינים 24/7</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-2">
              <MapPin className="h-6 w-6" />
              <span>{cityNameHebrew}</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-2">
              <Phone className="h-6 w-6" />
              <span>הגעה תוך 15-30 דקות</span>
            </div>
          </div>
          <Link 
  href="/" 
  className="inline-flex items-center space-x-reverse space-x-2 text-blue-600 hover:text-blue-800 text-lg font-medium"
>
            התקשר עכשיו לגרירה ב{cityNameHebrew}: 050-123-4567
            </Link>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">שירותי גרירה ב{cityNameHebrew}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Car className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">גרירת מכוניות ב{cityNameHebrew}</h3>
              <p className="text-gray-600 leading-relaxed">
                שירותי גרירה מקצועיים לכל סוגי הרכבים ב{cityNameHebrew} • גרירה בטוחה ומהירה • 
                ציוד מתקדם ומנוסה • זמני הגעה מהירים בכל רחבי {cityNameHebrew}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Bike className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">גרירת אופנועים ב{cityNameHebrew}</h3>
              <p className="text-gray-600 leading-relaxed">
                שירותי גרירה מיוחדים לאופנועים וקטנועים ב{cityNameHebrew} • טיפול זהיר ומקצועי • 
                ציוד מותאם לאופנועים • שירות זמין 24 שעות ביממה
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">שירותי דרך ב{cityNameHebrew}</h3>
              <p className="text-gray-600 leading-relaxed">
                החלפת גלגלים • הנעת רכב • טעינת מצבר • פתיחת רכבים נעולים • 
                דלק חירום בדרך • שירות זמין בכל רחבי {cityNameHebrew}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Coverage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">אזורי שירות ב{cityNameHebrew}</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">שכונות ואזורים ב{cityNameHebrew}:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="flex items-center space-x-reverse space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-blue-600">נקודות ציון מוכרות ב{cityNameHebrew}:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-reverse space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in City */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">למה לבחור בנו לגרירה ב{cityNameHebrew}?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">זמינות 24/7</h3>
              <p className="text-gray-600">בכל שעה ב{cityNameHebrew}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">מכירים את העיר</h3>
              <p className="text-gray-600">נסיעות מהירות ב{cityNameHebrew}</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">שירות מעולה</h3>
              <p className="text-gray-600">לקוחות מרוצים ב{cityNameHebrew}</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">הגעה מהירה</h3>
              <p className="text-gray-600">15-30 דקות ב{cityNameHebrew}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">צריך גרירה ב{cityNameHebrew} עכשיו?</h2>
          <p className="text-xl mb-8">אנחנו מגיעים לכל נקודה ב{cityNameHebrew} תוך 15-30 דקות!</p>
          <div className="flex justify-center space-x-reverse space-x-4">
            <a 
              href="tel:0501234567" 
              className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
            >
              גרירה חירום ב{cityNameHebrew}: 050-123-4567
            </a>
            <a 
              href="https://wa.me/972501234567" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Back to Main Site */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="/" 
            className="inline-flex items-center space-x-reverse space-x-2 text-blue-600 hover:text-blue-800 text-lg font-medium"
          >
            <ArrowRight className="h-5 w-5" />
            <span>חזרה לעמוד הראשי - שירותי גרירה באזור המרכז</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">גרירה מהירה - {cityNameHebrew}</h3>
              <p className="text-gray-300 leading-relaxed">
                שירותי גרירה מקצועיים ואמינים ב{cityNameHebrew}. 
                זמינים 24/7 עם זמני הגעה מהירים בכל רחבי העיר.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">שירותים ב{cityNameHebrew}</h3>
              <ul className="space-y-2 text-gray-300">
                <li>גרירת מכוניות ב{cityNameHebrew}</li>
                <li>גרירת אופנועים ב{cityNameHebrew}</li>
                <li>החלפת גלגלים ב{cityNameHebrew}</li>
                <li>הנעת רכב ב{cityNameHebrew}</li>
                <li>שירותי דרך ב{cityNameHebrew}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">יצירת קשר</h3>
              <div className="space-y-2 text-gray-300">
                <p>טלפון: 050-123-4567</p>
                <p>זמינות: 24 שעות ביממה</p>
                <p>אזור שירות: {cityNameHebrew} וסביבותיה</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 גרירה מהירה - {cityNameHebrew}. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CityPage;