#!/bin/bash

set -e

date_suffix=$(date +'%m-%d-%y')
project_dir="/home/tadmin/projects/annoq-site"
dist_dir="$project_dir/dist"

if [ ! -d "$dist_dir/docs" ]; then
	echo "Missing integrated docs build at $dist_dir/docs"
	echo "Run: npm run build:site"
	exit 1
fi

mkdir -p /var/www/backup

if [ -d "/var/www/annoq-site" ]; then
	rm -rf "/var/www/backup/site-$date_suffix"
	mv /var/www/annoq-site "/var/www/backup/site-$date_suffix"
fi

mv "$dist_dir" /var/www/annoq-site
