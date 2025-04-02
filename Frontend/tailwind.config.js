/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))", // Ensure custom CSS variables are mapped
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/@shadcn/ui/components/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/@shadcn/ui/theme.config.ts"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("tailwindcss-animate")],
// };
