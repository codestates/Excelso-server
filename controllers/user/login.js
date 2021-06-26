const { user } = require("../../models");

module.exports = async (req, res) => {
  const { username, password } = req.body;
  await user.findOne({
    where: {
      username,
      password,    
    }
  })
  .then((userInfo) => {
    const { id, email, nickname } = userInfo;
    if(!userInfo) {
      return res.status(401).json({
        data: null,
        message: 'Invalid user or Wrong password'
      })
    }
    res.status(200).json({
      accessToken,
      data: {
        id,
        email,
        nickname,   
      }  
    })
  }
  ).catch(err => {
    return res.status(500).json({
      data: null,
      message: 'Server Error' 
    })
  })    
}