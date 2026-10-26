type PartnerLogo = {
  src: string;
  width: number;
  height: number;
};

export type PartnerGroup = "coordinator" | "beneficiary" | "associated";

export type PartnerNameKey =
  | "partners.items.csic"
  | "partners.items.nibio"
  | "partners.items.cebc"
  | "partners.items.arvore"
  | "partners.items.comillas"
  | "partners.items.bucharest"
  | "partners.items.braila"
  | "partners.items.ile"
  | "partners.items.gods"
  | "partners.items.dlr"
  | "partners.items.donana"
  | "partners.items.agrosmart"
  | "partners.items.ufz";

export const partnerGroupOrder = [
  "coordinator",
  "beneficiary",
  "associated",
] as const satisfies readonly PartnerGroup[];

export const partnerGroupHeadingKey = {
  coordinator: "partners.groups.coordinator",
  beneficiary: "partners.groups.beneficiaries",
  associated: "partners.groups.associated",
} as const;

export const partners: readonly {
  id: string;
  group: PartnerGroup;
  nameKey: PartnerNameKey;
  href: string;
  logos: readonly PartnerLogo[];
}[] = [
  {
    id: "csic",
    group: "coordinator",
    nameKey: "partners.items.csic",
    href: "https://www.ingenio.upv.es/",
    logos: [{ src: "/images/partners/ingenio.png", width: 711, height: 321 }],
  },
  {
    id: "nibio",
    group: "beneficiary",
    nameKey: "partners.items.nibio",
    href: "https://www.nibio.no/",
    logos: [{ src: "/images/partners/nibio.png", width: 512, height: 180 }],
  },
  {
    id: "cebc",
    group: "beneficiary",
    nameKey: "partners.items.cebc",
    href: "https://www.cebc.cnrs.fr/",
    logos: [{ src: "/images/partners/cnrs.svg", width: 221, height: 221 }],
  },
  {
    id: "arvore",
    group: "beneficiary",
    nameKey: "partners.items.arvore",
    href: "",
    logos: [{ src: "/images/partners/arvore.png", width: 926, height: 214 }],
  },
  {
    id: "comillas",
    group: "beneficiary",
    nameKey: "partners.items.comillas",
    href: "https://www.comillas.edu/",
    logos: [
      {
        src: "/images/partners/universidad-pontificia-comillas.png",
        width: 400,
        height: 110,
      },
    ],
  },
  {
    id: "bucharest",
    group: "beneficiary",
    nameKey: "partners.items.bucharest",
    href: "https://rcses.unibuc.ro/",
    logos: [
      {
        src: "/images/partners/university-of-bucharest.png",
        width: 1833,
        height: 390,
      },
    ],
  },
  {
    id: "braila",
    group: "beneficiary",
    nameKey: "partners.items.braila",
    href: "https://www.scdabraila.ro/",
    logos: [
      {
        src: "/images/partners/agricultural-research-and-development-station-of-brăila.png",
        width: 952,
        height: 503,
      },
    ],
  },
  {
    id: "ile",
    group: "beneficiary",
    nameKey: "partners.items.ile",
    href: "http://www.uke.sav.sk",
    logos: [
      {
        src: "/images/partners/institute-of-landscape-ecology.png",
        width: 528,
        height: 216,
      },
    ],
  },
  {
    id: "gods",
    group: "beneficiary",
    nameKey: "partners.items.gods",
    href: "https://www.ornitho79.org/",
    logos: [{ src: "/images/partners/gods.jpg", width: 300, height: 168 }],
  },
  {
    id: "dlr",
    group: "beneficiary",
    nameKey: "partners.items.dlr",
    href: "",
    logos: [],
  },
  {
    id: "donana",
    group: "associated",
    nameKey: "partners.items.donana",
    href: "",
    logos: [
      {
        src: "/images/partners/asociación-de-agricultores-puerta-de-doñana.png",
        width: 548,
        height: 364,
      },
    ],
  },
  {
    id: "agrosmart",
    group: "associated",
    nameKey: "partners.items.agrosmart",
    href: "",
    logos: [],
  },
  {
    id: "ufz",
    group: "associated",
    nameKey: "partners.items.ufz",
    href: "https://www.ufz.de/",
    logos: [
      { src: "/images/partners/UFZ.png", width: 598, height: 200 },
      { src: "/images/partners/elter-ri.svg", width: 1808, height: 758 },
    ],
  },
];
