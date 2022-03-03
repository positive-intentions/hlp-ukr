import { LabYak, Stock } from "../generated/graphql";

export interface DatabaseResponse {
  herd: {
    labyak: [LabYak];
  };
}

const yakYear = 100;
const calculateMilkProduced = (ageInDays: number) => 50 - -ageInDays * 0.03;

export const calculateStock = (
  timeInDays: number,
  databaseResponse: DatabaseResponse
): Stock => {
  console.log({ databaseResponse });
  const milk = databaseResponse.herd.labyak
    .map((yak) => calculateMilkProduced(yak.age * yakYear + timeInDays))
    .reduce((prev, curr) => prev + curr);

  console.log({ milk });

  return {
    milk,
    skins: 11,
  };
};

export const calculateHerd = (
  timeInDays: number,
  databaseResponse: DatabaseResponse
): [LabYak] => {
  return [
    {
      age: 111.11,
      ageLastShaved: 111.11,
      name: "11",
    },
  ];
};
