sudo yum update

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

wget https://raw.githubusercontent.com/apulcino/nodebasic/master/install.sh
chmod +x ./install.sh
wget https://raw.githubusercontent.com/apulcino/nodebasic/master/index.js
wget https://raw.githubusercontent.com/apulcino/nodebasic/master/package.json
npm install
node index.js

