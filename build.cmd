rmdir build\dist
vue-cli-service build --production --dest build/dist
cd build
git init
git remote set-url origin https://github.com/funo-bot/Dashboard.git
git add .
git commit -m "Build"
git push origin builds --force
