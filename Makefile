THIS_DIR:=$(shell pwd)

build: node_modules/
		node build

node_modules: package.json
		npm install

local:
		node serve

rsync: build
	@rsync --progress --delete -az -e ssh build/ newvm:/var/www/renoirb/

.PHONY: build
