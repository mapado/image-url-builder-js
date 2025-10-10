.PHONY: publish

publish:
	yarn lint
	yarn test
	yarn build
	ALLOW_PUBLISH=1 npm publish
