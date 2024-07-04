![Thubnail](https://github.com/apridev/dashboard-flowbite/assets/98099518/2d8c0f81-152b-4304-8312-fe70cfaf8615)
<div>
  <p>Because the creation of this dashboard uses Vite, you need to install your project using Vite by:</p>
  <p><b>npm create vite@latest my-dashboard -- --template react</b></p>
</div>
-----------------------------------------------------------
</br>
<div>
  <p>Before using this repository you must install several react dependencies first:</p>
  <p><b>npm install react-router-dom</b></p>
  <p><b>npm install react-icons</b></p>
  <p><b>npm install flowbite</b></p>
  <p><b>npm install flowbite-react</b></p>
</div>
------------------------------------------------------------
</br>
<div>
  <p>Don't forget to also install TailwindCss on your Vite by:</p>
  <p><b>npm install -D tailwindcss postcss autoprefixer</b></p>
  <p><b>npx tailwindcss init -p</b></p>
</div>
------------------------------------------------------------
</br>
  <p>After successfully installing TailwindCss, Flowbite and Flowbite-React you can change your <b>tailwind.config.css</b> section with:</p>

```javascript
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
};
