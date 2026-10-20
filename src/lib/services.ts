/** Canonical service source for navigation, cards, metadata and category treatments. */
export const FLOORING_PATH = '/epoxy-pu-uncrete-flooring'
export type ServiceIcon = 'Truck' | 'Layers3' | 'FlaskConical' | 'Blocks' | 'PanelsTopLeft' | 'Grid2X2' | 'Thermometer'
export type Service = {
  title: string; slug: string; shortDescription: string; icon: ServiceIcon;
  image: string; href: string; featured: boolean; hue: string;
}
export const services: Service[] = [
  {title:'Cement, RMC & Dry Mix',slug:'cement-rmc',shortDescription:'OPC, PPC, ready-mix concrete, ready-mix plaster and block jointing mortar.',icon:'Truck',image:'cement',href:'/services/cement-rmc',featured:false,hue:'#FCA512'},
  {title:'TMT Steel & Metal Products',slug:'steel-fibres',shortDescription:'TMT bars, structural steel, coils, sheets and binding wire for project requirements.',icon:'Layers3',image:'steel',href:'/services/steel-fibres',featured:false,hue:'#444791'},
  {title:'Construction Chemicals',slug:'construction-chemicals',shortDescription:'Waterproofing systems, admixtures, grouts, repair and sealing materials.',icon:'FlaskConical',image:'chemicals',href:'/services/construction-chemicals',featured:false,hue:'#C82668'},
  {title:'Waterproofing & Roofing',slug:'waterproofing-roofing',shortDescription:'Membranes, coatings, primers, PU injection and waterproofing chemicals.',icon:'PanelsTopLeft',image:'chemicals',href:'/services/waterproofing-roofing',featured:false,hue:'#32B088'},
  {title:'Industrial Flooring',slug:'flooring',shortDescription:'Epoxy, PU, Ucrete, ESD systems, floor hardeners and densifiers.',icon:'Grid2X2',image:'flooring',href:FLOORING_PATH,featured:true,hue:'#11AA34'},
  {title:'AAC Blocks & Masonry Materials',slug:'aac-blocks',shortDescription:'AAC blocks, block adhesives and masonry accessories for wall construction.',icon:'Blocks',image:'aac',href:'/services/aac-blocks',featured:false,hue:'#0C9AD3'},
  {title:'Shuttering Plywood & Pinewood',slug:'shuttering-plywood',shortDescription:'Film-faced plywood, pinewood and formwork accessories for project sites.',icon:'PanelsTopLeft',image:'plywood',href:'/services/shuttering-plywood',featured:false,hue:'#A1282F'},
  {title:'Tile Adhesives, Grouts & Stone',slug:'tile-adhesives-grouts-stone',shortDescription:'Tile adhesives, epoxy grouts, tile spacers and stone for project finishes.',icon:'Grid2X2',image:'chemicals',href:'/services/tile-adhesives-grouts-stone',featured:false,hue:'#444791'},
  {title:'Wall Putty, Primers & Finishes',slug:'wall-putty-primers-finishes',shortDescription:'Birla White putty, primers, plaster and textures for wall preparation and finishing.',icon:'FlaskConical',image:'chemicals',href:'/services/wall-putty-primers-finishes',featured:false,hue:'#FCA512'},
  {title:'RCC Accessories & Joint Systems',slug:'rcc-accessories-joint-systems',shortDescription:'Cover blocks, dowels, fibres, backer rods and waterstops for concrete works.',icon:'Blocks',image:'steel',href:'/services/rcc-accessories-joint-systems',featured:false,hue:'#C82668'},
]
// Retain the previously published route without changing the ten-category priority list.
export const legacyServices: Service[] = [
  {title:'Insulation',slug:'insulation',shortDescription:'Thermal and acoustic insulation materials for buildings and facilities.',icon:'Thermometer',image:'insulation',href:'/services/insulation',featured:false,hue:'#32B088'},
]
export const allServices = [...services, ...legacyServices]
export const flooringTypes = [
  {title:'Epoxy flooring',id:'epoxy',image:'warehouse',use:'Warehouse floors and cleanable industrial workspaces.'},
  {title:'PU flooring',id:'pu',image:'foodPlant',use:'Production areas requiring system-specific flexibility and resistance.'},
  {title:'PU-cementitious / Uncrete',id:'uncrete',image:'heavyDuty',use:'Wet processing, cold storage and demanding washdown zones.'},
]
export function getService(slug:string) {return allServices.find(s => s.slug===slug)}
