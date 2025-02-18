# 使用 Node.js 官方镜像
FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 复制代码 排除 node_modules
COPY . .

# 暴露 gRPC 端口
EXPOSE 50051

# 启动 gRPC 服务器
CMD ["npm", "run", "start", "g-user"]