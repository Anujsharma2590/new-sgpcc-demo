import { flooringImages as photos } from './flooring.images'

export const systems = [
  {
    id: 'epoxy', title: 'Industrial epoxy flooring', photo: photos.warehouse,
    description: 'A resin-based floor coating or screed applied over prepared concrete to form a hard, seamless working surface. Options include self-levelling epoxy, roller coatings, anti-static/ESD systems and epoxy mortar.',
    uses: 'Warehouses, assembly units, clean production areas, workshops, showrooms and parking areas.',
    benefits: 'Smooth finish, cleanability, abrasion resistance and customizable colours. Specialized ESD systems need a specified build-up and testing.',
    thickness: 'Approx. 0.3–9 mm, depending on thin-film coating, self-levelling or mortar system.',
    cure: 'Approx. 12–48 hours for light traffic; 5–7 days for full chemical/mechanical loading.',
  },
  {
    id: 'pu', title: 'PU (polyurethane) flooring', photo: photos.foodPlant,
    description: 'A polyurethane resin floor finish designed to accommodate some substrate movement and, with the correct formulation, offer chemical, impact and thermal performance.',
    uses: 'Commercial and industrial areas with movement, repeated cleaning or moderate thermal variation. Some formulations are suitable for food-processing areas.',
    benefits: 'Greater flexibility than typical rigid epoxy systems, wear resistance and system-dependent chemical resistance.',
    thickness: 'Approx. 1–6 mm for common PU coating and self-smoothing systems.',
    cure: 'Approx. 12–48 hours for light traffic; 3–7 days for full service.',
  },
  {
    id: 'uncrete', title: 'Uncrete / heavy-duty polyurethane-cementitious flooring', photo: photos.heavyDuty,
    description: 'A dense, heavy-duty, polyurethane-cementitious screed family for demanding industrial environments. “Uncrete” is used here descriptively; material specifications must identify the actual manufacturer and system.',
    uses: 'Food and beverage plants, pharmaceutical processing, cold storage, wet processing, washdown rooms and industrial kitchens.',
    benefits: 'Selected systems resist thermal shock, wet cleaning, impact and a wide range of industrial chemicals. Hygiene depends on appropriate detailing, drainage and cleaning.',
    thickness: 'Approx. 4–12 mm for commonly specified heavy-duty screeds.',
    cure: 'Approx. 12–24 hours for light traffic and 2–7 days for full service, depending on the product.',
  },
]

export const comparison = [
  ['Chemical resistance', 'Good, chemical-specific', 'Good, chemical-specific', 'Often very high, system-specific'],
  ['Heat / thermal shock', 'Limited to moderate', 'Moderate to high by formulation', 'High in suitable heavy-duty systems'],
  ['Flexibility', 'Low to moderate', 'Generally higher', 'Moderate, formulation-specific'],
  ['Hygiene / cleanability', 'Seamless; easy to clean', 'Seamless; easy to clean', 'Seamless; suitable for frequent washdown'],
  ['Typical use', 'Warehouses, production, showrooms', 'Industrial, commercial, varied temperatures', 'Food, pharma, wet and cold areas'],
  ['Indicative relative cost', 'Low', 'Medium', 'High'],
]

export const applications = ['Factories', 'Warehouses', 'Cold storage', 'Pharmaceutical plants', 'Food-processing units', 'Automotive plants', 'Parking areas', 'Showrooms', 'Hospitals', 'Laboratories']
export const process = ['Enquiry', 'Site requirement', 'Material recommendation', 'Quote', 'Delivery / application support']

export const faqs = [
  { q: 'What is the difference between epoxy and PU flooring?', a: 'Epoxy is generally hard and rigid, while many PU systems offer more flexibility and different thermal performance. Chemical, slip and impact resistance must be checked against the specific manufacturer system.' },
  { q: 'What affects epoxy or PU flooring cost per sq ft?', a: 'Substrate condition, moisture, grinding or shot blasting, crack repairs, system type, thickness, area, access, safety requirements and location all affect a project quote. Contact us for project-specific pricing.' },
  { q: 'How long does industrial resin flooring take to cure?', a: 'Many systems allow light foot traffic after approximately 12–48 hours, while full service can take 2–7 days or longer. Temperature, humidity and the exact product data sheet govern actual timing.' },
  { q: 'How should concrete be prepared before epoxy application?', a: 'Concrete typically requires a moisture check, removal of weak or contaminated material, mechanical surface preparation, crack and joint assessment, cleaning and a compatible primer. The specification must follow the chosen product data sheet.' },
  { q: 'How long does epoxy or PU flooring last?', a: 'Service life depends on traffic, impact, chemical exposure, cleaning, substrate condition and maintenance. We do not give a universal lifespan because each site and system differs.' },
  { q: 'How do I maintain an industrial epoxy floor?', a: 'Sweep debris, clean with a manufacturer-compatible detergent, avoid abrasive tools and deal with spills promptly. Inspect joints and any damaged areas regularly.' },
  { q: 'Is epoxy or PU resistant to acids and other chemicals?', a: 'Resistance varies with concentration, temperature, duration and formulation. Share your chemical list and cleaning procedure so an appropriate manufacturer resistance chart can be reviewed.' },
  { q: 'Which flooring is suitable for cold storage or hot washdown areas?', a: 'Purpose-designed polyurethane-cementitious floors may suit cold storage, thermal cycling and hot washdowns. The selected thickness and system must match operational temperatures and the manufacturer technical data.' },
  { q: 'Do you provide industrial flooring in Alwar, Neemrana and Delhi NCR?', a: 'Yes. SGPCC handles industrial flooring enquiries in Bhiwadi, Alwar, Neemrana, Khushkhera, Tapukara, Gurugram and Delhi NCR, with project-based requirements considered across Rajasthan and India.' },
  { q: 'Can SGPCC support both material supply and application?', a: 'We support project-based flooring material selection, supply and application requirements. Final scope, contractor responsibilities and site programme are confirmed in the written quotation.' },
]

