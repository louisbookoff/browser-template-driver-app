#!/bin/bash

# TOKEN="BAhJIiU1MDZjOGQ0MzNiYzc3NTExYWQ5NDg0ZWY5YTdmYzVlZQY6BkVG--9e8404028e576ccd43c2205e9b6bd49fb1207cb3" ID=3 PICKUP="Assembly" DROPPOFF="home" PASSENGERS=65 TRIP_DATE="2018-04-21" sh scripts/trips/update-trips.sh

curl "https://salty-everglades-61557.herokuapp.com/trips/${ID}" \
  --include \
  --request PATCH \
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
