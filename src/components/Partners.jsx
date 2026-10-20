import Image from "next/image";
import config from "@/content/site.config";

function Logos({ duplicate = false }) {
  return config.partners.map((brand) => (
    <a
      aria-hidden={duplicate ? "true" : undefined}
      tabIndex={duplicate ? -1 : undefined}
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      key={`${brand.name}-${duplicate ? "copy" : "original"}`}
      className="mx-2 flex h-[90px] w-[158px] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-amber-400 sm:w-[180px]"
    >
      <Image
        src={brand.logo}
        alt={duplicate ? "" : brand.name}
        width={144}
        height={72}
        sizes="140px"
        className="h-[62px] w-[130px] object-contain"
      />
    </a>
  ));
}

export default function Partners() {
  return (
    <section
      className="section-pad bg-canvas"
      id="partners"
      aria-labelledby="partners-title"
    >
      <div className="container-responsive">
        <p className="eyebrow">Manufacturers & product brands</p>
        <h2 className="section-title" id="partners-title">
          Authorised Dealers & Distributors
        </h2>
        <p className="body-copy mt-4 max-w-2xl">
          Explore our listed brands for project supply. Product availability and
          brand-specific authorisation are confirmed against your enquiry.
        </p>
      </div>
      <div
        className="marquee mt-9"
        aria-label="Brand logo strip; swipe on mobile"
      >
        <div className="marquee-track py-3">
          <Logos />
          <Logos duplicate />
        </div>
      </div>
    </section>
  );
}
