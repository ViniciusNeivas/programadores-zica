async function getDadosDaAPI() {
  try {
    const response = await axios.get(
      "https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

let currentChapter = 0;

async function main() {
  const resultado = await getDadosDaAPI();
  console.log(resultado.verses);

  const elementVerse = document.getElementById("verses");
  for (let i = 0; i < resultado.verses.length; i++) {
    const verses = resultado.verses[i];
    if (verses.chapter === currentChapter) {
      const versesHTML = `
        <p><b>Versículo ${verses.verse}</b></p> 
        <p>${verses.text}</p>
      `;
      elementVerse.innerHTML += versesHTML;
    } else {
      const versesHTML = `
        <p><b>Capitulo ${verses.chapter}</b></p> 
        <p><b>Versículo ${verses.verse}</b></p> 
        <p>${verses.text}</p>
      `;
      elementVerse.innerHTML += versesHTML;
      currentChapter = verses.chapter;
    }
  }
}

main();
