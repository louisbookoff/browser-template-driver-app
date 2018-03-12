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

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  $('#exampleInputEmail1').val('')
  $('#exampleInputPassword1').val('')
  $('#exampleInputPasswordConfirmation').val('')
  $('.close').click()
  // console.error(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in succesfully')
  $('#message').css('background-color', 'green')
  // keep but change id for this and temporarily commenting out below
  $('#dashboard').removeClass('hidden')
  // console.log(data)
  store.user = data.user
  // Keep but temporarilly comment out to test
  $('#pageone').toggleClass('hidden')
  $('.close').click()
  $('#InputEmail1').val('')
  $('#InputPassword1').val('')
}
const signInFailure = function (error) {
  $('#message').text('Error on sign in, try again!')
  $('#message').css('background-color', 'red')
  $('#InputEmail1').val('')
  $('#InputPassword1').val('')
  $('.close').click()
  console.error(error)
}

const changePasswordSuccess = function () {
  $('#message').text('You have changed your password succesfully')
  $('#message').css('background-color', 'green')
  $('#old-password').val('')
  $('#new-password').val('')
  // console.log('change password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').css('background-color', 'red')
  $('#old-password').val('')
  $('#new-password').val('')
  console.error(error)
}

const signOutSuccess = function () {
  $('#message').text('You have signed out succesfully')
  $('#message').css('background-color', 'green')
  $('#dashboard').toggleClass('hidden')
  $('#pageone').removeClass('hidden')
  // console.log('Signed out successfully')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const createTripSuccess = function (data) {
  $('#message').text('You have sucessfully created a new game!')
  $('#message').css('background-color', 'green')
  // console.log(events)
  $('.update').val('')
  store.trip = data.trip // TODO:come back to this
}

const createTripFailure = function () {
  $('#message').text('Error while creating a trip')
  $('#message').css('background-color', 'red')
  $('.update').val('')
}

const getTripsSuccess = function (data) {
  console.log(data)
  // const showTableHTML = showListTemplate({ trips: data.trips })
  // $('.trips').attr(showTableHTML)
  $('.table').text(JSON.stringify(data.trips, null, 2))
  $('table').css('color', 'blue')
}

const getTripsFailure = function (data) {
  $('#message').text('Check your internet connection could not retrieve trips')
  $('#message').css('color', 'red')
}

const updateTripSuccess = function (data) {
  $('#message').text('You have sucessfully updated that trip!')
  $('#message').css('background-color', 'green')
  $('.update').val('')
  // console.log(events)
  store.trip = data.trip // TODO:come back to this
}

const updateTripFailure = function () {
  $('#message').text('Error while updating trip')
  $('#message').css('background-color', 'red')
  $('.update').val('')
}

const deleteTripSuccess = function (data) {
  $('#message').text('You have succesfully a delete trip')
  $('message').css('background-color', 'green')
}

const deleteTripFailure = function () {
  $('#message').text('Deleting trip failed')
  $('message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createTripSuccess,
  createTripFailure,
  getTripsSuccess,
  getTripsFailure,
  updateTripSuccess,
  updateTripFailure,
  deleteTripSuccess,
  deleteTripFailure
}
