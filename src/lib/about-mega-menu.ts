export type AboutMegaMenuItem = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const aboutMegaMenuItems: readonly AboutMegaMenuItem[] = [
  {
    id: "our-mission",
    title: "Our Mission",
    description:
      "Make utility performance governable: evidence-led decisions, disciplined delivery, and reporting that earns trust.",
    href: "/about#our-mission",
  },
  {
    id: "why-now",
    title: "Why Now",
    description:
      "Losses, climate stress, and legitimacy demands require systems that connect field reality to board and donor narratives.",
    href: "/about#why-now",
  },
  {
    id: "our-approach",
    title: "Our Approach",
    description:
      "Phased programs with explicit controls, training, and acceptance criteria—aligned to procurement and audit realities.",
    href: "/about#our-approach",
  },
  {
    id: "leadership-vision",
    title: "Leadership Vision",
    description:
      "Institutions succeed when software respects hierarchy, role separation, and the pace at which people can adopt.",
    href: "/about#leadership-vision",
  },
  {
    id: "partners",
    title: "Partners",
    description:
      "We work alongside utilities, ministries, and development partners as delivery peers—not as detached vendors.",
    href: "/about#partners",
  },
  {
    id: "contact-briefing",
    title: "Contact / Briefing",
    description:
      "Request a structured conversation: scope, urgency, and the right stakeholders for a productive first meeting.",
    href: "/about#contact-briefing",
  },
] as const;
