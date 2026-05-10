import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const PREFERENCES_STORAGE_KEY = "preferences";

type PreferencesState = {
  isLoaded: boolean;
  notificationsEnabled: boolean;
  theme: "system" | "light" | "dark";
};

const initialState: PreferencesState = {
  isLoaded: false,
  notificationsEnabled: true,
  theme: "system",
};

export const loadPreferences = createAsyncThunk(
  "preferences/loadPreferences",
  async () => {
    const storedPreferences = await AsyncStorage.getItem(
      PREFERENCES_STORAGE_KEY,
    );

    if (!storedPreferences) {
      return initialState;
    }

    return {
      ...initialState,
      ...JSON.parse(storedPreferences),
    } as PreferencesState;
  },
);

export const savePreferences = createAsyncThunk(
  "preferences/savePreferences",
  async (preferences: Omit<PreferencesState, "isLoaded">) => {
    await AsyncStorage.setItem(
      PREFERENCES_STORAGE_KEY,
      JSON.stringify(preferences),
    );

    return preferences;
  },
);

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setNotificationsEnabled(state, action: PayloadAction<boolean>) {
      state.notificationsEnabled = action.payload;
    },
    setTheme(state, action: PayloadAction<PreferencesState["theme"]>) {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPreferences.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.notificationsEnabled = action.payload.notificationsEnabled;
        state.theme = action.payload.theme;
      })
      .addCase(loadPreferences.rejected, (state) => {
        state.isLoaded = true;
      })
      .addCase(savePreferences.fulfilled, (state, action) => {
        state.notificationsEnabled = action.payload.notificationsEnabled;
        state.theme = action.payload.theme;
      });
  },
});

export const { setNotificationsEnabled, setTheme } = preferencesSlice.actions;

export const preferencesReducer = preferencesSlice.reducer;
