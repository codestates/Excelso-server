module.exports = {
  user: {
    login: require("./user/login"),
    logout: require("./user/logout"),
    signup: require("./user/signup"),
    checkNickname: require("./user/checkNickname"),
    checkEmail: require("./user/checkEmail"),
    changepassword: require("./user/changePassword"),
    changenickname: require("./user/changenickname"),
    deleteUser: require("./user/deleteUser"),
  },

  coffee: {
    brand: require("./coffee/brand"),
    coffeeInfo: require("./coffee/coffeeInfo"),
    banner: require("./coffee/banner"),
  },

  review: {
    updateReview: require("./review/updateReview"),
    getReview: require("./review/getReview"),
    deleteReview: require("./review/deleteReview"),
  },

  bookmark: {
    addBookmark: require("./bookmark/addBookmark"),
    getBookmark: require("./bookmark/getBookmark"),
  }
};
