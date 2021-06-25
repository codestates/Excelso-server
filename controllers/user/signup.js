const { user } = require("../../models")

module.exports = async (req, res) => {
  const { email, password, nickname } = req.body;
  if(!email || !password || !nickname) {
    return res.status(409).json({
      data: null,
      message: '모든 내용을 입력하세요'
    })
  }

  await user.findOrCreate({
    where: {
      email
    },
    defaults: {
      password,
      nickname,
    }
  })
  .then(([result, create]) => {
    if(!create) {
      return res.status(409).json({
        data: null,
        message: '이미 존재하는 닉네임입니다'
      })   
    }
    res.status(200).json({
      data: {
        id: result.dataValues.id
      }, 
       message: "회원가입 성공적으로 완료되었습니다."
    })  
  })
  .catch(err => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    })  
  })
}