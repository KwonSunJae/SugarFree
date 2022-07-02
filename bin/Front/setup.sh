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
rm -rf default

cp /home/ubuntu/SugarFree/.config/front/default .

#certbot을 통해 ssl 적용
sudo apt-get install -y snapd
sudo snap install -y core; sudo snap refresh core
sudo apt-get remove certbot
sudo snap install --classic -y certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot


sudo certbot --nginx
ksun4131@gmail.com
Y
Y
dev-front-tutor.openinfra-kr.org
cd /home/ubuntu/SugarFree/Front
yarn install
yarn build

sudo systemctl restart nginx
