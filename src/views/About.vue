<template>
  <div class="about">
    <h1>Laborationsuppgift 3</h1>
    <h3>Du ska i denna laborationsuppgift göra följande:</h3>
    Den här gången vill jag att du ska skapa en blogg sida. Din sida bör
    innehålla:
    <ul>
      <li>En sida där man kan skapa och lägga till ett blogginlägg</li>
      <li>
        En prewiew sida där man ser en kort sammanfattning av varje inlägg i en
        lista
      </li>
      <li>En sida som visar ett helt blogginlägg.</li>
    </ul>
    För att skifta mellan sidan där du skapar inlägg och listan på alla inlägg
    bör du ha en navigeringsmeny av något slag. Denna navigering ska du hantera
    med en Router i Vue. När man trycker på ett inlägg i listan så ska man även
    hamna på sidan som visar hela det inlägget. Funktionalitet som ska finnas på
    sidan:
    <ul>
      <li>
        När sidan laddas ska alla blogg inlägg hämtas från en databas med ett
        api, jag skulle föreslå att du använder
        <a href="https://jsonplaceholder.typicode.com/posts"
          >https://jsonplaceholder.typicode.com/posts</a
        >
        till detta. Du behöver isåfall inte kunna spara ditt blogginlägg till
        databasen(för det går inte) men du ska simulera att du gör det. Det är
        även helt ok att använda någon annan backend lösning som du väljer
        själv.
      </li>
      <li>
        Skapa, eller simulera att du skapar ett nytt blogg inlägg som skickas
        till din databas
      </li>
      <li>Skapa en sökfunktion där du kan söka bland alla inlägg.</li>
      <li>
        Beroende vilket av inläggen man trycker på så ska du hämta hem rätt
        inlägg från databasen och visa det på en ny sida.
      </li>
    </ul>
  </div>
</template>
