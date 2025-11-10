import React, { useState } from 'react';

type Persona = 'storesServices' | 'ecommerce' | 'tourism' | 'companies';

const Personas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Persona>('storesServices');

  const personaData = {
    storesServices: {
      title: 'أصحاب المتاجر والخدمات (محلات، عيادات،... الخ)',
      challenges: [
        'ضياع مكالمات العملاء أثناء الانشغال.',
        'صعوبة حجز المواعيد وتنظيمها يدوياً.',
        'عدم القدرة على الرد على الاستفسارات خارج أوقات العمل.',
      ],
      solution: {
        title: 'مساعدك الشخصي الذي لا ينام',
        points: [
          'رد فوري على جميع المكالمات 24/7.',
          'حجز وتأكيد المواعيد تلقائياً في جدولك.',
          'تزويد العملاء بمعلومات أساسية (أسعار، موقع، مواعيد).',
        ],
      },
      investment: 'يبدأ من 30,000 جنيه (دفعة واحدة)',
      results: 'لا مكالمات فائتة بعد اليوم | زيادة الحجوزات 30% | توفير وقت ثمين',
    },
    ecommerce: {
      title: 'أصحاب المتاجر الإلكترونية',
      challenges: [
        'أسئلة متكررة حول حالة الطلب والشحن.',
        'الحاجة إلى دعم فني فوري للعملاء.',
        'صعوبة متابعة العملاء المحتملين وتحويلهم لمشترين.',
      ],
      solution: {
        title: 'موظف مبيعات وخدمة عملاء آلي',
        points: [
          'إجابة تلقائية على استفسارات تتبع الشحنات.',
          'مساعدة العملاء في إتمام عمليات الشراء.',
          'إرسال عروض مخصصة بناءً على اهتمامات العميل.',
        ],
      },
      investment: 'يعتمد على حجم المتجر (استشارة مجانية لتقييم دقيق)',
      results: 'تقليل استفسارات خدمة العملاء 70% | زيادة المبيعات 25%',
    },
    tourism: {
      title: 'شركات السياحة ومنظمو الرحلات',
      challenges: [
        'ضغط الاستفسارات حول تفاصيل الرحلات والباقات.',
        'تنسيق الحجوزات مع الفنادق وشركات الطيران.',
        'الحاجة للتواصل مع العملاء قبل وأثناء وبعد الرحلة.',
      ],
      solution: {
        title: 'مرشد سياحي ومنظم حجوزات ذكي',
        points: [
          'شرح تفصيلي للباقات والرد على كل الأسئلة.',
          'إتمام الحجوزات وإرسال التأكيدات الفورية.',
          'إرسال تذكيرات ومتابعة مع العملاء آلياً.',
        ],
      },
      investment: 'يبدأ من 50,000 جنيه (حسب حجم العمليات)',
      results: 'زيادة سرعة الحجز 80% | توفير 60 ساعة عمل شهرياً',
    },
    companies: {
      title: 'الشركات والمؤسسات',
      challenges: [
        'تحويل المكالمات يدوياً بين الأقسام.',
        'أسئلة متكررة من الموظفين للموارد البشرية.',
        'تأهيل العملاء المحتملين (Leads) قبل الوصول لفريق المبيعات.',
      ],
      solution: {
        title: 'نظام هاتف وسنترال ذكي',
        points: [
          'توجيه المكالمات تلقائياً للقسم المختص.',
          'مساعد داخلي للموظفين (Internal Helpdesk).',
          'تصنيف العملاء المحتملين وتحديد الأولويات.',
        ],
      },
      investment: 'حلول مخصصة (استشارة مجانية)',
      results: 'تحسين كفاءة التواصل الداخلي | زيادة جودة العملاء المحتملين 40%',
    },
  };

  const currentData = personaData[activeTab];

  const renderTabs = () => (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      <button
        onClick={() => setActiveTab('storesServices')}
        className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeTab === 'storesServices' ? 'bg-primary text-white scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        متاجر وخدمات
      </button>
      <button
        onClick={() => setActiveTab('ecommerce')}
        className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeTab === 'ecommerce' ? 'bg-primary text-white scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        تجارة إلكترونية
      </button>
      <button
        onClick={() => setActiveTab('tourism')}
        className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeTab === 'tourism' ? 'bg-primary text-white scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        سياحة ورحلات
      </button>
      <button
        onClick={() => setActiveTab('companies')}
        className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeTab === 'companies' ? 'bg-primary text-white scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        شركات ومؤسسات
      </button>
    </div>
  );

  return (
    <section id="personas" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">حلول مصممة خصيصاً لمجالك</h2>
          <p className="text-lg text-light-text mt-2">مهما كان مجالك، نحن نفهم تحدياتك ونقدم لك الحل الأمثل.</p>
        </div>
        {renderTabs()}
        <div className="bg-light-bg p-8 rounded-xl shadow-lg max-w-4xl mx-auto transition-opacity duration-500">
            <h3 className="text-2xl font-bold text-primary text-center mb-6">{currentData.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">التحديات الرئيسية:</h4>
                    <ul className="list-disc list-inside space-y-2 text-dark-text">
                        {currentData.challenges.map((challenge, index) => <li key={index}>{challenge}</li>)}
                    </ul>
                </div>
                 <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-2">الحل المثالي من Selfigo:</h4>
                    <ul className="list-disc list-inside space-y-2 text-dark-text">
                        {currentData.solution.points.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-300 text-center">
                <p className="text-md text-light-text mb-2"><strong className="font-bold text-primary">الاستثمار:</strong> {currentData.investment}</p>
                <p className="text-md text-light-text"><strong className="font-bold text-primary">النتائج المتوقعة:</strong> {currentData.results}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Personas;
