/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1877F2",
        soft: "#E7F3FF",
        light: "#F0F2F5",
        accent: "#1877F2",
        ink: "#050505",
        muted: "#65676B",
        line: "#CED0D4",
      },
    },
  },
  plugins: [],
};
