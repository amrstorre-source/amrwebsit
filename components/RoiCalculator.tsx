import React from 'react';

const RoiCalculator: React.FC = () => {
  return (
    <section id="roi" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">لا تنظر إليها كتكلفة، بل كاستثمار</h2>
          <p className="text-lg text-gray-300 mt-2">السؤال الصحيح: "كم سأوفر وكم سأربح؟" - حساب بسيط لنشاط تجاري متوسط.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-red-500/20 p-6 rounded-lg border border-red-400">
            <h3 className="text-2xl font-bold mb-4 text-center">الوضع الحالي (بدون أتمتة)</h3>
            <ul className="space-y-3">
              <li><span className="font-bold">موظف خدمة عملاء:</span> 48,000 جنيه/سنة</li>
              <li><span className="font-bold">عملاء ضائعون (انشغال/خارج الدوام):</span> خسارة 70,000 جنيه/سنة</li>
              <li><span className="font-bold">وقت إداري ضائع (أسئلة متكررة):</span> 50,000 جنيه/سنة</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-red-400 text-center">
              <p className="text-lg">إجمالي الخسائر والتكاليف السنوية:</p>
              <p className="text-3xl font-extrabold text-red-300">168,000 جنيه</p>
            </div>
          </div>
          <div className="bg-green-500/20 p-6 rounded-lg border border-green-400">
            <h3 className="text-2xl font-bold mb-4 text-center">بعد نظام Selfigo</h3>
            <ul className="space-y-3">
              <li><span className="font-bold">تكلفة النظام (مرة واحدة):</span> 60,000 جنيه (مثال)</li>
              <li><span className="font-bold">زيادة المبيعات/الحجوزات (20%):</span> +150,000 جنيه/سنة</li>
              <li><span className="font-bold">توفير صافي في السنة الأولى:</span> 108,000 جنيه</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-green-400 text-center">
              <p className="text-lg">ROI الحقيقي في السنة الأولى:</p>
              <p className="text-3xl font-extrabold text-green-300">250%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
