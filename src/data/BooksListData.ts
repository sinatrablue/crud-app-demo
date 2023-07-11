export type BookProps = {
  isbn: number;
  title: string;
  author: string;
};

const i1 = Math.floor(Math.random() * 10000000);
const i2 = Math.floor(Math.random() * 10000000);
const i3 = Math.floor(Math.random() * 10000000);

export const DefaultBooks = [
  {
    isbn: i1,
    title: "Clichés sur les hispaniques",
    author: "François Vicq",
  },
  {
    isbn: i2,
    title: "Dissertation sur les poissons morts",
    author: "Gabriel 'Gabz' Mouget",
  },
  {
    isbn: i3,
    title: "La pétanque pour les nuls",
    author: "Diégo 'Diegz' Del Castillos",
  },
];
