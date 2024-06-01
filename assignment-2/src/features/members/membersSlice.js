import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [
    {
      id: 1,
      name: "Connor McDavid",
      description: "Center, captain of the Oilers",
      age: 27,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3895074.png",
    },
    {
      id: 2,
      name: "Leon Draisaitl",
      description: "Center, one of the top scorers",
      age: 28,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3114727.png&w=350&h=254",
    },
    {
      id: 3,
      name: "Zach Hyman",
      description: "Left Wing, known for his tenacity",
      age: 31,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5509.png&w=350&h=254",
    },
    {
      id: 4,
      name: "Ryan Nugent-Hopkins",
      description: "Center, long-time Oiler from Burnaby",
      age: 30,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2562624.png&w=350&h=254",
    },
    {
      id: 5,
      name: "Darnell Nurse",
      description: "Defenseman, physical presence on the ice",
      age: 29,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3041997.png&w=350&h=254",
    },
    {
      id: 6,
      name: "Evan Bouchard",
      description: "Defenseman, power-play specialist",
      age: 24,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4352722.png&w=350&h=254",
    },
    {
      id: 7,
      name: "Evander Kane",
      description: "Left Wing, brings physicality and scoring",
      age: 32,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5251.png",
    },
    {
      id: 8,
      name: "Stuart Skinner",
      description: "Goalie, a rising star in the crease since 2022",
      age: 25,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4268767.png&w=350&h=254",
    },
  ],
  selectedMember: null,
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    deleteMember: (state, action) => {
      state.members = state.members.filter(
        (member) => member.id !== action.payload
      );
    },
    selectMember: (state, action) => {
      state.selectedMember = state.members.find(
        (member) => member.id === action.payload
      );
    },
    clearSelection: (state) => {
      state.selectedMember = null;
    },
  },
});

export const { addMember, deleteMember, selectMember, clearSelection } =
  membersSlice.actions;
export default membersSlice.reducer;
