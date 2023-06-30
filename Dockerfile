# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=development

RUN mkdir -p /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install app dependencies
# RUN npm install --development
RUN npm install --silent
# RUN npx prisma generate

# Copy all files to the app location
COPY . ./
# 👇 copy prisma directory
# COPY --from=builder /app/prisma ./prisma
# RUN npx prisma migrate dev --name dockerfile


# Expose the port
EXPOSE 4010

# Start the application in dev mode
# CMD ["npm", "run", "start:dev"]
CMD [  "npm", "run", "start:dev" ]