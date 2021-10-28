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
rm output/h2o.conf

# delete the contents of the /var/www/html directory
#sudo rm -fr /var/www/html/*

# dereference symbolic links and recursively copy
gcp --recursive --dereference output/* ../byronka.github.io

# stop showing everything that's happening.
set +x

echo ''
echo 'Next step:'
echo 'now go to ../byronka.github.io and commit/push'
