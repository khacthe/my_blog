export const selectHome = state => {
  const { data, ...rest } = state.homeReducer;
  return {
    posts: data,
    ...rest,
  };
};