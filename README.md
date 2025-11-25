# Thử Thách JavaScript 🚀

Chào mừng bạn đến với **Thử Thách JavaScript**! Repository này chứa 10 bài tập đầu tiên từ kế hoạch học tập LeetCode, được thiết kế để giúp bạn thành thạo các kiến thức JavaScript cơ bản thông qua thực hành.

## 🛠 Hướng Dẫn Cài Đặt Môi Trường

### Bước 1: Cài Đặt Git

#### Windows:

1. Truy cập [https://git-scm.com/download/windows](https://git-scm.com/download/windows)
2. Tải xuống và chạy file cài đặt
3. Làm theo hướng dẫn cài đặt (có thể giữ các cài đặt mặc định)
4. Mở Command Prompt hoặc PowerShell và kiểm tra:
   ```bash
   git --version
   ```

#### macOS:

1. Cài đặt Homebrew (nếu chưa có):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Cài đặt Git:
   ```bash
   brew install git
   ```
3. Kiểm tra cài đặt:
   ```bash
   git --version
   ```

#### Linux (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install git
git --version
```

### Bước 2: Cài Đặt Node.js

#### Windows & macOS:

1. Truy cập [https://nodejs.org](https://nodejs.org)
2. Tải xuống phiên bản LTS (Long Term Support)
3. Chạy file cài đặt và làm theo hướng dẫn
4. Kiểm tra cài đặt:
   ```bash
   node --version
   npm --version
   ```

#### Linux (Ubuntu/Debian):

```bash
# Cài đặt Node.js từ NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
npm --version
```

### Bước 3: Cấu Hình Git (Lần đầu sử dụng)

```bash
# Thiết lập tên người dùng
git config --global user.name "Tên Của Bạn"

# Thiết lập email
git config --global user.email "email@example.com"

# Kiểm tra cấu hình
git config --list
```

## 📚 Hướng Dẫn Sử Dụng Repository

### Bước 1: Clone Repository

**Clone repository về máy tính:**

```bash
git clone https://github.com/UmiKuni/js_challenge.git
cd js-30-days-challenge
```

### Bước 2: Tạo Nhánh Cá Nhân

```bash
# Tạo và chuyển sang nhánh mới với tên của bạn
git checkout -b ten-cua-ban-solutions

# Ví dụ:
git checkout -b nguyen-van-a-solutions
```

### Bước 3: Khám Phá Cấu Trúc Project

```
js-30-days-challenge/
├── exercises/                 # Thư mục chứa bài tập
│   ├── 01-hello-world.js
│   ├── 02-counter.js
│   ├── 03-to-be-or-not-to-be.js
│   └── ... (8 bài tập khác)
├── test-runner.js            # File chạy test tự động
└── README.md      # File hướng dẫn sử dụng (bạn đang đọc đây)
```

### Bước 4: Làm Bài Tập

1. **Mở một bài tập** trong thư mục `exercises/`:

   ```bash
   # Mở với VS Code (nếu đã cài)
   code exercises/01-hello-world.js

   # Hoặc mở với editor khác
   notepad exercises/01-hello-world.js  # Windows
   nano exercises/01-hello-world.js     # Linux/macOS
   ```

2. **Đọc mô tả bài toán** ở phần comment đầu file

3. **Thay thế phần TODO** bằng code của bạn:

   ```javascript
   // Trước khi làm:
   function createHelloWorld() {
     // TODO: Implement this function
     return function (...args) {};
   }

   // Sau khi làm:
   function createHelloWorld() {
     return function (...args) {
       return "Hello World";
     };
   }
   ```

4. **Lưu file** sau khi hoàn thành

### Bước 5: Kiểm Tra Bài Làm

Chạy test để kiểm tra bài làm của bạn:

```bash
# Chạy test cho tất cả bài tập
node test-runner.js

# Kết quả sẽ hiển thị:
# ✅ PASS: Tên test - khi đúng
# ❌ FAIL: Tên test - khi sai
```

**Ví dụ kết quả:**

```
==========================================
   30 Days of JavaScript Challenge
   Test Runner - Student Edition
==========================================

Testing Problem 1: Create Hello World Function
✅ PASS: Basic call with no arguments
✅ PASS: Call with multiple arguments
...

Testing Problem 2: Counter
❌ FAIL: Initial call returns starting value - Expected 10 but got undefined
...

==========================================
   Test Summary
==========================================
Total Tests: 100
Passed: 15
Failed: 85

📝 Keep working! You're at 15.0% completion.
💡 Review the failed tests and try again!
```

### Bước 6: Commit Và Push Code

1. **Kiểm tra thay đổi:**

   ```bash
   git status
   git diff
   ```

2. **Add file đã thay đổi:**

   ```bash
   # Add tất cả files
   git add .

   # Hoặc add từng file cụ thể
   git add exercises/01-hello-world.js
   ```

3. **Commit với message mô tả:**

   ```bash
   git commit -m "Hoàn thành bài 1: Create Hello World Function"

   # Hoặc commit nhiều bài cùng lúc:
   git commit -m "Hoàn thành bài 1-3: Hello World, Counter, To Be Or Not To Be"
   ```

4. **Push lên GitHub:**

   ```bash
   # Lần đầu push nhánh mới:
   git push -u origin ten-cua-ban-solutions

   # Các lần push sau:
   git push
   ```

### Bước 7: Theo Dõi Tiến Độ

Bạn có thể xem tiến độ của mình thông qua:

- **Test runner**: Chạy `node test-runner.js` để xem số bài đã hoàn thành
- **GitHub**: Xem các commit đã push lên nhánh của bạn
- **Local git log**: `git log --oneline` để xem lịch sử commit

## 📝 Danh Sách Bài Tập

| #   | Tên Bài                         | Độ Khó     | Bắt buộc | Khái Niệm Chính                        |
| --- | ------------------------------- | ---------- | -------- | -------------------------------------- |
| 1   | **Create Hello World Function** | Dễ         | Có       | Closure, Function Return               |
| 2   | **Counter**                     | Dễ         | Có       | Closure, Quản lý State                 |
| 3   | **To Be Or Not To Be**          | Dễ         | Có       | Object, Method, Error Handling         |
| 4   | **Counter II**                  | Dễ         | Có       | Object, State, Method Chaining         |
| 5   | **Apply Transform (Map)**       | Dễ         | Có       | Vòng lặp Array, Higher-Order Functions |
| 6   | **Filter Elements**             | Dễ         | Có       | Lọc Array, Predicate Functions         |
| 7   | **Array Reduce**                | Trung Bình | Có       | Accumulation, Folding                  |
| 8   | **Function Composition**        | Trung Bình | Không    | Kết hợp Function, Pipeline             |
| 9   | **Arguments Length**            | Dễ         | Không    | Rest Parameters, Arguments Object      |
| 10  | **Allow One Function Call**     | Trung Bình | Không    | Closure, Kiểm soát State               |

## 🔧 Các Lệnh Git Thường Dùng

```bash
# Xem trạng thái hiện tại
git status

# Xem sự thay đổi
git diff

# Add file
git add tên-file
git add .                # Add tất cả

# Commit
git commit -m "Thông điệp commit"

# Push
git push

# Pull (cập nhật từ remote)
git pull

# Xem lịch sử commit
git log --oneline

# Tạo nhánh mới
git checkout -b tên-nhánh-mới

# Chuyển nhánh
git checkout tên-nhánh

# Xem danh sách nhánh
git branch
```

## 🐛 Xử Lý Lỗi Thường Gặp

### Lỗi: "node: command not found"

**Nguyên nhân:** Chưa cài đặt Node.js hoặc chưa thêm vào PATH
**Giải pháp:** Cài đặt lại Node.js từ trang chính thức

### Lỗi: "git: command not found"

**Nguyên nhân:** Chưa cài đặt Git
**Giải pháp:** Cài đặt Git theo hướng dẫn ở trên

### Lỗi: "Module not found"

**Nguyên nhân:** Thiếu `module.exports` trong file bài tập
**Giải pháp:** Đảm bảo cuối mỗi file có `module.exports = tên-function`

### Lỗi: "Permission denied" khi push

**Nguyên nhân:** Chưa xác thực GitHub hoặc không có quyền push
**Giải pháp:**

- Đảm bảo bạn có quyền push vào repository
- Thiết lập SSH key hoặc Personal Access Token
- Liên hệ quản trị viên repository nếu cần cấp quyền

### Test không pass dù code đúng

**Nguyên nhân:** Có thể sai logic hoặc edge case
**Giải pháp:**

- Đọc kỹ message lỗi
- Sử dụng `console.log()` để debug
- Kiểm tra các trường hợp đặc biệt (empty array, null, undefined)

## 💡 Mẹo Học Tập Hiệu Quả

### 📖 Trước Khi Code

- Đọc kỹ đề bài và ví dụ
- Hiểu rõ input/output mong muốn
- Vạch ra thuật toán trước khi code

### 🧪 Trong Quá Trình Code

- Code từng phần nhỏ, test thường xuyên
- Sử dụng `console.log()` để debug
- Đặt tên biến có ý nghĩa

### ✅ Sau Khi Code

- Chạy test để kiểm tra
- Review code để tối ưu
- Commit với message rõ ràng

## 📚 Tài Liệu Tham Khảo

### JavaScript Cơ Bản

- [MDN JavaScript Guide](https://developer.mozilla.org/vi/docs/Web/JavaScript/Guide) (có tiếng Việt)
- [JavaScript.info](https://javascript.info/) (tiếng Anh, chất lượng cao)
- [Học JavaScript miễn phí](https://www.codecademy.com/learn/introduction-to-javascript) (Codecademy)

### Git & GitHub

- [Git Handbook](https://guides.github.com/introduction/git-handbook/) (tiếng Anh)
- [Học Git cơ bản](https://backlog.com/git-tutorial/vn/) (tiếng Việt)
- [GitHub Learning Lab](https://lab.github.com/) (thực hành Git)

### Công Cụ Hữu Ích

- **VS Code**: Editor code miễn phí, mạnh mẽ
- **Chrome DevTools**: Debug JavaScript trên browser
- **Node.js REPL**: Test code nhanh với lệnh `node`

---

**Chúc bạn học tập vui vẻ và thành công!** 🎉

Hãy nhớ rằng, mọi chuyên gia đều từng là người mới bắt đầu. Hãy kiên nhẫn, luyện tập đều đặn, và tôn vinh mọi tiến bộ của bản thân!

**💡 Lưu ý quan trọng:** Báo cáo không chỉ là yêu cầu mà còn giúp bạn tự đánh giá và cải thiện kỹ năng. Hãy viết một cách chân thành và chi tiết!

---

_Thử thách này được lấy cảm hứng từ kế hoạch học tập "30 Days of JavaScript" của LeetCode. Ghé thăm [LeetCode](https://leetcode.com/) để có thêm nhiều thử thách lập trình!_
