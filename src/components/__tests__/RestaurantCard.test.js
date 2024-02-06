import { screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"
import RestaurantCard from "../RestaurantCard";

it("Should render Restaurant Card component with props Data", () => {

    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Sandwich 2 Poha");
    expect(name).toBeInTheDocument();
});