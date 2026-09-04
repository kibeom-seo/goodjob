/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3182F6",
          indigo: "#4F46E5",
          dark: "#0F172A",
          muted: "#64748B",
          canvas: "#F8FAFC",
        },
      },
      boxShadow: {
        'soft-card': '0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'soft-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
        'soft-modal': '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 1px 3px 0 rgba(15, 23, 42, 0.05)',
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
        'xl': '12px',
      },
    },
  },
  plugins: [],
}
