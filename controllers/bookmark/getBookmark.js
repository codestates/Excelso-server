const { User, Coffee, Bookmark, Review } = require("../../models")

module.exports = async (req, res) => {
  // bookmark에 있는 정보로 즐겨찾기를 나열
  // 토큰 가져오는 방식
 console.log(req.params)
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
        rating: data.rating,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      }
    )
  })
  
  if(bookmarkInfo.length > 0) {
    res.status(200).send(personalData);
  }else {
    res.status(404).send("check bookmarkInfo plz");
  }
  }catch(err) {
    res.status(500).send("server error");
  }
}