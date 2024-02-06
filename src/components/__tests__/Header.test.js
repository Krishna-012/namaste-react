import "@testing-library/jest-dom";
import { screen, render, fireEvent} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";

it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                render(<Header/>)
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a cart item 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                render(<Header/>)
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                render(<Header/>)
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

it("Should Change login button to logout button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                render(<Header/>)
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});