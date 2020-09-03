node_modules/jsonresume-from-yaml/bin/jsonify:
		yarn

.PHONY: resume
resume: static/files/resume/Resume-Renoir-Boulanger.doc

static/files/resume:
	mkdir -p static/files/resume

static/files/resume/Resume-Renoir-Boulanger.doc: static/files/resume static/files/resume/jsonresume-renoirb.json
	-./ResumeFodder export static/files/resume/jsonresume-renoirb.json static/files/resume/Resume-Renoir-Boulanger.doc lib/runtime/ResumeFodder/template-refined.xml

.PHONY: static/files/resume/jsonresume-renoirb.json
static/files/resume/jsonresume-renoirb.json: node_modules/jsonresume-from-yaml/bin/jsonify
	-node_modules/.bin/prettier --config .prettierrc.js --prose-wrap always content/resume/jsonresume-renoirb.yaml --write
	-node_modules/jsonresume-from-yaml/bin/jsonify content/resume/jsonresume-renoirb.yaml
	mv content/resume/jsonresume-renoirb.json static/files/resume/jsonresume-renoirb.json

.PHONY: static/files/resume/Resume-Renoir-Boulanger.doc
static/files/resume/Resume-Renoir-Boulanger.doc: static/files/resume static/files/resume/jsonresume-renoirb.json
