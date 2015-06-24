build: node_modules/
	node_modules/.bin/metalsmith

node_modules: package.json
	npm install

rsync: build
	@rsync --progress --delete -az -e ssh build/ newvm:/var/www/renoirb/

.PHONY: build
