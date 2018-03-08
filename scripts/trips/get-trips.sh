#!/bin/bash

curl "https://salty-everglades-61557.herokuapp.com/trips" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
