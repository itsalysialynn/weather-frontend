import convertKalvinToCelsius from "./convertKalvinToCelsius";

describe("convertKalvinToCelsius", () => {
  it("should correctly convert kalvin temp to celsius temp", () => {
    expect(convertKalvinToCelsius(300)).toEqual(27);
  });
});
