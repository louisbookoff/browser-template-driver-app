'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // if ($(.form-group).val() === $(.confirmation).val())
  $('#message').text('Signed up successful!')
  $('#message').css('background-color', 'green')
  $('.close').click()
  $('#exampleInputEmail1').val('')
  $('#exampleInputPassword1').val('')
  $('#exampleInputPasswordConfirmation').val('')
  // console.log(data)
}

module.exports = {
  signUpSuccess
}
