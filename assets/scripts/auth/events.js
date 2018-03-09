'use strict'

const api = require('./api')
const getFormFields = require('.../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateTrips = function (event) {
  event.preventDefault()
  // pass event.target to getFormFields to create a data object
  const data = getFormFields(event.target)

  // pass data to createTrips function
  api.createTrips(data)
    .then(ui.createTripSuccess)
    .catch(ui.createTripFailure)
}

const onGetTrips = function () {
  event.preventDefault()
  api.getTrips()
    .then(ui.getTripsSuccess)
    .catch(ui.getTripsFailure)
}

const addHandlers = () => {
  $('.signup-form').on('submit', onSignUp)
  $('.signin-form').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-trip').on('submit', onCreateTrips) // TODO
  $('.trips').on('click', onGetTrips)
}

module.exports = {
  addHandlers
}
