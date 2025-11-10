
import React from 'react';

const Cta: React.FC = () => {
  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          جاهز لتبدأ رحلة النمو؟
        </h2>
        <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-8">
          دعنا نريك كيف يمكن لنظام Selfigo أن يغير طريقة عملك ويزيد من أرباحك. احجز مكالمة استشارية مجانية مدتها 15 دقيقة اليوم!
        </p>
        <a
          href="mailto:amir@selfigo.com"
          className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          احجز استشارتك المجانية الآن
        </a>
      </div>
    </section>
  );
};

export default Cta;
