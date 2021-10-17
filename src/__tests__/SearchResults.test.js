import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("SearchResults", () => {
    it("should display search results", () => {
        render(<SearchResults />)

        expect(screen.getByAltText("moon")).toBeInTheDocument()
    })
})