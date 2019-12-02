import restoreIpAddresses from "./93.复原ip地址";

test("93.复原ip地址", () => {
  expect(restoreIpAddresses("25525511135")).toStrictEqual([
    "255.255.11.135",
    "255.255.111.35"
  ]);
});
