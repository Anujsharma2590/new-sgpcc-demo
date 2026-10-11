/** @type {import('next').NextConfig} */
const nextConfig={images:{formats:['image/avif','image/webp'],qualities:[75],remotePatterns:[]},async redirects(){return [{source:'/:path*',has:[{type:'host',value:'sgpcc.in'}],destination:'https://www.sgpcc.in/:path*',permanent:true}]}}
export default nextConfig
