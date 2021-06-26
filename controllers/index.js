module.exports = {
    user: {
      login: require("./user/login"),
      logout: require("./user/logout"),
      signup: require("./user/signup"),
    },
    
    coffee: {
      brand: require("./coffee/brand"),
      coffeeInfo: require("./coffee/coffeeInfo"),
      banner: require("./coffee/banner"),
      review: require("./coffee/review"),
    }
};