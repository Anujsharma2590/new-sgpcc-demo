/** Canonical service source for navigation, cards, metadata and category treatments. */
export const FLOORING_PATH = '/epoxy-pu-uncrete-flooring'
export type ServiceIcon = 'Truck' | 'Layers3' | 'FlaskConical' | 'Blocks' | 'PanelsTopLeft' | 'Grid2X2' | 'Thermometer'
export type Service = {
  title: string; slug: string; shortDescription: string; icon: ServiceIcon;
  image: string; href: string; featured: boolean; hue: string;
}
export const services: Service[] = [
  {title:'Cement & RMC',slug:'cement-rmc',shortDescription:'Project-based UltraTech cement and ready-mix concrete procurement.',icon:'Truck',image:'cement',href:'/services/cement-rmc',featured:false,hue:'#FCA512'},
  {title:'Steel & Steel Fibres',slug:'steel-fibres',shortDescription:'TMT reinforcement steel and steel fibres for commercial and industrial builds.',icon:'Layers3',image:'steel',href:'/services/steel-fibres',featured:false,hue:'#444791'},
  {title:'Construction Chemicals',slug:'construction-chemicals',shortDescription:'Waterproofing systems, admixtures, grouts, repair and sealing materials.',icon:'FlaskConical',image:'chemicals',href:'/services/construction-chemicals',featured:false,hue:'#C82668'},
  {title:'AAC Blocks',slug:'aac-blocks',shortDescription:'Lightweight masonry blocks for partitions and wall construction.',icon:'Blocks',image:'aac',href:'/services/aac-blocks',featured:false,hue:'#0C9AD3'},
  {title:'Shuttering Plywood & Pinewood',slug:'shuttering-plywood',shortDescription:'Formwork plywood, shuttering sheets and pinewood for project sites.',icon:'PanelsTopLeft',image:'plywood',href:'/services/shuttering-plywood',featured:false,hue:'#A1282F'},
  {title:'Epoxy, PU & Industrial Flooring',slug:'flooring',shortDescription:'Epoxy, PU and polyurethane-cementitious flooring supply and application support.',icon:'Grid2X2',image:'flooring',href:FLOORING_PATH,featured:true,hue:'#11AA34'},
  {title:'Insulation',slug:'insulation',shortDescription:'Thermal and acoustic insulation materials for buildings and facilities.',icon:'Thermometer',image:'insulation',href:'/services/insulation',featured:false,hue:'#32B088'},
]
export const flooringTypes = [
  {title:'Epoxy flooring',id:'epoxy',image:'warehouse',use:'Warehouse floors and cleanable industrial workspaces.'},
  {title:'PU flooring',id:'pu',image:'foodPlant',use:'Production areas requiring system-specific flexibility and resistance.'},
  {title:'PU-cementitious / Uncrete',id:'uncrete',image:'heavyDuty',use:'Wet processing, cold storage and demanding washdown zones.'},
]
export function getService(slug:string) {return services.find(s => s.slug===slug)}
