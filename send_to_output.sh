#!/bin/sh

rm -fr output
./ssi_expander.py output

# delete the contents of the /var/www/html directory
sudo rm -fr /var/www/html/*

# dereference symbolic links and recursively copy
sudo cp --recursive --dereference output/* /var/www/html
