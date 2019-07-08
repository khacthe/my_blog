export const selectPostDetail = state => {
  const { data, ...rest } = state.postDetailReducer;
  return {
    ...rest,
    post: data,
  };
}

export const selectHome = state => {
  const { data, ...rest } = state.homeReducer;
  return {
    ...rest,
    posts: data,
  };
};
