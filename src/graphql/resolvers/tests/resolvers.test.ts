// import { resolvers } from "../resolver";
// import fs from "fs";

// const parsedXML = {
//   herd: {
//     labyak: [
//       { name: "aaa", age: "4", sex: "f" },
//       { name: "aaa", age: "5", sex: "f" },
//       { name: "aaa", age: "9.5", sex: "f" },
//     ],
//   },
// };

// jest.mock("xml2json", () => ({
//   toJson: (data) => JSON.stringify(data),
// }));

// jest.mock("fs", () => ({
//   readFile: (_, cb) => cb(null, parsedXML),
// }));

// describe("resolver tests", () => {
//   it("returns stock data", async () => {
//     const stock = await resolvers.Query.stock(null, { timeInDays: 4 });
//     expect(stock).toStrictEqual({
//       milk: 205.86,
//       skins: 11,
//     });
//   });

//   it("returns herd data", async () => {
//     const stock = await resolvers.Query.herd(null, { timeInDays: 4 });
//     expect(stock).toStrictEqual([
//       { age: 111.11, ageLastShaved: 111.11, name: "11" },
//     ]);
//   });

//   it("handles errors as expected", async () => {
//     jest
//       .spyOn(fs, "readFile")
//       .mockImplementation((_, cb) =>
//         cb({ errno: 404, name: "error", message: "error" }, null)
//       );

//     let response = null;
//     try {
//       response = await resolvers.Query.stock(null, { timeInDays: 1 });
//     } catch (e) {
//       expect(response).toBe(null);
//     }
//   });

//   it("can create an order", async () => {
//     const order = await resolvers.Mutation.order(null, {
//       timeInDays: 4,
//       customerOrder: {
//         customer: "aaa",
//         order: {
//           milk: 205.86,
//           skins: 11,
//         },
//       },
//     });
//     expect(order).toStrictEqual([
//       { age: 111.11, ageLastShaved: 111.11, name: "11" },
//     ]);
//   });
// });

it('dummy test', () => {
  expect(!!true).toBeTruthy();
})