#!/bin/bash

curl "https://salty-everglades-61557.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
  }
}'

echo
