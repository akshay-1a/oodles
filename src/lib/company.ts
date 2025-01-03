export interface Company {
  name: string;
  logo: string;
}

export const companies: Company[] = [
  { name: "99acres", logo: "99acres" },
  { name: "naukri", logo: "naukri" },
  { name: "Shiksha", logo: "shiksha" },
  { name: "naukrigulf", logo: "naukrigulf" },
  { name: "Jeevansathi", logo: "jeevansathi" },
  { name: "Firstnaukri", logo: "firstnaukri" },
  { name: "quadrangle", logo: "quadrangle" },
  { name: "Job Hai", logo: "jobhai" },
  { name: "Ambition Box", logo: "ambitionbox" },
  { name: "Rare Media Library", logo: "raremedialibrary" },
  { name: "mydala", logo: "mydala" },
  { name: "diro", logo: "diro" },
  { name: "Canvera", logo: "canvera" },
  { name: "unnati", logo: "unnati" },
  { name: "Vacation Labs", logo: "vacationlabs" },
  { name: "zomato", logo: "zomato" },
  { name: "policybazar", logo: "policybazar" },
  { name: "meritnation", logo: "meritnation" },
  { name: "Big Stylist", logo: "bigstylist" },
];

export const companyGroups = [
  companies.slice(0, 9),
  companies.slice(9),
];
