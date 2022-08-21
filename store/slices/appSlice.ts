import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { ArtistData } from "../../types";
import remove from "lodash/remove";


interface MyArtistListState {
  myArtistList: Array<ArtistData>
}

const initialState: MyArtistListState = {
  myArtistList: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addArtist: (state, action) => {
      const newArtistForList = action.payload

      state.myArtistList.push(newArtistForList)
    },
    removeArtistById: (state, action) => {
      const artistId = action.payload

      remove(state.myArtistList, (artist) => artist.id === artistId)
    }
  },
})

// Actions
export const { addArtist, removeArtistById } = appSlice.actions

// Selectors
export const selectMyArtistList = (state: RootState) => state.app.myArtistList

export default appSlice.reducer