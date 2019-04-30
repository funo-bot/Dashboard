rd /s /q build\dist
CALL vue-cli-service build --production --dest build/dist
cd build
git init
git remote add origin https://github.com/funo-bot/Dashboard.git
git checkout -b builds
git add .
git commit -m "Build"
git push origin builds --force
