import { describe, expect, it} from "vitest"

import {calculateTotal} from "./calculateTotal"

describe("calculateTotal", () => {
    it("sums valid amounts" , () => {
        expect(calculateTotal("100,200,300")).toBe(600)
    })
    it("handles whitespaces", () => {
        expect(calculateTotal("100 , 200 , 300")).toBe(600)
    })
    it("handles empty strings" , () => {
        expect(calculateTotal("")).toBe(0)
    })
    it("handles invalid inputs" , () => {
        expect(calculateTotal("abc,100,def")).toBe(0)
    })
    it("handling trailing commas" , () => {
        expect(calculateTotal("100,200,")).toBe(300)
    })
})