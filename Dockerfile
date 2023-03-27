FROM node:current-slim

WORKDIR /client

COPY /src ./src
COPY index.html .
COPY package*.json .
COPY tsconfig*.json .
COPY vite.config.ts .
COPY /.storybook .

RUN npm install && npm cache clean --force

RUN npm install @esbuild/linux-x64 esbuild-linux-64

RUN npm run build

EXPOSE 80

# development
CMD ["npm", "run", "dev"]

# production
# CMD ["npm", "run", "preview"]