/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // warm cream/paper surfaces instead of dark navy
        navy: {
          950: "#f6f3ec",
          900: "#ffffff",
          800: "#ffffff",
          700: "#ddd6c8",
          600: "#c9c0ac",
        },
        // primary accent — deep terracotta, replaces cyan everywhere
        cyan: {
          400: "#b5481f",
          500: "#9c3c18",
        },
        // secondary accent — same terracotta family, replaces violet everywhere
        violet: {
          400: "#b5481f",
          500: "#9c3c18",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(90deg, #b5481f 0%, #9c3c18 100%)",
        "gradient-radial-glow":
          "radial-gradient(circle at center, rgba(181,72,31,0.10) 0%, rgba(181,72,31,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(181,72,31,0.12)",
        "glow-cyan": "0 0 40px rgba(181,72,31,0.10)",
      },
    },
  },
  plugins: [],
};
