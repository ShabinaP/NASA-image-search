import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("SearchResults", () => {
    const validProps = {
        results: [
        <img 
        className="card-image"
        alt="NASA images"
        />
        ]
    }
    it("should display search results", () => {
        render(<SearchResults 
            results={validProps.results}/>)

        expect(screen.getByAltText("NASA images")).toBeInTheDocument()
    })
})