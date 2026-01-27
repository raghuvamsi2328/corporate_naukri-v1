# Change from node:18-alpine to node:20-alpine
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Double check if your dist path is correct (my-app vs corporate-naukri)
COPY --from=build /app/dist/my-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]