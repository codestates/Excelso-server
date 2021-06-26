const { Review } = require("../../models");

module.exports = async ( req, res ) => {
  const { Authorization } = req.headers;
  const { userId, coffeeId, rating, content } = req.body;
  if(Authorization) {
    await Review.create({
      user_id: userId,
      coffee_id: coffeeId,
      content,
      rating,
    })
    return res.status(200).json({
      data: null, 
      message: "성공적으로 리뷰를 작성하셨습니다."
    })
  }else {
    res.status(404).json({
      data: null,
      message: "로그인이 필요합니다."
    })
  }

  if(req.body.coffeeId) {
    const coffeeReview = await Review.findAll();
    const filterReview = coffeeReview.filter(el => {
      if(el.coffee_id === req.body.coffeeId) {
        return true;
      }
    })

    res.status(200).json(filterReview);
  }
}

// 유저까지 뽑아서 클라이언트로 
// params 