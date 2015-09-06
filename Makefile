THIS_DIR:=$(shell pwd)

build: node_modules/
	node build

node_modules: package.json
	npm install

local:
			docker run -ti --rm \
			-p 80:80 \
			-v $(THIS_DIR)/build:/usr/share/nginx/html \
			nginx

rsync: build
	@rsync --progress --delete -az -e ssh build/ newvm:/var/www/renoirb/

.PHONY: build
