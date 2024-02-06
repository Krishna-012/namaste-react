import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test Case", () => {

    test("Should load contact us Component", () => {
    
        render(<Contact />)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("should load button inside contact page", () => {
        render(<Contact />);
        const button  = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("should load input name inside contact page", () => {
        render(<Contact />);
        const inputName  = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 2 Input Boxesw on the Contact Component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(2);
    });
});