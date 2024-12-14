// Масив об'єктів послуг
const services = [
    {
      image: "images/plan_img.jpg",
      title: "КВІТКОВІ ДЕКОРАЦІЇ",
      description: "Квіткові декорації – це душа вашого весілля. Ми створюємо унікальні флористичні композиції, які підкреслять стиль і атмосферу свята.",
    },
    {
      image: "images/plan_img1.jpg",
      title: "ОФОРМЛЕННЯ ЗАЛУ",
      description: "Оформлення залу – це мистецтво створення атмосфери. Ми перетворимо будь-який простір на ідеальну локацію для вашого весілля.",
    },
    {
      image: "images/plan_img2.jpg",
      title: "МЕДОВИЙ МІСЯЦЬ",
      description: "Розпочніть вашу подорож у спільне життя з ідеального медового місяця. Ми допоможемо спланувати незабутню подорож у найромантичніші куточки світу.",
    },
  ];
  
  // Функція для динамічного виведення послуг
  function renderServices() {
    const servicesList = document.getElementById("servicesList");
  
    services.forEach((service) => {
      const serviceHTML = `
        <div class="col-md-4">
          <div class="plan_bax text_align_center">
            <figure><img src="${service.image}" alt="${service.title}"/></figure>
            <div class="plan_text">
              <h3>${service.title}</h3>
              <p>${service.description}</p>
              <a class="read_more" href="Javascript:void(0)">Read More</a>
            </div>
          </div>
        </div>
      `;
      servicesList.innerHTML += serviceHTML;
    });
  }
  
  // Виклик функції після завантаження DOM
  document.addEventListener("DOMContentLoaded", renderServices);