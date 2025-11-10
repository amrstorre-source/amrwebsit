import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-right p-4 focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-primary">{question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-4 bg-gray-50 text-light-text space-y-3">
          {answer}
        </div>
      </div>
    </div>
  );
};

const ObjectionsFaq: React.FC = () => {
    const faqs = [
        {
            question: 'اعتراض 1: "النظام غالي جداً"',
            answer: (
                <>
                    <p>أفهم قلقك من السعر، لكن السؤال الصحيح هو: "هل سيحقق النظام أرباحاً أكثر من تكلفته؟"</p>
                    <p>مثال واقعي لمشروع تجاري: <br/> - يوفر تكلفة موظف (48,000 جنيه/سنة) <br/> - يسترجع عملاء ضائعين (70,000 جنيه/سنة) <br/> - يزيد المبيعات/الحجوزات بنسبة 20% (150,000 جنيه/سنة)</p>
                    <p className="font-bold">إجمالي الفوائد السنوية: 268,000 جنيه. عائد استثمار يتجاوز 250% في السنة الأولى!</p>
                    <p>هل يمكنك تحمل خسارة هذا المبلغ كل سنة؟</p>
                </>
            )
        },
        {
            question: 'اعتراض 2: "عندي نظام قديم شغال، لماذا أغيره؟"',
            answer: (
                 <>
                    <p>الأنظمة القديمة أو الطرق اليدوية "الشغالة" غالباً تكلفك الكثير بدون أن تشعر:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>وقت ضائع</strong> في مهام متكررة.</li>
                        <li><strong>خسارة في الإيرادات</strong> بسبب بطء الخدمة أو ضياع العملاء.</li>
                        <li><strong>تكاليف خفية</strong> مثل رسوم الاشتراك أو الصيانة.</li>
                    </ul>
                     <p className="font-bold">مع نظام Selfigo: تدفع مرة واحدة، تمتلكه للأبد، وتزيد إيراداتك بنسبة 25%.</p>
                </>
            )
        },
        {
            question: 'اعتراض 3: "أخشى أن يكون النظام معقداً والموظفون لا يجيدون استخدامه"',
            answer: (
                <>
                    <p>نظامنا بسيط مثل واتساب! أي شخص يستخدم موبايل يمكنه استخدامه. نحن نضمن سهولة الاستخدام من خلال:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>تصميم بديهي</strong> وعربي بالكامل.</li>
                        <li><strong>تدريب شامل مجاني</strong> لكل فريقك في موقعك.</li>
                        <li><strong>أدلة مصورة</strong> وفيديوهات شرح قصيرة.</li>
                        <li><strong>فترة تجريبية</strong> ومتابعة يومية في أول أسبوع.</li>
                    </ul>
                </>
            )
        },
        {
            question: 'اعتراض 4: "أريد أن أفكر وأراجع العروض الأخرى"',
            answer: (
                <>
                    <p>بالطبع، هذا قرار مهم. لمساعدتك، اسأل أي مزود خدمة هذه الأسئلة:</p>
                    <ul className="list-disc list-inside space-y-2 font-semibold">
                        <li>هل سأمتلك النظام أم سأظل أدفع اشتراكات؟</li>
                        <li>هل الحل مخصص 100% لاحتياجاتي؟</li>
                        <li>هل هناك ضمان لاسترداد الأموال إذا لم أر نتائج؟</li>
                        <li>هل الدعم الفني فوري وباللغة العربية؟</li>
                    </ul>
                    <p className="font-bold text-primary mt-2">Selfigo يقدم كل هذا وأكثر. كل أسبوع تأجيل هو خسارة في إيرادات محتملة.</p>
                </>
            )
        }
    ];

  return (
    <section id="faq" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">الاعتراضات الشائعة (والرد عليها)</h2>
          <p className="text-lg text-light-text mt-2">نتفهم مخاوفك ونجيب عليها بشفافية كاملة.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
            {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsFaq;
