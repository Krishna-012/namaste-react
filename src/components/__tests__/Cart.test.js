import { fireEvent, render, screen} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json:() => Promise.resolve(MOCK_DATA_NAME)
    })
)

it("Should Load Restaurant Menu Component", async() => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
        )
    );

    const accodianHeader = screen.getByText("Chilli Momo (7)");

    fireEvent.click(accodianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
    
    const addBtns = screen.getAllByRole("button", {name:"Add +"});
    
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    fireEvent.click(addBtns[1])

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(9);

    const clearCart = screen.getByRole("button", {name:"Clear Cart"})

    fireEvent.click(clearCart)

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    expect(screen.getByText("Cart is Empty. Add items to the cart")).toBeInTheDocument();

})