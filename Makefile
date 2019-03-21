
%.md: node_modules
	node_modules/.bin/prettier --parser markdown --write '**/*.md'

%.js: node_modules
	node_modules/.bin/prettier --parser babel --write '**/*.js'

.DEFAULT: fix
.PHONY: fix
fix: node_modules %.md %.js

.PHONY: sort-package-json
sort-package-json: node_modules
	npx sort-package-json

node_modules:
	yarn
