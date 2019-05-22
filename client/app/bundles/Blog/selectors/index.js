export const selectHome = state => {
  const { data, ...rest } = state.homeReducer;
  return {
    ...rest,
    posts: data,
  };
};
