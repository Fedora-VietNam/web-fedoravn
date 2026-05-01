# Dự án Fedora Vietnam (web-fedoravn)

Dự án phát triển nền tảng cộng đồng Fedora Việt Nam (fedora.vn).

## 🚀 Công Nghệ Sử Dụng (Tech Stack)
* **Frontend**: Next.js 15 (App Router), React, Tailwind CSS v4, Next-Intl (Đa ngôn ngữ), Framer Motion.
* **Backend**: Spring Boot (Dự kiến tích hợp trong tương lai).
* **Database**: SQLite (hiện tại cho Dev) -> PostgreSQL (dự kiến cho Production). ORM: Prisma.
* **Authentication**: Next-Auth v5 (Auth.js) / Cấu hình CSP & Security Headers nghiêm ngặt.

## 📌 Quy tắc Viết Code (Coding Conventions & Rules)

Để đảm bảo source code luôn sạch sẽ (Clean Code) và dễ bảo trì, toàn bộ anh em dev tham gia dự án cần tuân thủ nghiêm ngặt các quy tắc sau:

### 1. Cấu trúc thư mục (Directory Structure)
* **Tính Module hóa**: Mỗi chức năng lớn (Docs, Forum, Auth) phải nằm trong thư mục riêng biệt tại `frontend/app/` và `frontend/components/`. (Ví dụ: `app/docs`, `components/docs`).
* Không viết chung tất cả UI vào một file. Tách nhỏ Component nếu file vượt quá 200 dòng.

### 2. Tiêu chuẩn Frontend (Next.js & React)
* **Server & Client Components**: Mặc định Next.js sử dụng Server Components. Chỉ sử dụng `"use client"` ở file có chứa state (`useState`, `useEffect`) hoặc các sự kiện tương tác (`onClick`). Đẩy `"use client"` xuống các component con sâu nhất có thể để tối ưu SEO và tốc độ load.
* **Styling**: Sử dụng **Tailwind CSS**. Hạn chế viết CSS thuần trừ khi cần custom quá phức tạp (như file `globals.css`).
* **Đa ngôn ngữ (i18n)**: TUYỆT ĐỐI không hardcode text tiếng Việt hay tiếng Anh trực tiếp vào UI. Mọi text hiển thị cho người dùng phải thông qua hàm `t()` của thư viện `next-intl` và khai báo key trong `i18n/messages/vi.json` & `en.json`.

### 3. Quy chuẩn Đặt tên (Naming Conventions)
* **Thư mục & Tệp tin**: Sử dụng chữ thường, ngăn cách bằng dấu gạch ngang (kebab-case). Ví dụ: `login-form.tsx`, `docs-content.tsx`.
* **React Components & Interfaces**: Sử dụng `PascalCase` (viết hoa chữ cái đầu). Ví dụ: `export function LoginForm() {}`.
* **Biến & Hàm (Variables & Functions)**: Sử dụng `camelCase`. Ví dụ: `handleUserLogin()`, `isAuthenticated`.

### 4. Bảo mật (Security First)
* Mọi dữ liệu người dùng nhập (form input) đều phải được validate chặt chẽ (khuyên dùng thư viện `zod`).
* Kiểm soát Security Headers (CSP, X-Frame-Options) tại `next.config.ts` để chống các cuộc tấn công Clickjacking và XSS (đã được cấu hình sẵn).
* Không bao giờ log Mật khẩu, Token, hoặc Database URL ra màn hình Console. Các biến môi trường nhạy cảm phải nằm ở file `.env.local` và tuyệt đối không được push lên GitHub.
* Database cục bộ (ví dụ: `dev.db`, `*.sqlite`) luôn phải nằm trong `.gitignore` (đã được cấu hình sẵn).

### 5. Quy trình Commit Git
* Viết commit message rõ ràng, ngắn gọn theo chuẩn `[Loại]: [Mô tả]`. Các loại phổ biến:
  * `feat:` Tính năng mới
  * `fix:` Sửa lỗi
  * `refactor:` Tối ưu code không làm thay đổi logic
  * `docs:` Viết/cập nhật tài liệu
* Ví dụ: `feat: Thêm chức năng đăng nhập bằng username`

## 🛠 Hướng dẫn chạy dự án (Local Development)

```bash
cd frontend
npm install
npx prisma db push
npm run dev
```
