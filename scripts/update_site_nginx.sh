#!/bin/bash

set -e

date_suffix=$(date +'%m-%d-%y')
rm -rf "/var/www/backup/site-$date_suffix"
mv /var/www/annoq-site "/var/www/backup/site-$date_suffix"
mv /home/tadmin/projects/annoq-site/dist/ /var/www/annoq-site
