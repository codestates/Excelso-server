const { Brand } = require("../../models");

module.exports = async (req, res) => {
//   console.log(Brand)
  const brandInfo = await Brand.findAll();
//   console.log(brandInfo.dataValues);
  if(brandInfo) {
    return res.status(200).json(brandInfo);
  }
  res.status(404).json({
    data: null,
    message: "브랜드를 불러올 수 없습니다."
  })
}
