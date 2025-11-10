import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/20 text-secondary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-light-text">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const useCases = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg>,
      title: 'خدمة عملاء 24/7',
      description: 'رد فوري وتلقائي على الأسئلة الشائعة حول منتجاتك، خدماتك، مواعيد العمل، أو سياسات الشحن والارجاع.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      title: 'إدارة الحجوزات والمواعيد',
      description: 'أتمتة كاملة لعملية حجز المواعيد في عيادتك، رحلاتك السياحية، أو حجوزات الخدمات، مع إرسال تأكيدات وتذكيرات آلية.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" /></svg>,
      title: 'أتمتة المبيعات والطلبات',
      description: 'استقبال طلبات الشراء عبر الهاتف، تأكيد توفر المنتجات، ومعالجة عمليات الدفع الأولية بدون أي تدخل بشري.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
      title: 'مساعد صوتي ذكي (AI Voice)',
      description: 'تكنولوجيا صوتية متقدمة تفهم لهجة عملائك وتتفاعل معهم بشكل طبيعي لتقديم تجربة فريدة وشخصية.',
    }
  ];

  const differentiators = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4M17 3v4m2-2h-4M18 17v4m2-2h-4M12 5v14m-4-7h8" /></svg>,
      title: 'حلول مخصصة 100%',
      description: 'نحن لا نستخدم قوالب جاهزة. كل نظام نصممه خصيصاً ليتناسب مع احتياجات عملك الفريدة.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1.258a1 1 0 01-1.258-1.258l2.25-10.002a1 1 0 01.999-.742h1.596a1 1 0 01.999.742l2.25 10.002a1 1 0 01-1.258 1.258h-1.596" /></svg>,
      title: 'الملكية الكاملة للنظام',
      description: 'تدفع مرة واحدة وتمتلك النظام للأبد، بدون رسوم اشتراك شهرية أو سنوية لا نهائية.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      title: 'نتائج قابلة للقياس',
      description: 'نضمن لك رؤية نتائج ملموسة وتحسن في عملياتك خلال 30 يوماً فقط.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">حلول ذكية لكل جوانب عملك</h2>
          <p className="text-lg text-light-text mt-2">حوّل التحديات اليومية إلى فرص للنمو مع مساعدنا الذكي المتكامل.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {useCases.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">ما يميزنا عن غيرنا؟</h2>
           <p className="text-lg text-light-text mt-2">شراكة استراتيجية تضمن لك النجاح والنمو.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
