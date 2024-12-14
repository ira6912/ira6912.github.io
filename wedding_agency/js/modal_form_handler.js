// Додавання функціоналу для відображення модального вікна
const modalHTML = `
  <div id="contactModal" class="my-modal">
    <div class="my-modal-content">
      <span class="my-close">&times;</span>
      <h2>Залиште Ваші дані і ми зателефонуємо</h2>
      <form id="contactForm">
        <div>
          <label for="name">Ім'я</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div>
          <label for="phone">Номер телефону</label>
          <input type="tel" id="phone" name="phone" required>
        </div>
        <button type="submit" class="my-send_btn">Відправити</button>
      </form>
    </div>
  </div>
`;

// Додавання модального вікна до сторінки
document.body.insertAdjacentHTML("beforeend", modalHTML);

// Отримання посилань і модального вікна
const modal = document.getElementById("contactModal");
const openModalLinks = document.querySelectorAll(".quote_btn");
const closeModal = modal.querySelector(".my-close");
const contactForm = document.getElementById("contactForm");

// Відкриття модального вікна при натисканні на посилання
openModalLinks.forEach(link => {
  link.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Закриття модального вікна при натисканні на хрестик
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закриття модального вікна при кліку за межі контенту
window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Обробка форми
contactForm.addEventListener("submit", event => {
  event.preventDefault();

  // Отримання даних з форми
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  // Симуляція відправки даних на сервер
  console.log("Відправлено дані:", { name, phone });

  // Закриття модального вікна
  modal.style.display = "none";

  // Показ повідомлення про успіх
  alert("Дякуємо! Ми скоро зателефонуємо.");
});