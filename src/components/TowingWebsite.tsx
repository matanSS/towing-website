import React from 'react';
import { Phone, Clock, MapPin, Car, Bike, Wrench, Star, CheckCircle } from 'lucide-react';

const TowingWebsite = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-reverse space-x-3">
            <Car className="h-8 w-8" />
            <h1 className="text-2xl font-bold">גרירה מהירה - אזור המרכז</h1>
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
          <h2 className="text-5xl font-bold mb-6">שירותי גרירה מקצועיים 24/7</h2>
          <p className="text-xl mb-8">גרירת מכוניות ואופנועים באזור המרכז • זמינים 24 שעות ביממה</p>
          <div className="flex justify-center space-x-reverse space-x-4 mb-8">
            <div className="flex items-center space-x-reverse space-x-2">
              <Clock className="h-6 w-6" />
              <span>24/7</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-2">
              <MapPin className="h-6 w-6" />
              <span>אזור המרכז</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-2">
              <Phone className="h-6 w-6" />
              <span>מענה מיידי</span>
            </div>
          </div>
          <a 
            href="tel:0501234567" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors inline-block"
          >
            התקשר עכשיו: 050-123-4567
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">השירותים שלנו</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Car className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">גרירת מכוניות</h3>
              <p className="text-gray-600 leading-relaxed">
                שירותי גרירה מקצועיים לכל סוגי הרכבים • גרירה בטוחה ומהירה • 
                ציוד מתקדם ומנוסה של עשרות שנים
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Bike className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">גרירת אופנועים</h3>
              <p className="text-gray-600 leading-relaxed">
                שירותי גרירה מיוחדים לאופנועים וקטנועים • טיפול זהיר ומקצועי • 
                ציוד מותאם לאופנועים
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">שירותי דרך</h3>
              <p className="text-gray-600 leading-relaxed">
                החלפת גלגלים • הנעת רכב • טעינת מצבר • פתיחת רכבים נעולים • 
                דלק חירום בדרך
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">למה לבחור בנו?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">זמינות 24/7</h3>
              <p className="text-gray-600">בכל שעה ובכל יום בשנה</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">מקצועיות</h3>
              <p className="text-gray-600">צוות מנוסה ומקצועי</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">שירות מעולה</h3>
              <p className="text-gray-600">דירוג גבוה ומשוב חיובי</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">כיסוי מלא</h3>
              <p className="text-gray-600">כל אזור המרכז</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">אזורי השירות שלנו</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">מרכז הארץ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• תל אביב-יפו</li>
                  <li>• פתח תקווה</li>
                  <li>• רמת גן</li>
                  <li>• בני ברק</li>
                  <li>• הרצליה</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">השרון</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• רעננה</li>
                  <li>• כפר סבא</li>
                  <li>• הוד השרון</li>
                  <li>• רמת השרון</li>
                  <li>• נתניה</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">גוש דן</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• חולון</li>
                  <li>• בת ים</li>
                  <li>• ראשון לציון</li>
                  <li>• אזור</li>
                  <li>• רחובות</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">צריך גרירה עכשיו?</h2>
          <p className="text-xl mb-8">אנחנו כאן בשבילך 24 שעות ביממה, 7 ימים בשבוע</p>
          <div className="flex justify-center space-x-reverse space-x-4">
            <a 
              href="tel:0501234567" 
              className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
            >
              חירום: 050-123-4567
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

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">יצירת קשר</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">פרטי התקשרות</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-reverse space-x-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">050-123-4567</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">24 שעות ביממה, 7 ימים בשבוע</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">שירות בכל אזור המרכז</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">זמני תגובה</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg text-blue-600">שעות רגילות (6:00-22:00)</h4>
                  <p className="text-gray-700">זמן הגעה: 15-30 דקות</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-blue-600">שעות לילה (22:00-6:00)</h4>
                  <p className="text-gray-700">זמן הגעה: 20-40 דקות</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-blue-600">מקרי חירום</h4>
                  <p className="text-gray-700">מענה מיידי - הגעה מהירה ביותר</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">גרירה מהירה - אזור המרכז</h3>
              <p className="text-gray-300 leading-relaxed">
                שירותי גרירה מקצועיים ואמינים לכל סוגי הרכבים באזור המרכז. 
                זמינים 24/7 עם זמני הגעה מהירים.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">שירותים</h3>
              <ul className="space-y-2 text-gray-300">
                <li>גרירת מכוניות</li>
                <li>גרירת אופנועים</li>
                <li>החלפת גלגלים</li>
                <li>הנעת רכב</li>
                <li>טעינת מצבר</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">מילות מפתח לחיפוש</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                גרירה תל אביב, גרירה פתח תקווה, גרירת אופנועים, גרירה 24 שעות, 
                שירותי דרך, גרירה מהירה, גרירה זולה, גרירה אזור המרכז
              </p>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 גרירה מהירה - אזור המרכז. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TowingWebsite;