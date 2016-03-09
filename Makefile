THIS_DIR:=$(shell pwd)

build: node_modules/
		node build

node_modules: package.json
		npm install

serve:
		node serve

rsync: build
		@rm -rf build/blog/ build/resume.{old,safe,new}/
		@rsync --exclude=".DS_Store" --exclude=".git" --group --perms --delete --stats -acvzP -e ssh build/ vm:/var/www/renoirb/
		@ssh vm 'chmod -R a+r /var/www/renoirb/'

.PHONY: build
