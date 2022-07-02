#!/bin/bash

#update apt
sudo apt-get install update

#install git, nginx, node, yarn, certbot

sudo apt install -y  git
sudo apt install -y  nginx
sudo sudo curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install -y npm
node -v
npm -v 
sudo npm install -g yarn
yarn -b
sudo apt install -y certbot
# git clone repository
git reset --hard
git fetch
git pull
# nginx config 파일 배치
cd /etc/nginx/sites-enabled
sudo rm -rf default

sudo cp /home/ubuntu/SugarFree/.config/front/default .

#certbot을 통해 ssl 적용
sudo apt-get install -y snapd
sudo snap install  core; sudo snap refresh core
sudo apt-get remove -y certbot
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot


sudo certbot --nginx

cd /home/ubuntu/SugarFree/Front
yarn install
yarn build

sudo systemctl restart nginx
