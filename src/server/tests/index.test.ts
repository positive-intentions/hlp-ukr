import app from "../index";

jest.mock("express", () => () => ({
  listen: (port, cb) => cb(port),
}));

jest.mock("apollo-server-express", () => ({
  ApolloServer: jest.fn().mockImplementation(() => ({
    start: jest
      .fn()
      .mockImplementation(() => new Promise<void>((res) => res())),
    applyMiddleware: () => jest.fn(),
  })),
}));

describe("app runs", () => {
  it("turns the server on", (done) => {
    expect(app).toBeTruthy();
    setTimeout(done, 0); // add to the event loop so hopefully express has called the callback function
  });
});
