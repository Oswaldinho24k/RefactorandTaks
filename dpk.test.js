const { deterministicPartitionKey, hashData } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return a hash for an event", ()=>{
    const event = {name: "Oswaldinho", coffeLover: true}
    const stringifyData = JSON.stringify(event)
    const hash = crypto.createHash("sha3-512").update(stringifyData).digest("hex");

    expect(deterministicPartitionKey(event)).toBe(hash)
  })

  it("should return a hash for over 256", ()=>{
    const event = {name: "Oswaldinho", coffeLover: true, partition: 'Oswaldinho'.repeat(100)}
    const stringifyData = JSON.stringify(event)
    const hash = crypto.createHash("sha3-512").update(stringifyData).digest("hex");

    expect(deterministicPartitionKey(event)).toBe(hash)
  })
});