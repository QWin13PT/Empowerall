type PartnerLogo = {
  src: string;
  width: number;
  height: number;
};

export type PartnerGroup = "coordinator" | "beneficiary" | "associated";

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
  nameKey:
    | "partners.items.csic"
    | "partners.items.nibio"
    | "partners.items.cebc"
    | "partners.items.globaz"
    | "partners.items.comillas"
    | "partners.items.bucharest"
    | "partners.items.braila"
    | "partners.items.ile"
    | "partners.items.gods"
    | "partners.items.dlr"
    | "partners.items.donana"
    | "partners.items.agrosmart"
    | "partners.items.ufz";
  href: string;
  logo: PartnerLogo | null;
}[] = [
  {
    id: "csic",
    group: "coordinator",
    nameKey: "partners.items.csic",
    href: "https://www.ingenio.upv.es/",
    logo: null,
  },
  {
    id: "nibio",
    group: "beneficiary",
    nameKey: "partners.items.nibio",
    href: "https://www.nibio.no/",
    logo: { src: "/images/partners/nibio.png", width: 512, height: 180 },
  },
  {
    id: "cebc",
    group: "beneficiary",
    nameKey: "partners.items.cebc",
    href: "https://za-plaineetvaldesevre.com/",
    logo: null,
  },
  {
    id: "globaz",
    group: "beneficiary",
    nameKey: "partners.items.globaz",
    href: "https://www.loba.com/en",
    logo: { src: "/images/partners/globaz.png", width: 500, height: 96 },
  },
  {
    id: "comillas",
    group: "beneficiary",
    nameKey: "partners.items.comillas",
    href: "https://www.comillas.edu/",
    logo: {
      src: "/images/partners/universidad-pontificia-comillas.png",
      width: 400,
      height: 110,
    },
  },
  {
    id: "bucharest",
    group: "beneficiary",
    nameKey: "partners.items.bucharest",
    href: "https://rcses.unibuc.ro/",
    logo: {
      src: "/images/partners/university-of-bucharest.png",
      width: 1833,
      height: 390,
    },
  },
  {
    id: "braila",
    group: "beneficiary",
    nameKey: "partners.items.braila",
    href: "https://www.scdabraila.ro/",
    logo: {
      src: "/images/partners/agricultural-research-and-development-station-of-brăila.png",
      width: 952,
      height: 503,
    },
  },
  {
    id: "ile",
    group: "beneficiary",
    nameKey: "partners.items.ile",
    href: "http://www.uke.sav.sk",
    logo: {
      src: "/images/partners/institute-of-landscape-ecology.png",
      width: 528,
      height: 216,
    },
  },
  {
    id: "gods",
    group: "beneficiary",
    nameKey: "partners.items.gods",
    href: "https://www.ornitho79.org/",
    logo: null,
  },
  {
    id: "dlr",
    group: "beneficiary",
    nameKey: "partners.items.dlr",
    href: "",
    logo: null,
  },
  {
    id: "donana",
    group: "associated",
    nameKey: "partners.items.donana",
    href: "",
    logo: {
      src: "/images/partners/asociación-de-agricultores-puerta-de-doñana.png",
      width: 548,
      height: 364,
    },
  },
  {
    id: "agrosmart",
    group: "associated",
    nameKey: "partners.items.agrosmart",
    href: "",
    logo: null,
  },
  {
    id: "ufz",
    group: "associated",
    nameKey: "partners.items.ufz",
    href: "https://www.ufz.de/",
    logo: { src: "/images/partners/UFZ.png", width: 598, height: 200 },
  },
];
