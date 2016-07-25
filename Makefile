THIS_DIR:=$(shell pwd)

build: node_modules/
		node build

node_modules: package.json
		npm install

serve:
		cd build ; python -m SimpleHTTPServer

rsync: build
		@rm -rf build/blog/ build/resume.{old,safe,new}/
		@rsync --exclude=".DS_Store" --exclude=".git" --group --perms --delete --stats -acvzP -e ssh build/ vm:/var/www/renoirb/
		#@ssh vm 'rm /var/www/renoirb/talks/2016-Techniques-pour-deployer-WordPress-de-facon-consistante-et-le-rendre-resilient/slides.md'
		#@scp static/talks/2016-Techniques-pour-deployer-WordPress-de-facon-consistante-et-le-rendre-resilient/slides.md vm:/var/www/renoirb/talks/2016-Techniques-pour-deployer-WordPress-de-facon-consistante-et-le-rendre-resilient/slides.md
		@ssh vm 'chmod -R a+r /var/www/renoirb/'

.PHONY: build
