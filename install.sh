yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_6.x | sudo -E bash -
yum install nodejs
node -v

wget https://raw.githubusercontent.com/apulcino/nodebasic/master/index.js
wget https://raw.githubusercontent.com/apulcino/nodebasic/master/package.json
npm install
node index.js

