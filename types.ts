export type GenreData = {
  id: number;
  parent_id: number;
  name: string;
}

export type ArtistGenre = {
  id: number;
  name: string;
  is_primary: boolean;
}

export type ArtistData = {
  id: number;
  image: string;
  name: string;
  popularity: number;
  genres: Array<ArtistGenre>
}