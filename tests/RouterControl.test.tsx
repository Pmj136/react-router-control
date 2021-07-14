import React from 'react'
import '@testing-library/jest-dom'
import {Router} from 'react-router-dom'
import {render, cleanup} from '@testing-library/react'
import RouterControl from "../src/RouterControl";
import {createMemoryHistory} from "history"
import routes from "./routes";

afterEach(cleanup)

const renderWithRouter = (route: string = "") => {
    const history = createMemoryHistory()
    history.push(route)
    return {
        ...render(
            <Router history={history}>
                <RouterControl routes={routes}/>
            </Router>
        )
    }
}

test("'/' redirect to '/a'", () => {
    const {getByText} = renderWithRouter("/")
    expect(getByText("ComponentA")).toBeInTheDocument()
})

test("'/a' rendering <ComponentA/>", () => {
    const {getByText} = renderWithRouter("/a")
    expect(getByText("ComponentA")).toBeInTheDocument()
})
test("'/b' rendering <ComponentB/>", () => {
    const {getByText} = renderWithRouter("/b")
    expect(getByText("ComponentB")).toBeInTheDocument()
})

test("'/c' rendering <ComponentC/>", () => {
    const {getByText} = renderWithRouter("/c")
    expect(getByText("ComponentC")).toBeInTheDocument()
})

test("'/c/c1' rendering <ComponentC1/>", () => {
    const {getByText} = renderWithRouter("/c/c1")
    expect(getByText("ComponentC1")).toBeInTheDocument()
})


test("'/undefined_path' rendering <NotFound/>", () => {
    const {getByText} = renderWithRouter("/undefined_path")
    expect(getByText("Not Found")).toBeInTheDocument()
})

test("'/c/undefined_path' rendering <NotFound/>", () => {
    const {getByText} = renderWithRouter("/undefined_path")
    expect(getByText("Not Found")).toBeInTheDocument()
})