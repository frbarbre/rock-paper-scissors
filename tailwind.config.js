/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "scissors-start": "hsl(39, 89%, 49%)",
        "scissors-end": "hsl(40, 84%, 53%)",
        "scissors-shadow": "#C76C1B",
        "paper-start": "hsl(230, 89%, 62%)",
        "paper-end": "hsl(230, 89%, 65%)",
        "paper-shadow": "#2A45C2",
        "rock-start": "hsl(349, 71%, 52%)",
        "rock-end": "hsl(349, 70%, 56%)",
        "rock-shadow": "#9D1634",
        "lizard-start": "hsl(261, 73%, 60%)",
        "lizard-end": "hsl(261, 72%, 63%)",
        "lizard-shadow": "#5F37A8",
        "spock-start": "hsl(189, 59%, 53%)",
        "spock-end": "hsl(189, 58%, 57%)",
        "spock-shadow": "#2D8DAB",
        gray: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
        "background-edge": "hsl(214, 47%, 23%)",
        "background-center": "hsl(237, 49%, 15%)",
      },
      backgroundImage: {
        pentagon: 'url("/bg-pentagon.svg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "size-350": "350% 350%",
      },
      boxShadow: {
        xs: "0px 3px 3px 0px rgba(0, 0, 0, 0.20);",
      },
      screens: {
        md: "1000px",
      },
      minHeight: {
        screen: "100svh",
      },
    },
  },
  plugins: [],
};
