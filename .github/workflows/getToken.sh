#!/bin/bash

# Define variables
TENANT="shuruihrad"
POLICY="B2C_1_testflow"
CLIENT_ID="01f94e14-ef3e-44f7-87bb-2ec5276713dc"
CLIENT_SECRET="$B2C_CLIENT_SECRET"
API_ID_URI="https://shuruihrad.onmicrosoft.com/5ae98d4a-3924-475d-aa36-71b012a1e8f0"

# Use variables in the curl request
response=$(curl --location --request POST "https://${TENANT}.b2clogin.com/${TENANT}.onmicrosoft.com/${POLICY}/oauth2/v2.0/token" \
--header "Content-Type: application/x-www-form-urlencoded" \
--data-urlencode "grant_type=client_credentials" \
--data-urlencode "client_id=${CLIENT_ID}" \
--data-urlencode "client_secret=${CLIENT_SECRET}" \
--data-urlencode "scope=${API_ID_URI}/.default")

access_token=$(echo "$response" | jq -r '.access_token')
echo "$access_token"