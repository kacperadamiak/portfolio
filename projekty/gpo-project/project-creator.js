// Import JSON
const projectData = 

{
  "projectName": "Konfiguracja GPO w Active Directory",
  "projectIntro": {
    "image": "win_white.jpg",
    "description": "Skonfigurowanie zasad grupowych (GPO) w Active Directory oraz dodanie wirtualnego komputera do istniejącej domeny to zadanie mające na celu centralne zarządzanie ustawieniami użytkowników i komputerów w sieci.",
    "tags": ["GPO", "Windows Server", "AD", "VirtualBox"]
  },
  "sections": [
    {
      "sectionTitle": "O projekcie",
      "content": [
        {
          "type": "paragraph",
          "text": "Celem tego zadania było skonfigurowanie zasad grupowych (GPO) w domenie 'mojafirma.local', która została utworzona w ramach zadania „Konfiguracja Windows Server”. W ramach projektu skonfigurowano następujące polityki grupowe: instalację przeglądarki Firefox za pomocą pliku MSI, ustawienie wygaszania ekranu dla komputerów, zablokowanie dostępu do panelu sterowania dla użytkowników oraz mapowanie dysku/folderu. Zadanie miało na celu zdobycie praktycznych umiejętności w zakresie zarządzania politykami grupowymi w środowisku Active Directory."
        },
      ]
    },
    {
      "sectionTitle": "Narzędzia i Technologie",
      "content": [
        {
          "type": "paragraph",
          "text": "Do zrealizowania zadania wykorzystano poniższe technologie:"
        },
        {
          "type": "list",
          "items": [
            "Active Directory – Usługa katalogowa, pozwalająca na zarządzanie użytkownikami, komputerami i innymi zasobami;",
            "Group Policy Objects – Narzędzie do definiowania polityk, któremożna stosować do komputerów i użytkowników w domenie;",
            "Windows Server – System operacyjny na serwerze, który pełnił rolę kontrolera domeny, umożliwiając konfigurację AD i GPO;",
            "VirtualBox – Oprogramowanie do wirtualizacji, użyte do stworzenia maszyn wirtualnych;",
            "Windows 10 – System operacyjny zainstalowany na maszynie wirtualnej."
          ]
        }
      ]
    },
    {
      "sectionTitle": "Przebieg Realizacji",
      "content": [
        {
          "type": "paragraph",
          "text": "Przebieg realizacji zadania został opisany w poniższych krokach, obejmujących konfigurację polityk grupowych (GPO) dla użytkowników i komputerów, dodanie komputera do domeny oraz wymuszenie zastosowania polityk."
        },
        {
          "type": "sub-title",
          "text": "Konfiguracja GPO dla użytkowników:"
        },
        {
          "type": "paragraph",
          "text": "Aby zrealizować polityki dotyczące użytkowników, stworzono odpowiednie mapowanie folderu oraz skonfigurowano blokadę dostępu do Panelu sterowania."
        },
        {
          "type": "list",
          "items": [
            "Mapowanie folderu: Stworzono folder na serwerze, który został udostępniony i mapowany na komputerach użytkowników. W tym celu użyto polityk w sekcji User Configuration → Preferences → Windows Settings → Drive Maps."
          ]
        },
        {
          "type": "image",
          "src": "GPO.jpg",
          "alt": "Przykładowy obrazek",
          "caption": "Zrzut Ekranu 1. Udostępnienie folderu w ustawieniach."
        },
        {
          "type": "list",
          "items": [
            "Blokada dostępu do Panelu sterowania: Skonfigurowano politykę w User Configuration → Policies → Administrative Templates → Control Panel, włączając opcję „Prohibit access to Control Panel and PC settings”, co zablokowało dostęp do panelu sterowania dla użytkowników."
          ]
        },
        {
          "type": "sub-title",
          "text": "Konfiguracja GPO dla komputerów:"
        },
        {
          "type": "paragraph",
          "text": "Następnie skonfigurowano polityki, które dotyczyły bezpośrednio komputerów w domenie, obejmujące instalację oprogramowania oraz zarządzanie wygaszaniem ekranu."
        },
        {
          "type": "list",
          "items": [
            "Instalacja przeglądarki Firefox: Pobranie pliku MSI z oficjalnej strony i umieszczenie go w odpowiednim folderze udostępnionym w sieci. Następnie dodano plik do polityki Computer Configuration → Policies → Software Settings → Software Installation, aby zainstalować przeglądarkę na komputerach w domenie.",
            "Wygaszacz ekranu: Skonfigurowano politykę wygaszania ekranu po 30 sekundach nieaktywności komputera, zmieniając ustawienie w Computer Configuration → Policies → Windows Settings → Security Settings → Local Policies → Security Options → Interactive logon: Machine inactivity limit na wartość 30 sekund."
          ]
        },
        {
          "type": "sub-title",
          "text": "Wymuszenie zastosowania polityk:"
        },
        {
          "type": "paragraph",
          "text": "Po skonfigurowaniu polityk grupowych, aby upewnić się, że zostały one zastosowane, użyto polecenia gpupdate /force na komputerach, co pozwoliło na wymuszenie natychmiastowego zastosowania zasad grupowych."
        },
        {
          "type": "sub-title",
          "text": "Dodanie komputera do domeny:"
        },
        {
          "type": "paragraph",
          "text": "Ostatnim krokiem było dodanie komputera do domeny. Komputer wirtualny z systemem Windows 10 został dodany do domeny „mojafirma.local”. Zmieniono nazwę komputera oraz ustawiono DNS na adres IP serwera kontrolera domeny. Komputer został przypisany do odpowiedniej jednostki organizacyjnej (OU) w Active Directory. Po zastosowaniu wszystkich polityk grupowych i dodaniu komputera do domeny, przeprowadzono testy, aby upewnić się, że wszystkie zasady działają zgodnie z wymaganiami."
        },   
      ]
    },
    {
      "sectionTitle": "Rezultaty i Wnioski",
      "content": [
        {
          "type": "paragraph",
          "text": "Po skonfigurowaniu polityk grupowych (GPO) oraz dodaniu komputera do domeny, wszystkie zaplanowane ustawienia zostały skutecznie wdrożone. Komputer wirtualny z systemem Windows 10 został poprawnie przypisany do odpowiedniej jednostki organizacyjnej w Active Directory, a polityki grupowe takie jak mapowanie folderów, blokada dostępu do panelu sterowania, instalacja przeglądarki Firefox oraz konfiguracja wygaszacza ekranu zostały zastosowane na komputerach w domenie."
        },
        {
          "type": "paragraph",
          "text": "Pomimo początkowych trudności z instalacją aplikacji, udało się prawidłowo skonfigurować wszystkie wymagane zasady. Wnioski z realizacji zadania obejmują lepsze zrozumienie działania polityk grupowych w Active Directory, a także praktyczną znajomość procesu konfiguracji oraz diagnozowania problemów związanych z GPO. W przyszłości, przy wdrażaniu podobnych polityk, warto upewnić się, że wszystkie niezbędne pliki instalacyjne są dostępne w odpowiednich lokalizacjach sieciowych."
        },
      ]
    },
  ],
  "summaryNote": "Projekt zrealizowany przez Kacpra Adamiaka w ramach nauki i doskonalenia umiejętności w IT."
}

  
function generateProjectPage(data) {
  const content = document.getElementById('project-container');

  // Tworzenie wprowadzenia projektu
  const intro = document.createElement('div');
  intro.classList.add('project-intro');
  intro.innerHTML = `
    <div class="project-image">
      ${data.projectIntro.image ? `<img src="${data.projectIntro.image}" alt="Screenshot projektu">` : ''}
    </div>
    <div class="project-info">
      <h1 class="project-title">${data.projectName}</h1>
      <p class="project-description">${data.projectIntro.description}</p>
      <div class="tags">
        ${data.projectIntro.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  content.appendChild(intro);

  // Iteracja przez sekcje
  data.sections.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('project-section');

    // Tytuł sekcji
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = section.sectionTitle;
    sectionDiv.appendChild(title);

    // Iteracja przez elementy w sekcji
    section.content.forEach(item => {
      if (item.type === 'paragraph') {
        const paragraph = document.createElement('p');
        paragraph.classList.add('section-description');
        paragraph.textContent = item.text;
        sectionDiv.appendChild(paragraph);
      } else if (item.type === 'list') {
        const ul = document.createElement('ul');
        item.items.forEach(listItem => {
          const li = document.createElement('li');
          li.textContent = listItem;
          ul.appendChild(li);
        });
        sectionDiv.appendChild(ul);
      } else if (item.type === 'image') {
        const figure = document.createElement('figure');
        figure.classList.add('section-img');
        figure.innerHTML = `
          <img src="${item.src}" alt="${item.alt}">
          <figcaption>${item.caption}</figcaption>
        `;
        sectionDiv.appendChild(figure);
      } else if (item.type === 'sub-title') {
        const subtitle = document.createElement('h3');
        subtitle.classList.add('sub-section-title');
        subtitle.textContent = item.text;
        sectionDiv.appendChild(subtitle);
      }
    });

    // Dodanie sekcji do strony
    content.appendChild(sectionDiv);
  });

  // Dodanie notatki podsumowującej projekt
  const summary = document.createElement('div');
  summary.classList.add('project-summary-note');
  summary.innerHTML = `<p>${data.summaryNote}</p>`;
  content.appendChild(summary);
}

// Wywołanie funkcji generującej stronę
generateProjectPage(projectData);
