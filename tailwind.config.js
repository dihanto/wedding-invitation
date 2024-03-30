/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-background": "url('/src/assets/foto.jpg')",
        "schedule-background": "url('src/assets/bg02.jpg')",
        "bubble-image-1": "url('https://source.unsplash.com/400x400?couple')",
      },
      letterSpacing: {
        "wedding-spacing": "0.3em",
      },
      fontFamily: {
        alex: ["Alex Brush"],
        dancing: ["Dancing Script"],
        oswald: ["Oswald"],
        gabarito: ["Gabarito"],
        great: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
