/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#D7E96B",
        surface: "#FFFFFF",
        ink: "#111111",
        muted: "#757575",
        accent: "#D7E96B",
        violet: "#8A70FF",
        line: "#E8E8E8",
        success: "#5CB85C",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        title: ["20px", { lineHeight: "1.3", fontWeight: "700" }],
        subtitle: ["16px", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      borderRadius: {
        card: "28px",
        input: "16px",
        day: "8px",
        control: "12px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(17, 17, 17, 0.06)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "220ms",
      },
    },
  },
  plugins: [],
};
