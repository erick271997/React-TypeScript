/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        domains: ["randomFox.ca"] 
        // esto es para que fumciones la imagen se saco una pagina 
        // llamada https://randomfox.ca/
    }
}

module.exports = nextConfig
