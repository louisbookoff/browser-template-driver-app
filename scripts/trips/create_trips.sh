#!/bin/bash

curl "https://salty-everglades-61557.herokuapp.com/trips" \
--include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "trip": {
      "user_id": "'"${USER_ID}"'",
      "pickup_location": "'"${PICKUP}"'",
      "drop_off_location": "'"${DROPOFF}"'",
      "passengers": "'"${PASSENGERS}"'",
      "trip_date": "'"${TRIP_DATE}"'"
    }
  }'

echo
