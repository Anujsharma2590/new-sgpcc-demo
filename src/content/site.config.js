/** Central source of truth for domain, navigation, business contacts and links. */
export { FLOORING_PATH } from './services'

const config = {
  siteUrl: 'https://www.sgpcc.in',
  company: {
    name: 'Shree Ganesh Plywood & Construction Chemicals',
    shortName: 'SGPCC',
    tagline: 'One stop solution for cement, steel, chemicals, AAC blocks, shuttering plywood, pinewood, epoxy & industrial flooring.',
    about: 'We support bulk construction material procurement and industrial flooring requirements for projects across India.',
    logo: '/logo.png',
  },
  contacts: {
    address: 'Ground Floor & First Floor, Khasra No. 770/684, Alwar Bypass Road, Samriddhi Raymond Showroom, Saidpur, Bhiwadi, Khairthal Tijara, Rajasthan - 301019',
    streetAddress: 'Khasra No. 770/684, Alwar Bypass Road, Samriddhi Raymond Showroom, Saidpur',
    postalCode: '301019',
    gstin: '08ADAFS2300N1Z6',
    // TODO: Replace approximate map markers with verified office pin coordinates.
    lat: 28.21,
    lng: 76.8296,
    phones: [
      { label: 'Sales Enquiries', number: '+91 9610963333' },
      { label: 'Customer Support', number: '+91 9610961111' },
      { label: 'Project Enquiries', number: '+91 9610962222' },
    ],
    email: 'info@sgpcc.in',
    whatsapp: '919610963333',
    offices: [
      { city: 'Gurugram, Haryana', label: 'Branch Office', lines: ['3rd Floor, D-304, Tower-D', 'Anantraj Maceo, Sector-91', 'Gurugram, Haryana - 122505'], gstin: '06ADAFS2300N1ZA', lat: 28.4595, lng: 77.0266 },
      { city: 'Pune, Maharashtra', label: 'Branch Office', lines: ['Gat No. 97, Flat No. 504, Building No. 04', 'Woodsville Phase-1, Borhadewadi, Moshi', 'Pune, Maharashtra - 412105'], gstin: '27ADAFS2300N1Z6', lat: 18.698, lng: 73.8375 },
      { city: 'Delhi', label: 'Branch Office', lines: ['A-1161, 2nd Floor', 'Mayur Vihar Phase-III', 'Delhi - 110096'], lat: 28.6096, lng: 77.2953 },
    ],
  },
  partners: [
    { name: 'UltraTech Cement', logo: '/partners/ultratech.png', url: 'https://www.ultratechcement.com/' },
    { name: 'Pidilite', logo: '/partners/pidilite.png', url: 'https://www.pidilite.com/' },
    { name: 'Sika', logo: '/partners/sika.png', url: 'https://www.sika.com/' },
    { name: 'Fosroc', logo: '/partners/fosroc.png', url: 'https://www.fosroc.com/' },
    { name: 'Flowcrete', logo: '/partners/flowcrete-group.png', url: 'https://www.flowcrete.in/' },
    { name: 'MC-Bauchemie', logo: '/partners/mc.png', url: 'https://www.mc-bauchemie.in/' },
    { name: 'Mapei', logo: '/partners/mapei.png', url: 'https://www.mapei.com/' },
    { name: 'Supreme', logo: '/partners/supreme.png', url: 'https://www.supreme.co.in/' },
    { name: 'STP Limited', logo: '/partners/stp.png', url: 'https://stpltd.com/' },
    { name: 'Kryton', logo: '/partners/kryton.png', url: 'https://www.kryton.in/' },
    { name: 'Birla White', logo: '/partners/birla-white.png', url: 'https://www.birlawhite.com/en' },
    { name: 'Bekaert', logo: '/partners/bekaert.png', url: 'https://www.bekaert.com/en/' },
    { name: 'Cipy', logo: '/partners/cipy.png', url: 'https://www.drcipy.com/' },
    { name: 'MYK Laticrete', logo: '/partners/myk-laticrete.png', url: 'https://myklaticrete.com/' },
  ],
  cta: {
    heading: 'Tell us what your project needs.',
    sub: 'Send your city, material list and approximate quantity for a project-specific quotation.',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Partners', href: '/#partners' },
    { label: 'Contact', href: '/#contact' },
  ],
  seo: {
    title: 'SGPCC | Building Material Supplier & Industrial Flooring',
    description: 'Bulk cement, steel, plywood and construction chemicals across India. Industrial epoxy, PU and cementitious flooring in Bhiwadi and Delhi NCR.',
  },
}

export function whatsappHref(message = '') {
  return `https://wa.me/${config.contacts.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}

export default config
