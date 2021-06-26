const { Banner } = require("../../models");

module.exports = async (req, res) => {
  const bannerInfo = await Banner.findAll();

  if (bannerInfo) {
    return res.status(200).json(bannerInfo);
  }
  res.status(404).json({
    message: "해당 이미지를 찾을 수 없습니다.",
  });
};
