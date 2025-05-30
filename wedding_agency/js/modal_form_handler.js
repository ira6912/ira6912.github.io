const modalHTML = `
  <div id="contactModal" class="my-modal">
    <div class="my-modal-content">
      <span class="my-close">&times;</span>
      <h2>Залиште свої дані — і ми обов'язково з вами зв'яжемось</h2>
      <form id="contactForm" action="https://formspree.io/f/manjwnyj" method="POST">
        <input type="text" name="_gotcha" style="display:none">
        <div>
          <label for="name">Ваше ім’я</label>
          <input type="text" id="name" name="name" required placeholder="Введіть ім’я">
        </div>
        <div>
          <label for="phone">Номер телефону</label>
          <input type="tel" id="phone" name="phone" required
                placeholder="+380XXXXXXXXX" pattern="\\+380[0-9]{9}">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="you@email.com">
        </div>
        <div>
          <label for="message">Повідомлення</label>
          <textarea id="message" name="message" rows="4" placeholder="Коли краще подзвонити? Яке питання?"></textarea>
        </div>
        <button type="submit" class="my-send_btn">Відправити</button>
      </form>
      <div id="formSuccess" style="display:none; margin-top: 15px; color: green;">
        Дякуємо! Ми зв’яжемось з вами найближчим часом 💍
      </div>
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
const formSuccess = document.getElementById("formSuccess");

// Відкриття модального вікна
openModalLinks.forEach(link => {
  link.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Закриття при натисканні на хрестик
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закриття при кліку за межі
window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Обробка форми — відправка на Formspree
contactForm.addEventListener("submit", async event => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      contactForm.reset();
      formSuccess.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
        formSuccess.style.display = "none";
      }, 4000);
    } else {
      alert("⚠️ Щось пішло не так. Спробуйте пізніше.");
    }
  } catch (error) {
    console.error("Form error:", error);
    alert("⚠️ Виникла помилка. Спробуйте пізніше.");
  }
});
