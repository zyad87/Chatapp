/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0d9488', // لون تركوازي هادئ (للعناصر الرئيسية)
          secondary: '#f97316', // لون برتقالي دافئ (للعناصر الثانوية مثل الأزرار الثانوية)
          accent: '#14b8a6', // لون أخضر فاتح (للعناصر التفاعلية)
          neutral: '#1e293b', // لون رمادي غامق (للعناصر الخلفية)
          'base-100': '#f1f5f9', // لون فاتح جداً (للخلفية الأساسية)
          info: '#38bdf8', // لون أزرق فاتح (للتنبيهات والمعلومات)
          success: '#22c55e', // لون أخضر (لإشعارات النجاح)
          warning: '#f59e0b', // لون أصفر (للتنبيهات)
          error: '#ef4444', // لون أحمر (للتنبيهات والأخطاء)
        },
      },
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'whatsapp-bg': "url('/src/assets/whatappBg.png')",
        'iphone-bg': "url('/src/assets/bg-iphone.png')",
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'], // تغيير الخط إلى Roboto لجعله أكثر حداثة ووضوحًا
      },
    },
  },
  plugins: [require('daisyui')],
};
