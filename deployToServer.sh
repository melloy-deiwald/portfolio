#!/bin/bash

# Check if the remote username argument is provided
if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <remote_username> [skip_build]"
  exit 1
fi

remote_username="$1"
remote_server="melloy.myftp.org"  # Replace with your server address
skip_build=false

# Check if the "skip_build" option is provided
if [ "$#" -eq 2 ] && [ "$2" == "skip_build" ]; then
  skip_build=true
fi

# Run npm build if skip_build is not set
if [ "$skip_build" == false ]; then
  npm run build

  # Check if build was successful
  if [ $? -ne 0 ]; then
    echo "npm run build failed. Exiting..."
    exit 1
  fi
fi

# Upload build folder to remote server using scp
echo "Uploading build folder to $remote_username@$remote_server:/var/www/html/portfolio..."
scp -r build "$remote_username@$remote_server:/home/$remote_username/portfolio"
ssh $remote_username@$remote_server "sh /home/$remote_username/updatePortfolio.sh"

