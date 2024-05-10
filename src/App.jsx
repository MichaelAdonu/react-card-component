import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card
        cardUrl="https://www.richdad.com/MediaLibrary/RichDad/Images/home/richdad-home-radio-square-01.jpg"
        cardTitle="About Robert Kiyosaki"
        cardText="Robert Toru Kiyosaki is an American businessman and author, known for the Rich Dad Poor Dad series of personal finance books."
      />
      <Card
        cardUrl="https://www.frontlist.in/storage/uploads/2021/06/morgan-housel.jpg"
        cardTitle="About  Morgan Housel"
        cardText="Morgan Housel is a partner at The Collaborative Fund and a former columnist at The Motley Fool and The Wall Street Journal"
      />

      <Card
        cardUrl="https://miro.medium.com/v2/resize:fit:583/1*WH9N8hDpCn53Kf_-vE_EAw.png"
        cardTitle="Napoleon Hill"
        cardText="Oliver Napoleon Hill was an American self-help author. He is best known for his book Think and Grow Rich, the best-selling self-help books of all time."
      />

      <Card
        cardTitle=" About Myles Munroe"
        cardText="Myles Munroe, OBE was a Bahamian evangelist and ordained minister, professor, author, speaker and leadership consultant. "
        cardUrl="https://yt3.googleusercontent.com/R0kQsQm11jF8HSrq17BXaJT7-c1dtSBQGP-LGzmDLatwIL-bu9e5rJ5S_UL2XtlI2nFduYBqNU8=s900-c-k-c0x00ffffff-no-rj"
      />

      <Card
        cardTitle="About Mike Murdock"
        cardText="Michael Dean Murdock  is an American Contemporary Christian singer-songwriter, televangelist and pastor of The Wisdom Center ministry based in Texas."
        cardUrl="https://cdn.pensador.com/img/authors/mi/ke/mike-murdock-l.jpg"
      />

      <Card
        cardTitle="About Mensa Otabil"
        cardText="Mensa Otabil is a Ghanaian theologian, philanthropist, motivational speaker, entrepreneur. He is the founder of International Central Gospel Church."
        cardUrl="https://i1.sndcdn.com/artworks-000165066135-wo9672-t500x500.jpg"
      />
    </div>
  );
}

export default App;
