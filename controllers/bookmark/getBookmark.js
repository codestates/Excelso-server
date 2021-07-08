const { User, Coffee, Bookmark, Review } = require("../../models")

module.exports = async (req, res) => {
  // bookmark에 있는 정보로 즐겨찾기를 나열
  // 토큰 가져오는 방식
  const { user_id } = req.params;
  const bookmarkInfo = await Bookmark.findAll({
    where: { user_id },
    raw: true,
    include: [
      {
        model: Coffee,
        as: "Coffee",
        attributes: ["title", "src", "id"]
      },
      {
        model: User,
        as: "User",
        attributes: ["id"],
      }
    ]
  })
  
  res.status(200).send(bookmarkInfo);
  console.log(bookmarkInfo);
  
}