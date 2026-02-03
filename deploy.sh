#!/bin/bash
# Install surge if not already installed (npx handles this) and deploy the current directory
# Users will need to enter an email and password the first time
echo "Deploying to Surge.sh..."
npx surge ./ om-tiffin-tracker.surge.sh
