/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'], //En esta parte defines en que carpeta o archivo tienes los estilos para que Tailwind los lea y muestre esos estilos que hice. A su vez lo que hace "*" es que no importa que nombre de archivo tenga, siempre y cuando tenga extensión pug... y no importa la carpeta en la que se encuentre ("**"); me los muestre. 
  theme: {
    extend: {
      colors: {
        negro: '#000000',
        blanco: '#FFFFFFF',
        naranja: '#BC6C25',
        verde: '#606C38',
        beige: '#FFFE0'
      }
    },
  },
  plugins: [],
}

//