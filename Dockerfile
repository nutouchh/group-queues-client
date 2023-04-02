FROM node:current-slim

WORKDIR /client

COPY /src ./src
COPY index.html .
COPY package*.json .
COPY tsconfig*.json .
COPY vite.config.ts .
COPY /.storybook .

RUN npm i && npm cache clean --force \
	&& npm i @esbuild/linux-x64 esbuild-linux-64 \
	&& npm run build

EXPOSE 80

# development
# CMD ["npm", "run", "dev"]

# production
CMD ["npm", "run", "preview"]