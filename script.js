document.querySelector('.add-to-cart').addEventListener('click', function () {
    alert('Product added to cart!');
});
window.addEventListener('scroll', () => {
    const productSection = document.getElementById('product-section');
    const shopLink = document.querySelector('a[href="#product-section"]');

    const rect = productSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        shopLink.classList.add('active');
    } else {
        shopLink.classList.remove('active');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const faqToggleButton = document.getElementById("faq-toggle-button");
    const faqContainer = document.getElementById("faq-container");
    const faqQuestions = document.querySelectorAll(".faq-question");

    // Sự kiện click vào nút "Click here" để hiển thị danh sách câu hỏi
    faqToggleButton.addEventListener("click", function () {
        if (faqContainer.style.display === "none" || faqContainer.style.display === "") {
            faqContainer.style.display = "block";
        } else {
            faqContainer.style.display = "none";
        }
    });

    // Sự kiện click vào từng câu hỏi để mở/đóng câu trả lời
    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const parent = question.parentElement;

            // Đóng tất cả các câu trả lời khác
            document.querySelectorAll(".faq-item").forEach((item) => {
                if (item !== parent) {
                    item.classList.remove("active");
                }
            });

            // Toggle trạng thái active
            parent.classList.toggle("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-icon");
    const cartSidebar = document.getElementById("cart-sidebar");

    // Sự kiện khi bấm vào biểu tượng giỏ hàng
    cartIcon.addEventListener("click", function () {
        cartSidebar.classList.add("open");
    });
});
