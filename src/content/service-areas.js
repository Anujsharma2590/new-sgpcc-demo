export const serviceAreas = [
  {
    slug: 'bhiwadi', name: 'Bhiwadi', region: 'Rajasthan',
    title: 'Building Material Supplier in Bhiwadi',
    description: 'Bulk building materials and industrial flooring enquiries in Bhiwadi, with project supply coordination from SGPCC’s head office.',
    introduction: 'Our Bhiwadi head office supports industrial and commercial projects with cement, reinforcement steel, masonry materials, formwork supplies and construction chemicals. Send a consolidated BOQ or a package-specific requirement so the team can review grades, quantities and delivery needs.',
    coverage: 'For sites in Bhiwadi, Khushkhera, Tapukara, Neemrana and Alwar, share the precise delivery address and access requirements. Dispatch arrangements and freight depend on the material and order volume.',
    focus: 'Factory Construction & Floor Refurbishment',
    focusText: 'For a new factory, group cement, steel, AAC blocks and shuttering requirements by construction stage. For an operating unit, include floor condition, traffic, chemical exposure and the available shutdown window when requesting epoxy or PU flooring support.',
    serviceSlugs: ['cement-rmc', 'steel-fibres', 'aac-blocks', 'flooring'],
    quoteTip: 'Include the site address, BOQ, preferred brands, delivery phases and any unloading restrictions at the industrial site.',
    office: 'head',
  },
  {
    slug: 'gurugram', name: 'Gurugram', region: 'Haryana',
    title: 'Bulk Construction Material Supplier in Gurugram',
    description: 'Project-based cement, TMT steel, formwork and construction chemical enquiries for commercial and industrial sites in Gurugram.',
    introduction: 'SGPCC’s listed Gurugram branch supports bulk procurement enquiries for commercial builds, warehouses and industrial projects. The team reviews material specifications and construction schedules to prepare a project-based supply proposal.',
    coverage: 'We consider requirements in Gurugram and the surrounding Haryana and Delhi NCR project corridor. Site access, vehicle restrictions and unloading arrangements should be included in the delivery brief; feasibility is confirmed per enquiry.',
    focus: 'Phased Procurement for Commercial Builds',
    focusText: 'Share floor-wise or phase-wise requirements for TMT reinforcement, shuttering plywood and concrete-related materials. Waterproofing, tile adhesives and finishing products can be reviewed against the project specification as work progresses.',
    serviceSlugs: ['steel-fibres', 'shuttering-plywood', 'waterproofing-roofing', 'tile-adhesives-grouts-stone'],
    quoteTip: 'Send steel grades and diameters, plywood specifications, phase quantities, site access timings and your target delivery programme.',
    office: 'Gurugram, Haryana',
  },
  {
    slug: 'pune', name: 'Pune', region: 'Maharashtra',
    title: 'Industrial Construction Material Supplier in Pune',
    description: 'Industrial material procurement and flooring enquiries in Pune, supported through SGPCC’s listed Maharashtra branch.',
    introduction: 'SGPCC’s listed Pune branch handles enquiries for industrial construction materials, repair chemicals and flooring requirements. Share the project specification and operational conditions so material supply and application needs can be reviewed together.',
    coverage: 'Requirements in Pune and surrounding Maharashtra project locations are assessed by material, volume and delivery address. Local availability, freight and any application scope are confirmed in the quotation.',
    focus: 'Production Floors, Repairs & Maintenance',
    focusText: 'For a production or warehouse floor, describe forklift traffic, chemical contact, wet cleaning and temperature changes. Include substrate condition and downtime constraints so epoxy, PU or polyurethane-cementitious options can be reviewed for the actual site.',
    serviceSlugs: ['flooring', 'construction-chemicals', 'rcc-accessories-joint-systems', 'cement-rmc'],
    quoteTip: 'Include floor area, photographs if available, existing surface condition, chemical exposure and the proposed shutdown or construction schedule.',
    office: 'Pune, Maharashtra',
  },
  {
    slug: 'delhi-ncr', name: 'Delhi NCR', region: 'Delhi & NCR',
    title: 'Building Materials Supply Across Delhi NCR',
    description: 'Bulk construction material enquiries across Delhi NCR, with delivery feasibility and project specifications reviewed by SGPCC.',
    introduction: 'SGPCC handles consolidated building material enquiries across Delhi NCR through its listed Delhi and Gurugram offices. Contractors and project teams can share a BOQ covering structural, masonry, waterproofing and finishing requirements for review.',
    coverage: 'For projects in Delhi, Gurugram, Noida, Ghaziabad and Faridabad, provide the exact site location. Material availability, dispatch origin, freight and access restrictions are assessed for each order.',
    focus: 'Coordinating Materials Across Project Stages',
    focusText: 'Separate structural and masonry quantities from waterproofing and finishing packages. For RMC, provide the concrete grade, pour volume, proposed date and access details so plant serviceability can be confirmed before quotation.',
    serviceSlugs: ['cement-rmc', 'aac-blocks', 'waterproofing-roofing', 'wall-putty-primers-finishes'],
    quoteTip: 'Send the BOQ, delivery postcode, required brands or grades, delivery sequence and any vehicle entry restrictions.',
    office: 'Delhi',
  },
]

export function getServiceArea(slug) {
  return serviceAreas.find(area => area.slug === slug)
}
