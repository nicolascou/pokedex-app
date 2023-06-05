/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.pokemon.com',
        port: '',
        pathname: '/assets/cms2/img/pokedex/detail/***.png'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/**'
      }
    ],
  },
}

module.exports = nextConfig
