/** Original illustration-first visual asset register.
 * Add your generated images under public/images/generated/. Missing files fall
 * back automatically to a matching local SVG illustration.
 * No stock-image licences or third-party watermarks are required.
 */
export type ImageRecord = {
  src: string;
  alt: string;
  width: number;
  height: number;
  illustration: string;
  promptId: string;
};
export const images: Record<string, ImageRecord> = {
  construction: {
    src: "/images/generated/hero-composite.png",
    alt: "Illustration of illustrative construction materials and industrial flooring composition",
    width: 1600,
    height: 1100,
    illustration: "hero",
    promptId: "01",
  },
  cement: {
    src: "/images/generated/cement-site.png",
    alt: "Illustration of illustrative bulk cement delivery to an industrial construction site",
    width: 1200,
    height: 900,
    illustration: "cement",
    promptId: "02",
  },
  steel: {
    src: "/images/generated/steel-rebar.webp",
    alt: "Illustration of steel reinforcement bars bundled at a construction site",
    width: 1200,
    height: 900,
    illustration: "steel",
    promptId: "03",
  },
  aac: {
    src: "/images/generated/aac-blocks.webp",
    alt: "Illustration of neatly stacked lightweight AAC masonry blocks",
    width: 1200,
    height: 900,
    illustration: "aac",
    promptId: "04",
  },
  blocks: {
    src: "/images/generated/aac-blocks.webp",
    alt: "Illustration of neatly stacked lightweight AAC masonry blocks",
    width: 1200,
    height: 900,
    illustration: "aac",
    promptId: "04",
  },
  plywood: {
    src: "/images/generated/shuttering-plywood.webp",
    alt: "Illustration of layered shuttering plywood sheets ready for formwork",
    width: 1200,
    height: 900,
    illustration: "plywood",
    promptId: "05",
  },
  chemicals: {
    src: "/images/generated/construction-chemicals.webp",
    alt: "Illustration of unbranded construction chemical drums and buckets",
    width: 1200,
    height: 900,
    illustration: "chemicals",
    promptId: "06",
  },
  insulation: {
    src: "/images/generated/insulation-roll.webp",
    alt: "Illustration of thermal insulation rolls in a building materials warehouse",
    width: 1200,
    height: 900,
    illustration: "insulation",
    promptId: "07",
  },
  flooring: {
    src: "/images/generated/epoxy-warehouse.webp",
    alt: "Illustration of seamless industrial epoxy warehouse floor",
    width: 1200,
    height: 900,
    illustration: "flooring",
    promptId: "08",
  },
  warehouse: {
    src: "/images/generated/epoxy-warehouse.webp",
    alt: "Illustration of seamless industrial epoxy floor across a warehouse",
    width: 1200,
    height: 900,
    illustration: "flooring",
    promptId: "08",
  },
  foodPlant: {
    src: "/images/generated/pu-food-plant.webp",
    alt: "Illustration of durable polyurethane floor in a hygienic food processing area",
    width: 1200,
    height: 900,
    illustration: "flooring",
    promptId: "09",
  },
  heavyDuty: {
    src: "/images/generated/uncrete-cold-storage.webp",
    alt: "Illustration of polyurethane-cementitious heavy-duty floor in a cold storage facility",
    width: 1200,
    height: 900,
    illustration: "flooring",
    promptId: "10",
  },
  application: {
    src: "/images/generated/floor-application.webp",
    alt: "Illustration of worker applying industrial floor coating using a roller",
    width: 1200,
    height: 900,
    illustration: "flooring",
    promptId: "11",
  },
  colourDetail: {
    src: "/images/generated/coloured-floor-closeup.png",
    alt: "Illustration of close-up of a coloured resin flooring surface texture",
    width: 1200,
    height: 900,
    illustration: "flooring",
    promptId: "12",
  },
};
