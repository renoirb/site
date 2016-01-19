THIS_DIR:=$(shell pwd)

build: node_modules/
		node build

node_modules: package.json
		npm install

serve:
		node serve

rsync: build
		@rsync --exclude=".DS_Store" --progress --delete -az -e ssh build/ vm:/var/www/renoirb/
		@ssh vm 'chmod -R a+r /var/www/renoirb/'

.PHONY: build
