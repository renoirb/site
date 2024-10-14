node_modules/jsonresume-from-yaml/bin/jsonify:
		yarn

.PHONY: resume
resume: static/files/resume/Resume-Renoir-Boulanger.doc

static/files/resume:
	mkdir -p static/files/resume

static/files/resume/Resume-Renoir-Boulanger.doc: static/files/resume static/files/resume/jsonresume-renoirb.json
	-node_modules/.bin/prettier -w --config .prettierrc.js --parser xml lib/runtime/ResumeFodder/template-refined.xml
	-./ResumeFodder export static/files/resume/jsonresume-renoirb.json static/files/resume/Resume-Renoir-Boulanger.doc lib/runtime/ResumeFodder/template-refined.xml
	-node_modules/.bin/prettier -w --config .prettierrc.js --parser xml static/files/resume/Resume-Renoir-Boulanger.doc

# yq -p yaml -o json content/resume/jsonresume-renoirb.yaml
.PHONY: static/files/resume/jsonresume-renoirb.json
static/files/resume/jsonresume-renoirb.json: node_modules/jsonresume-from-yaml/bin/jsonify
	-node_modules/.bin/prettier -w --config .prettierrc.js --prose-wrap always content/resume/jsonresume-renoirb.yaml
	-node_modules/jsonresume-from-yaml/bin/jsonify content/resume/jsonresume-renoirb.yaml
	mv content/resume/jsonresume-renoirb.json static/files/resume/jsonresume-renoirb.json

.PHONY: unpatch
unpatch:
	cp node_modules/@nuxt/content/lib/database.js.orig node_modules/@nuxt/content/lib/database.js
.PHONY: patch
patch:
	cp node_modules/@nuxt/content/lib/database.js node_modules/@nuxt/content/lib/database.js.orig
	patch node_modules/@nuxt/content/lib/database.js nuxt-content-database.patch

.PHONY: deploy-gh
deploy-gh:
	yarn clean
	touch nuxt.config.ts
	BASE_PATH=/site node_modules/.bin/nuxt-ts generate
	cp static/resume/index.html dist/resume/
	cp -r content dist/content
	node_modules/.bin/push-dir --dir=dist --branch=gh-pages --local-branch-name=2020 --cleanup

.PHONY: deploy-prod
deploy-prod:
	yarn clean
	touch nuxt.config.ts
	node_modules/.bin/nuxt-ts generate
	cp static/resume/index.html dist/resume/
	cp -r content dist/content
	node_modules/.bin/push-dir --dir=dist --branch=cf-pages --local-branch-name=2020 --cleanup
