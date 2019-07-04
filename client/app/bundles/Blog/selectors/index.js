export const selectPostDetail = state => state.postDetail;

export const selectHome = state => {
  const { data, ...rest } = state.homeReducer;
  return {
    ...rest,
    posts: data,
  };
};
