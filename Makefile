install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
lint:
	./node_modules/.bin/eslint src/index.js src/bin/brain-games.js
publish:
	npm publish
