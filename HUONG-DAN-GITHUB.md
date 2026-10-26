# Đưa trang quét lên GitHub Pages bằng VS Code (D67)

Trang quét = thư mục `trang-quet/` này (file chính `index.html`). Thư mục này là 1 **repo Git riêng**, tách khỏi phần còn lại của dự án
(phần Apps Script vẫn đẩy bằng `clasp push` như cũ). Mã nguồn trang **công khai** — trang KHÔNG chứa mật khẩu / khoá nào.
Tài khoản GitHub `hoangng2219` → địa chỉ trang sẽ là **https://hoangng2219.github.io/quet/**.

## A. Tạo repo + đẩy lên GitHub (làm 1 lần)
1. Mở VS Code → **File → Open Folder…** → chọn thư mục `trang-quet` (trong `app nhà ở`). Mở ĐÚNG thư mục này, không mở cả dự án.
2. Bấm biểu tượng **Source Control** ở thanh bên trái (hình 3 chấm nối nhau, hoặc `Ctrl+Shift+G`).
3. Bấm **Publish to GitHub**.
   - Lần đầu VS Code hỏi đăng nhập GitHub → **Allow** → trình duyệt mở trang GitHub → đăng nhập tài khoản **hoangng2219** → **Authorize Visual Studio Code** → quay lại VS Code.
4. VS Code hỏi tên repo: sửa thành **`quet`** → chọn **Publish to GitHub public repository** (bắt buộc Public mới dùng GitHub Pages miễn phí).
5. VS Code hỏi chọn file đưa lên: tick **index.html** và **HUONG-DAN-GITHUB.md** → OK.
6. Góc phải dưới hiện "Successfully published…" → bấm **Open on GitHub** để xem repo.

## B. Bật GitHub Pages (làm 1 lần, trên trình duyệt)
1. Trang repo `https://github.com/hoangng2219/quet` → **Settings** → menu trái **Pages**.
2. **Source**: *Deploy from a branch* · **Branch**: `main` (hoặc `master` nếu VS Code đặt tên vậy) · thư mục `/ (root)` → **Save**.
3. Đợi 1–2 phút, tải lại trang → hiện *Your site is live at* **https://hoangng2219.github.io/quet/**.

## C. Sửa trang sau này (mỗi lần có bản mới)
1. Người làm app sửa `trang-quet/index.html` trong dự án (hoặc anh sửa trong VS Code).
2. VS Code → Source Control: thấy file đổi → gõ ghi chú vào ô **Message** (vd "D67 bước 1") → bấm **✓ Commit** → bấm **Sync Changes** (= push lên GitHub).
3. 1–2 phút sau trang trên GitHub tự cập nhật. Trên điện thoại tải lại trang (kéo xuống để làm mới).
- Nếu sửa trực tiếp trên web GitHub thì trước khi sửa trong VS Code bấm **Sync Changes** (= pull về) để không bị lệch.

## D. Lấy địa chỉ web app (/exec)
Apps Script Editor → **Triển khai** → **Quản lý các bản triển khai** → bản Web app đang dùng → sao chép **URL ứng dụng web** (kết thúc bằng `/exec`).
Phải triển khai **Phiên bản mới** của build **2026-10-26.1** trước — bản cũ chưa có cổng `ping`.

## E. Thử trên điện thoại (bước 0)
1. Mở `https://hoangng2219.github.io/quet/` bằng **Safari (iPhone)** / **Chrome (Android)** — KHÔNG mở trong Zalo.
   (Hoặc ghép sẵn: `https://hoangng2219.github.io/quet/#api=<URL /exec>`.)
2. Dán URL /exec vào ô "URL web app" → **Gửi thử (ping)** → phải hiện "✓ Web app trả lời sau … ms · build 2026-10-26.1".
3. **Bật camera** → cho phép camera → đưa tem giường (hoặc mã QR bất kỳ) vào khung → phải bíp + "✓ Đọc được … ✓ Web app nhận được".
4. **Sao chép kết quả** → dán gửi lại. Nên thử 1 iPhone + 1 Android.
