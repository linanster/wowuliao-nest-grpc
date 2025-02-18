FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 以便安装依赖
COPY package*.json ./


# 复制整个项目到容器
COPY . .

# 编译 NestJS 项目
RUN npm run build

# 设置容器启动时执行的命令
CMD ["npm", "run", "start", "g-http"]

# 暴露 HTTP 服务的端口
EXPOSE 3000