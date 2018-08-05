#!/bin/sh

# Show what's happening as it happens
set -x
rm -fr output
./ssi_expander.py output

# delete certain files from output directory
rm output/ssi*
rm output/readme.md
rm output/send_to_output.sh
rm output/README.txt

# dereference symbolic links and recursively copy
sudo cp --recursive --dereference output/* /var/www/html

# stop showing everything that's happening.
set +x
