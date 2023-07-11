export type BookProps = {
  isbn: number;
  title: string;
  author: string;
};

export const DefaultBooks = [
  {
    isbn: Math.floor(Math.random() * 10000000),
    title: "Clichés sur les hispaniques",
    author: "François Vicq",
  },
  {
    isbn: Math.floor(Math.random() * 10000000),
    title: "Dissertation sur les poissons morts",
    author: "Gabriel 'Gabz' Mouget",
  },
  {
    isbn: Math.floor(Math.random() * 10000000),
    title: "La pétanque pour les nuls",
    author: "Diégo 'Diegz' Del Castillos",
  },
  {
    isbn: Math.floor(Math.random() * 10000000),
    title: "Courir 512 km chaque jour",
    author: "Laurent 'Lolo' Le Calvé",
  },
  {
    isbn: Math.floor(Math.random() * 10000000),
    title: "Comment je suis devenu Dalai Lama en aidant Ahmad",
    author: "Damien 'Dams' Goujard",
  },
  {
    isbn: Math.floor(Math.random() * 10000000),
    title: "1500mg de caféine par jour est un minimum",
    author: "Thierry Amartin",
  },
  {
    isbn: Math.floor(Math.random() * 10000000),
    title: "Il n'y a pas de petites économies",
    author: "Matthieu Sellier",
  },
];
