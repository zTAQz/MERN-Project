# Sử dụng Node.js
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và cài đặt thư viện
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Mở port 3000 (React mặc định)
EXPOSE 3000

# Lệnh chạy React
CMD ["npm", "start"]