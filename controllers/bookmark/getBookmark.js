const { User, Coffee, Bookmark, Review } = require("../../models")

module.exports = async (req, res) => {
  // bookmark에 있는 정보로 즐겨찾기를 나열
  // 토큰 가져오는 방식
 try{
  const { user_id } = req.params;

  const bookmarkInfo = await Bookmark.findAll({
    where: { user_id },
    raw: true,
    include: [
      {
        model: Coffee,
        as: "Coffee",
        attributes: ["title", "src", "id", "category"]
      },
      {
        model: Review,
        as: "Review",
        attributes: ["rating"],
      }
    ]
  })

  const personalData = bookmarkInfo.map((data) => {
    return Object.assign(
      {},
      {
        id: data.id,
        title: data["Coffee.title"],
        src: data["Coffee.src"],
        coffee_id: data["Coffee.id"],
        category: data["Coffee.category"],
        rating: data["Review.rating"],
      }
    )
  })
  
  if(bookmarkInfo > 0) {
    res.status(200).send(personalData);
  }else {
    res.status(404).send("check bookmarkInfo plz");
  }
  }catch(err) {
    res.status(500).send("server error");
  }
}