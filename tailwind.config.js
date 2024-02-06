/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-background": "url('/src/assets/foto.jpg')",
        "schedule-background": "url('src/assets/bg02.jpg')",
      },
      letterSpacing: {
        "wedding-spacing": "0.3em",
      },
    },
  },
  plugins: [],
};
