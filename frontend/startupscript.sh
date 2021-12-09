apt update
apt install apache2 nodejs npm cmdtest -y
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get install -y nodejs

cd /opt
mkdir app
git clone https://github.com/jeevanions/sample-app.git app

# Build frontend and place the app in apache server folder


cd /opt/app/frontend
npm install
npm run-script build
cp apache-app.conf /etc/apache2/sites-available/
a2ensite apache-app.conf
a2dissite 000-default.conf
a2enmod rewrite
systemctl reload apache2
sudo apachectl configtest

cd ../backend

npm install
npm install -g pm2
pm2 start index.js
pm2 startup ubuntu