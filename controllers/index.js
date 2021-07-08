module.exports = {
  user: {
    login: require("./user/login"),
    logout: require("./user/logout"),
    signup: require("./user/signup"),
    checkNickname: require("./user/checkNickname"),
    checkEmail: require("./user/checkEmail"),
    changepassword: require("./user/changePassword"),
    changenickname: require("./user/changeNickname"),
    deleteUser: require("./user/deleteUser"),
    googleLogin: require("./user/googleLogin"),
    googleSuccess: require("./user/googleloginsuccess"),
  },

  coffee: {
    brand: require("./coffee/brand"),
    coffeeInfo: require("./coffee/coffeeInfo"),
    banner: require("./coffee/banner"),
    recommend: require("./coffee/recommend"),
  },

  review: {
    updateReview: require("./review/updateReview"),
    getReview: require("./review/getReview"),
    deleteReview: require("./review/deleteReview"),
  },

  bookmark: {
    addBookmark: require("./bookmark/addBookmark"),
    getBookmark: require("./bookmark/getBookmark"),
  },
};
