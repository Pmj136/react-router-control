import {resolveRoute as t, specialRouteToEnd} from "../src/util"
import routes, {reverseRoutes} from "./routes";

test("test resolveRoute", () => {
    expect(t("", "/")).toBe("/")
    expect(t("", "/home")).toBe("/home")

    expect(t("/", "/home")).toBe("/home")
    expect(t("/", "home")).toBe("/home")

    expect(t("/parent", "")).toBe("/parent")
    expect(t("/parent", "/")).not.toBe("/parent")

    expect(t("/parent", "child")).toBe("/parent/child")
    expect(t("/parent", "/parent/child2")).toBe("/parent/child2")
})

test("test specialRouteToEnd", () => {
    specialRouteToEnd(routes)
    expect(JSON.stringify(routes)).toBe(JSON.stringify(reverseRoutes))
})