pwd := $(shell pwd)

googleFontsSelection := subsets=latin&subset=latin-ext&variants=300,300i,400,400i,500,500i,700,regular,italic,500italic,700italic
googleFontsBaseUrl := https://google-webfonts-helper.herokuapp.com/api/fonts

%.md: node_modules
	node_modules/.bin/prettier --parser markdown --write '**/*.md'

%.json: node_modules
	node_modules/.bin/prettier --parser json --write '**/*.json'

%.scss: node_modules
	node_modules/.bin/stylelint '**/*.scss'

.DEFAULT: fix
.PHONY: fix
fix: node_modules %.md %.json %.scss
	yarn lint:fix

.PHONY: generate
generate: node_modules
	node_modules/.bin/nuxt generate

.PHONY: sort-package-json
sort-package-json: node_modules
	npx sort-package-json

node_modules:
	yarn

.PHONY: fonts
fonts: node_modules assets/fonts/element-icons.woff assets/fonts/oxygen-v8-latin-300.woff2

_packages:
	mkdir _packages

assets/fonts:
	mkdir -p assets/fonts/

assets/fonts/element-icons.%: assets/fonts
	cp node_modules/element-ui/lib/theme-chalk/fonts/* assets/fonts/

_packages/fonts-oxygen.zip: _packages
	curl -sSL "${googleFontsBaseUrl}/oxygen?download=zip&${googleFontsSelection}" -o _packages/fonts-oxygen.zip

assets/fonts/oxygen-v8-latin-300.woff2: assets/fonts _packages/fonts-oxygen.zip
	unzip _packages/fonts-oxygen.zip -d assets/fonts/

.PHONY: clean
clean:
	rm -rI assets/fonts/* node_modules/ .nuxt/
