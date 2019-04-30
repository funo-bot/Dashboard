rd /s /q build\dist
CALL vue-cli-service build --production --dest build/dist
cd build
dir
git init
git remote set-url origin https://github.com/funo-bot/Dashboard.git
git add .
git commit -m "Build"
git push origin builds --force
