import {describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "./Login";

describe("login page", ()  => {

    it("should render with reuired fields", () => {
            render(<LoginPage />);

            //getBy -> throws an error
            //queryBy -> null
            // findBy -> Async
            expect(screen.getByText("Sign in")).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
            expect(screen.getByRole("button", {name: "Login in"})).toBeInTheDocument();
            expect(screen.getByRole('checkbox', { name: 'Remember me' })).toBeInTheDocument();
            expect(screen.getByText('Forgot password')).toBeInTheDocument();    
    
        });
});