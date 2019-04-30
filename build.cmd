rd /s /q build\dist
CALL vue-cli-service build --production --dest build/dist
git checkout -b builds
git add .
git commit -m "Build"
git push origin builds --force
git checkout -b master
