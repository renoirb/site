THIS_DIR:=$(shell pwd)

build: node_modules/
		npm run build

node_modules: package.json
		npm install

local:
		npm run serve

rsync: build
	@rsync --progress --delete -az -e ssh build/ newvm:/var/www/renoirb/

.PHONY: build
