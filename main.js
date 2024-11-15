const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function printSlowly(text) {
      await sleep(3000)
      const output = document.getElementById('main-block');
      const lines = text.split('\n'); // Разбиваем текст на строки

      for (const line of lines) {
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          output.innerHTML += char; // Добавляем символ в div
          await sleep(100); // Задержка в 100 миллисекунд
        }
        output.innerHTML += '<br>'; // Добавляем разрыв строки
        await sleep(500); // Задержка после строки
      }
    }

    // Загружаем текст из файла
    fetch('text.txt')
      .then(response => response.text())
      .then(text => printSlowly(text));