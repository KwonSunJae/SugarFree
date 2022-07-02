#!/bin/bash

#update apt
sudo apt-get install update

#install git, nginx, node, yarn, certbot

sudo apt install git
sudo apt install nginx
sudo sudo curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install npm
node -v
npm -v 
sudo npm install -g yarn
yarn -b
sudo apt install certbot
# git clone repository
git clone -b develop https://github.com/KwonSunJae/SugarFree.git

# nginx config 파일 배치
cd /etc/nginx/sites-enabled
rm -rf default

cp /home/ubuntu/SugarFree/.config/back/default .

#certbot을 통해 ssl 적용
sudo apt-get install snapd
sudo snap install core; sudo snap refresh core
sudo apt-get remove certbot
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot


sudo certbot --nginx -y
sudo systemctl restart nginx
