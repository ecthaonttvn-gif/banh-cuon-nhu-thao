// Ví dụ: thông báo khi nhấn vào nút "Xem thực đơn"
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", function() {
    alert("Bạn sắp xem thực đơn Bánh cuốn Như Thảo!");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".order-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ sớm.");
      form.reset();
    });
  }
});
