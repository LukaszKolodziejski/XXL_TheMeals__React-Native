export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "TOGGLE_FAVORITE";

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  mealId: id,
});

export const setFilters = (filterSettings) => ({
  type: SET_FILTERS,
  filters: filterSettings,
});
