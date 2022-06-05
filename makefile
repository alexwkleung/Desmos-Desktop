.PHONY: package
package:
	npm run package

.PHONY: package-arm
package-arm:
	npm run package-arm

.PHONY: build
build: 
	npm run build

.PHONY: electron
electron:
	npm run electron