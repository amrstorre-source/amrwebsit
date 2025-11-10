import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-primary text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          لا تدع أي عميل ينتظر على الخط مجدداً.
          <br />
          <span className="text-secondary">حوّل كل استفسار إلى فرصة نجاح.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          سواء كنت تدير عيادة، متجر إلكتروني، شركة سياحة، أو أي نشاط تجاري آخر، مساعدنا الذكي يعمل 24/7 للرد على استفسارات عملائك، حجز المواعيد، إتمام الطلبات، وحل المشاكل فوراً. تفرّغ لتنمية عملك ودع الأتمتة تضاعف أرباحك.
        </p>
        <a
          href="#contact"
          className="bg-secondary text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-block animate-pulse"
        >
          أنشئ مساعدك الذكي الآن
        </a>
      </div>
    </section>
  );
};

export default Hero;
