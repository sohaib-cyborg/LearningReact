import sum from "../sum";

test("testing the sum of 2 numbers",()=>{
    const result = sum(9,1);
    expect(result).toBe(10);
})