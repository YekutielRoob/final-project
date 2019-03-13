function isAlcoholLeagalForAge(age) {
    return age > 18;
}
describe("Test is alcohol legal for age", () => {
    it("sohuld be legal when age is 40", () => {
            const resalt = isAlcoholLeagalForAge(40);
            expect(resalt).toBe(true);
    });

    it("should NOT be leagl when age is 10", ()=>{
        const resalt =isAlcoholLeagalForAge(10);
        expect(resalt).toBe(false);
    });

    it("sohuld be leagl when age is 18", () => {
        const resalt = isAlcoholLeagalForAge(18);
        expect(resalt).toBe(true);
    });

    it("should be undefined when age is negative(??)", () => {
        const resalt = isAlcoholLeagalForAge(-Infinity);
        expect(isAlcoholLeagalForAge).toBe(undefined);
    });
});
