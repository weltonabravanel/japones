export default {
  SET_SEARCH_LIST(state, list) {
    state.searchList = list;
  },
  SET_MOST_POPULAR_VIDEO_LIST(state, list) {
    state.mostPopularList = list;
  },
  SET_SEARCH_LIST_IN_VIDEO(state, list) {
    state.searchListInVideo = list;
  },
  SET_RECOMMENDED_LIST(state, list) {
    state.recommendedList = list;
  },
  SET_COMMENT_LIST(state, list) {
    state.commentList = list;
  },
};
