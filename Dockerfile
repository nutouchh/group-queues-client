FROM node:current-slim

WORKDIR /client

COPY /src /client/src
COPY index.html /client/
COPY package*.json /client/
COPY tsconfig*.json /client/
COPY vite.config.ts /client/
COPY /.storybook /client/.storybook

RUN npm i && npm cache clean --force \
	&& npm i @esbuild/linux-x64 esbuild-linux-64 \
	&& npm run build

EXPOSE 80

# development
# CMD ["npm", "run", "dev"]

# production
CMD ["npm", "run", "preview"]