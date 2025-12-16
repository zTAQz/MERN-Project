# Sử dụng Node.js bản nhẹ (Alpine)
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file package.json trước để cài thư viện (tận dụng cache)
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ code còn lại vào container
COPY . .

# Mở port 5000 (Port backend của bạn)
EXPOSE 5000

# Lệnh chạy server
CMD ["node", "index.js"]