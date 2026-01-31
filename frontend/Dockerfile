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

# Copy custom nginx configuration so SPA routes are correctly resolved.
# NOTE: Ensure the `nginx.conf` is included in the Docker build context (e.g. build from repo root)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]