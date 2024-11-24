// Objednavka
// Podle instrukcí níže vytvořte jednoduchý formulář pro dokončení objednávky na nějakém e-shopu. Formulář umožní uživateli zadat číslo platební karty a způsob dopravy.

// 1.Vytvořte si novou složku a vytvořte v ní soubory - index.html, style.css a script.js. Soubory propojte.
// 2.Do souboru style.css vložte styly pro formuláře ať se nemusíte trápit se stylováním.
// 3.Vytvořte formulář s textovým políčkem pro číslo platební karty. Dejte mu štítek „Platební karta“ a atribut type nastavte na text.
// 4.Přidejte do formuláře rozbalovací nabídku se štítkem „Doprava“. Jako jednotlivé možnosti použijte prvky option s následujícím obsahem:
// -vyzvednout na pobočce, atribut value="pobocka",
// -Zásilkovna, atribut value="zasilkovna",
// -Česká pošta, atribut value="posta",
// -PPL, atribut value="ppl".
// 5.Přidejte tlačítko „Odeslat objednávku“.
// 6.Přidejte posluchače na událost submit. Jakmile uživatel formulář odešle, nahraďte celý formulář zprávou „Objednávka odeslána ke zpracování.“
// -Bonus 1
// Zkuste si po odeslání formuláře zobrazit všechny hodnoty, které uživatel vyplnil. Vypište je do konzole.
// Pohledem do konzole ověřte, že pokud uživatel zadá jako dopravu Českou poštu, v konzoli se objeví hodnota posta.
// -Bonus 2
// Platební karta musí mít přesně 16 číslic. Pokud uživatel zadá méně nebo více, zobrazte pod formulářem chybovou hlášku. Pro hlášku si v HTML souboru připravte prvek <p>. Hlášku zobrazte s každým novým vstupem od uživatele (událost input na prvku <input>). Pokud je vše v pořádku, chybovou hlášku smažte.

// Pro příliš krátkou kartu použijte text „Číslo karty je příliš krátké. Chybí X číslic.“
// Pro příliš dlouhou kartu použijte text „Číslo karty je moc dlouhé. Přebývá X číslic.“
// Zkuste místo události input poslouchat na událost change. Jak se liší jejich chování? Která varianta je lepší? input nebo change?

// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); 

//   const karta = form.querySelector('input[name="karta"]').value;
//   const doprava = form.querySelector('select[name="doprava"]').value;

//   console.log('Platební karta:', karta);
//   console.log('Doprava:', doprava);

//   form.innerHTML = '<h1>Objednávka odeslána ke zpracování.</h1>';
// });


const form = document.querySelector('form');
const kartaInput = document.querySelector('input[name="karta"]');
const chybaMsg = document.querySelector('.chyba-msg');

// Kontrola délky čísla karty při zadávání
kartaInput.addEventListener('input', () => {
  const kartaValue = kartaInput.value;
  const requiredLength = 16;
  const currentLength = kartaValue.length;

  // Zobrazení nebo skrytí chybové hlášky
  if (currentLength < requiredLength) {
    const missingDigits = requiredLength - currentLength;
    chybaMsg.textContent = `Číslo karty je příliš krátké. Chybí ${missingDigits} číslic.`;
    chybaMsg.style.display = 'block';
  } else if (currentLength > requiredLength) {
    const excessDigits = currentLength - requiredLength;
    chybaMsg.textContent = `Číslo karty je moc dlouhé. Přebývá ${excessDigits} číslic.`;
    chybaMsg.style.display = 'block';
  } else {
    chybaMsg.style.display = 'none';
  }
});

// Zamezení výchozímu chování formuláře a výpis hodnot
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (kartaInput.value.length === 16) {
    const karta = kartaInput.value;
    const doprava = form.querySelector('select[name="doprava"]').value;

    console.log('Platební karta:', karta);
    console.log('Doprava:', doprava);

    // Nahrazení formuláře zprávou
    form.innerHTML = '<h1>Objednávka odeslána ke zpracování.</h1>';
  } else {
    alert('Číslo karty není platné.');
  }
});