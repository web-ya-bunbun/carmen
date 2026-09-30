#!/bin/sh

cd $(dirname $0)
#sass --watch -t nested .:../css --no-cache --sourcemap=none
sass --watch -t expanded .:../css --no-cache --sourcemap=none
#sass --watch -t compact .:../css --no-cache --sourcemap=none
#sass --watch -t compressed .:../css --no-cache --sourcemap=none

#scssフォルダをexpandedでWatch、cssフォルダにコンパイルする