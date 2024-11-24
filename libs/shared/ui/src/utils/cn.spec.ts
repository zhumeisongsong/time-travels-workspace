import { cn } from "./cn"

describe("cn utility", () => {
  it("should merge class names", () => {
    expect(cn("class1", "class2")).toBe("class1 class2")
  })

  it("should handle conditional classes", () => {
    expect(cn("base", { conditional: true })).toBe("base conditional")
    expect(cn("base", { conditional: false })).toBe("base")
  })

  it("should merge tailwind classes intelligently", () => {
    expect(cn("p-4 px-2", "px-4")).toBe("p-4 px-4")
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })

  it("should handle undefined and null values", () => {
    expect(cn("base", undefined, null, "extra")).toBe("base extra")
  })
})
