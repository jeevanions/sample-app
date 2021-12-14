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
a2enmod proxy
a2enmod proxy_http
a2enmod proxy_balancer
a2enmod lbmethod_byrequests
apachectl configtest

systemctl reload apache2
systemctl restart apache2


cd ../backend

npm install

# Replace secrets in the .env file
sed -i 's/__DB_HOST__/<ENTER YOUR DB HOST>/g' .env
sed -i 's/__USERNAME__/<ENTER YOUR DB USERNAME>/g' .env
sed -i 's/__PASSWORD__/<ENTER YOUR DB PASSWORD>/g' .env
sed -i 's/__DBNAME__/<ENTER YOUR DB NAME>/g' .env

# Move the service file to systemd and enable at startup
cp backend.service /etc/systemd/system/backend.service

# Run and enable backend service
systemctl start backend 
systemctl enable backend
