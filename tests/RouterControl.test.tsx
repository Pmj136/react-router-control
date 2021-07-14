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

test("'/' redirect to '/home'", () => {
    const {getByText} = renderWithRouter("/")
    expect(getByText("home")).toBeInTheDocument()
})

test("'/home' rendering <Home/>", () => {
    const {getByText} = renderWithRouter("/home")
    expect(getByText("home")).toBeInTheDocument()
})

test("'/parent' rendering <Parent/>", () => {
    const {getByText} = renderWithRouter("/parent")
    expect(getByText("parent")).toBeInTheDocument()
})

test("'/parent/child' rendering <Child/>", () => {
    const {getByText} = renderWithRouter("/parent/child")
    expect(getByText("child")).toBeInTheDocument()
})


test("'/undefined_path' rendering <NotFound/>", () => {
    const {getByText} = renderWithRouter("/undefined_path")
    expect(getByText("404")).toBeInTheDocument()
})

test("'/parent/undefined_path' rendering <NotFound/>", () => {
    const {getByText} = renderWithRouter("/undefined_path")
    expect(getByText("404")).toBeInTheDocument()
})