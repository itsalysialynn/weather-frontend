import convertKalvinToCelsius from "./convertKalvinToCelsius";

describe("convertKalvinToCelsius", () => {
  it("should correctly convert kalvin temp to celsius temp and round", () => {
    expect(convertKalvinToCelsius(300)).toEqual(27);
  });

  it("should correctly convert negative kalvin temp to celsius temp and round", () => {
    expect(convertKalvinToCelsius(-300)).toEqual(-573);
  });
});
