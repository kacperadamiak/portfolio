// Import JSON
const projectData = {
  projectName: "Konfiguracja routingu w sieci",
  projectIntro: {
    image: "routing-preview.jpg",
    description:
      "Skonfigurowanie  routingu w sieci składającej się z trzech routerów, dwóch przełączników i czterech komputerów. Każda podsieć ma przypisany unikalny zakres adresacji IP. Celem było zapewnienie poprawnej komunikacji między wszystkimi urządzeniami.",
    tags: ["Cisco Packet Tracer", "Static", "Routing"],
  },
  sections: [
    {
      sectionTitle: "O projekcie",
      content: [
        {
          type: "paragraph",
          text: "Celem tego zadania było skonfigurowanie routingu w sieci składającej się z trzech routerów, dwóch przełączników i czterech komputerów. W ramach projektu utworzono topologię sieci, przypisano adresy IP do wszystkich urządzeń oraz skonfigurowano statyczne trasy routingu, umożliwiając komunikację między sieciami. Testy łączności zostały przeprowadzone za pomocą polecenia ping, a dla zwiększenia bezpieczeństwa skonfigurowano hasła dostępu do routerów i przełączników oraz dezaktywowano nieużywane interfejsy. Zadanie miało na celu zdobycie praktycznych umiejętności w zakresie konfiguracji routingu i zarządzania podstawową infrastrukturą sieciową.",
        },
      ],
    },
    {
      sectionTitle: "Przebieg Realizacji",
      content: [
        {
          type: "paragraph",
          text: "W celu konfiguracji routingu w sieci należało przejść przez kilka kluczowych etapów, począwszy od zaprojektowania topologii, poprzez przypisanie adresów IP do urządzeń, konfigurację tras statycznych, aż po testowanie łączności i zabezpieczenie infrastruktury. Poniżej przedstawiono kolejne kroki realizacji projektu.",
        },
        {
          type: "sub-title",
          text: "Stworzenie topologii",
        },
        {
          type: "paragraph",
          text: "Pierwszym krokiem było zaprojektowanie topologii sieci w Cisco Packet Tracer. W ramach projektu uwzględniono:",
        },
        {
          type: "list",
          items: [
            "Trzy routery (R1, R2, R3) odpowiedzialne za komunikację między podsieciami,",
            "Dwa przełączniki (SW1, SW2) zapewniające połączenie dla komputerów,",
            "Cztery komputery PC przypisane do odpowiednich podsieci,",
            "Adresację IP dla wszystkich urządzeń, umożliwiającą poprawne trasowanie ruchu.",
          ],
        },
        {
          type: "paragraph",
          text: "Dzięki temu możliwe było logiczne zaplanowanie schematu połączeń oraz przypisanie odpowiednich adresów do interfejsów.",
        },
        {
          type: "image",
          src: "topology.png",
          alt: "Przykładowy obrazek",
          caption:
            "Zrzut Ekranu 1. Topologia sieci przedstawiająca schemat połączeń i adresację IP.",
        },

        {
          type: "sub-title",
          text: "Konfiguracja adresacji sieciowej",
        },
        {
          type: "paragraph",
          text: "Na tym etapie projektu przeprowadzono pełną konfigurację adresacji sieciowej dla wszystkich urządzeń, obejmującą przypisanie adresów IP, masek podsieci oraz bramek sieciowych. Był to kluczowy krok zapewniający poprawną komunikację między urządzeniami w sieci.",
        },
        {
          type: "paragraph",
          text: "Najpierw skonfigurowano komputery, przypisując każdemu z nich statyczny adres IP, maskę podsieci oraz bramkę sieciową. Bramka, w tym przypadku interfejs routera, umożliwia przesyłanie pakietów poza lokalną podsieć.",
        },
        {
          type: "image",
          src: "pc1.png",
          alt: "Przykładowy obrazek",
          caption:
            "Zrzut Ekranu 3. Przypisanie adresu IP, maski i bramki dla PC1.",
        },
        {
          type: "paragraph",
          text: "Następnie skonfigurowano routery, przypisując adresy IP do ich interfejsów, zgodnie z założeniami topologii sieci. Po przypisaniu adresów aktywowano interfejsy, co umożliwiło prawidłowe działanie połączeń i przesyłanie danych między urządzeniami.",
        },
        {
          type: "image",
          src: "r1add.png",
          alt: "Przykładowy obrazek",
          caption:
            "Zrzut Ekranu 3. Konfiguracja adresów IP i aktywacja interfejsów dla R1.",
        },
        {
          type: "sub-title",
          text: "Konfiguracja statycznego routingu",
        },
        {
          type: "paragraph",
          text: "Po przypisaniu adresów IP routery automatycznie wygenerowały trasy dla bezpośrednio podłączonych sieci (local i connected). Aby umożliwić komunikację między wszystkimi podsieciami, konieczne było skonfigurowanie dodatkowych tras statycznych na routerach, wskazujących, jak kierować ruch do sieci, które nie są bezpośrednio połączone z danym routerem",
        },
        {
          type: "list",
          items: [
            "Router 1: Skonfigurowano trasę statyczną do sieci 192.168.20.0/24 poprzez odpowiedni adres routera 2,",
            "Router 3: Skonfigurowano trasę statyczną do sieci 192.168.10.0/24 poprzez odpowiedni adres routera 2,",
            "Router 2: Jako centralny węzeł sieci, otrzymał konfigurację tras statycznych do obu sieci (192.168.20.0/24 oraz 192.168.10.0/24), co umożliwiło pełną komunikację między routerami 1 i 3.",
          ],
        },
        {
          type: "paragraph",
          text: "Po przypisaniu tras statycznych na routerze 2 przeprowadzono weryfikację za pomocą komendy show ip route.",
        },
        {
          type: "image",
          src: "route.png",
          alt: "Przykładowy obrazek",
          caption:
            "Zrzut Ekranu 4. Przypisanie tras statycznych i weryfikacja routingu na routerze R2.",
        },
      ],
    },
    {
      sectionTitle: "Testowanie i bezpieczeństwo",
      content: [
        {
          type: "sub-title",
          text: "Testowanie połączenia",
        },
        {
          type: "paragraph",
          text: "W celu sprawdzenia poprawności konfiguracji przeprowadzono test połączenia między urządzeniami znajdującymi się w różnych podsieciach. Do testu użyto polecenia ping, wysyłając pakiety z PC1 do PC3.",
        },
        {
          type: "paragraph",
          text: "Podczas pierwszego testu zauważono, że trzy pierwsze pakiety nie dotarły, co było spowodowane brakiem wpisów w tablicy ARP oraz koniecznością zmapowania adresów MAC. Ostatni pakiet jednak przeszedł pomyślnie, co potwierdziło prawidłową konfigurację i pełną komunikację między sieciami.",
        },
        {
          type: "image",
          src: "ping.png",
          alt: "Przykładowy obrazek",
          caption: "Zrzut Ekranu 5. Wynik testu pingowania między PC1 a PC3.",
        },
        {
          type: "sub-title",
          text: "Zabezpieczenie infrastruktury sieciowej",
        },
        {
          type: "paragraph",
          text: "Dla poprawy bezpieczeństwa infrastruktury sieciowej wykonano następujące działania:",
        },
        {
          type: "list",
          items: [
            "Na routerach i przełącznikach skonfigurowano hasła dostępu (enable secret), co zapobiega nieautoryzowanemu dostępowi do urządzeń.",
            "Na przełącznikach wyłączono wszystkie nieużywane interfejsy, aby zminimalizować ryzyko nieautoryzowanego podłączenia urządzeń do sieci.",
          ],
        },
        {
          type: "image",
          src: "status.png",
          alt: "Przykładowy obrazek",
          caption:
            "Zrzut Ekranu 6. Status interfejsów na switchu 1 po wyłączeniu nieużywanych portów.",
        },
      ],
    },
    {
      sectionTitle: "Podsumowanie i wnioski",
      content: [
        {
          type: "paragraph",
          text: "Projekt umożliwił konfigurację sieci z trzema routerami, dwoma przełącznikami i czterema komputerami, zapewniając poprawną komunikację między urządzeniami dzięki odpowiednio przypisanym adresom IP oraz trasom statycznym. Testy przeprowadzone za pomocą ping potwierdziły, że sieć działa zgodnie z założeniami, a konfiguracja została wykonana poprawnie.",
        },
        {
          type: "paragraph",
          text: "Realizacja zadania pozwoliła zdobyć praktyczne doświadczenie w tworzeniu i konfiguracji sieci, obejmujące adresację, routing oraz podstawowe działania zwiększające bezpieczeństwo infrastruktury. Wiedza zdobyta podczas tego projektu stanowi solidną podstawę do dalszych działań w obszarze administracji sieciowej.",
        },
      ],
    },
  ],
  summaryNote:
    "Projekt zrealizowany przez Kacpra Adamiaka w ramach nauki i doskonalenia umiejętności w IT.",
};

function generateProjectPage(data) {
  const content = document.getElementById("project-container");

  // Tworzenie wprowadzenia projektu
  const intro = document.createElement("div");
  intro.classList.add("project-intro");
  intro.innerHTML = `
    <div class="project-image">
      ${
        data.projectIntro.image
          ? `<img src="${data.projectIntro.image}" alt="Screenshot projektu">`
          : ""
      }
    </div>
    <div class="project-info">
      <h1 class="project-title">${data.projectName}</h1>
      <p class="project-description">${data.projectIntro.description}</p>
      <div class="tags">
        ${data.projectIntro.tags
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("")}
      </div>
    </div>
  `;
  content.appendChild(intro);

  // Iteracja przez sekcje
  data.sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("project-section");

    // Tytuł sekcji
    const title = document.createElement("h2");
    title.classList.add("section-title");
    title.textContent = section.sectionTitle;
    sectionDiv.appendChild(title);

    // Iteracja przez elementy w sekcji
    section.content.forEach((item) => {
      if (item.type === "paragraph") {
        const paragraph = document.createElement("p");
        paragraph.classList.add("section-description");
        paragraph.textContent = item.text;
        sectionDiv.appendChild(paragraph);
      } else if (item.type === "list") {
        const ul = document.createElement("ul");
        item.items.forEach((listItem) => {
          const li = document.createElement("li");
          li.textContent = listItem;
          ul.appendChild(li);
        });
        sectionDiv.appendChild(ul);
      } else if (item.type === "image") {
        const figure = document.createElement("figure");
        figure.classList.add("section-img");
        figure.innerHTML = `
          <img src="${item.src}" alt="${item.alt}">
          <figcaption>${item.caption}</figcaption>
        `;
        sectionDiv.appendChild(figure);
      } else if (item.type === "sub-title") {
        const subtitle = document.createElement("h3");
        subtitle.classList.add("sub-section-title");
        subtitle.textContent = item.text;
        sectionDiv.appendChild(subtitle);
      }
    });

    // Dodanie sekcji do strony
    content.appendChild(sectionDiv);
  });

  // Dodanie notatki podsumowującej projekt
  const summary = document.createElement("div");
  summary.classList.add("project-summary-note");
  summary.innerHTML = `<p>${data.summaryNote}</p>`;
  content.appendChild(summary);
}

// Wywołanie funkcji generującej stronę
generateProjectPage(projectData);
