import { render, screen, fireEvent } from '@testing-library/react'
import ArtistItem from "./ArtistItem"
import {ArtistData, ArtistGenre} from "../../types";
import {Provider} from "react-redux";
import { store } from "../../store"

const mockArtistGenres: Array<ArtistGenre> = [
  {
    id: 1,
    name: "Boy Band",
    is_primary: true
  },
  {
    id: 2,
    name: "Smooth Jazz",
    is_primary: false
  }
]

const mockArtist: ArtistData = {
  id: 1,
  image: "mock-url.com",
  name: "Stephen Kempisty",
  popularity: 100,
  genres: mockArtistGenres
}

test('renders properly when compact', () => {
  render(
    <Provider store={store}>
      <ArtistItem
        artist={mockArtist}
        isCompact={true}
      />
    </Provider>
  )

  const artistName = screen.getByText("Stephen Kempisty")

  expect(artistName).toBeInTheDocument()
});

test('renders properly when NOT compact', () => {
  render(
    <Provider store={store}>
      <ArtistItem
        artist={mockArtist}
        isCompact={false}
      />
    </Provider>
  )

  const artistName = screen.getByText("Stephen Kempisty")

  expect(artistName).toBeInTheDocument()
});

test('clicking "Add" btn causes btn text to change to "Remove"', () => {
  render(
    <Provider store={store}>
      <ArtistItem
        artist={mockArtist}
        isCompact={false}
      />
    </Provider>
  )

  const addBtn = screen.getByText("Add")

  fireEvent.click(addBtn)

  const removeBtn = screen.getByText("Remove")

  expect(removeBtn).toBeInTheDocument()
});
