## How to Run the Page Locally

1. Clone the repository to your local machine using the command **`git clone https://github.com/katya-sn/test.git`**.
2. Then, navigate to the project directory using **cd test**.
3. Make sure you have Node.js and npm installed, and install the project dependencies by running **`npm install`**.
4. After the dependencies are installed, start the development server with **`npm run dev`**.
5. Finally, open your browser and go to **http://localhost:5173** to see the Landing running locally.

## Коротенький опис

Частина застосунку, розроблена за допомогою React та TypeScript, з використанням Vite як інструменту для збірки. Для стилізації використовула бібліотека MUI,стилі визначені через CSS-in-JS підхід з використанням пропса sx в компонентах MUI, що дозволило динамічно задавати стилі та реалізовувати адаптивний дизайн (для мобільної та десктопної з брейкпоінтами, визначеними на макеті в Figma).

Для навігації між сторінками проєкту використала react-router-dom, що забезпечує плавний перехід між різними частинами додатку. Управління SEO реалізувала через react-helmet, що дозволяє налаштовувати мета-теги для покращення видимості у пошукових системах.

Для управління кошиком (cart) реалізовано контекст, а дані збережено у localStorage для збереження інформації.

**P.S.**
На жаль, проєкт не завершений повністю і частина UI залишилися недопрацьованою.
Це перший досвід з MUI (ui library взагалі) і бачу, що вийшло трохи "костильно" за браком часу. 
Але продовжуватиму лупати сю скалу UI бібліотеки.
Дякую за досвід і чекатиму на ваші думки з приводу цього
