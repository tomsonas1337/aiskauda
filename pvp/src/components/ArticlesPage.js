import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ArticlesPage.css'; // Ensure the CSS file path is correct

// Importing images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      title: 'Skoliozė: Simptomai ir gydymas',
      summary: 'Supraskite skoliozės simptomus ir įvairius gydymo būdus.',
      image: image1,
      content: `<h3>Skoliozė: Simptomai ir gydymas</h3>
                <p>Skoliozė yra medicininė būklė, kai žmogaus stuburas turi šoninį išlinkimą. Kreivė paprastai yra "S" arba "C" formos. Kreivumo laipsnis gali skirtis, tačiau daugiau nei 10 laipsnių kreivumas paprastai laikomas skolioze.</p>
                <h4>Simptomai</h4>
                <ul>
                  <li>Nelygios pečiai</li>
                  <li>Viena mentė atrodo labiau iškilusi nei kita</li>
                  <li>Nelygus liemuo</li>
                  <li>Viena klubas aukščiau nei kita</li>
                  <li>Sunkiais atvejais stuburas taip pat gali suktis arba suktis, dėl ko šonkauliai labiau išsikiša vienoje pusėje nei kitoje</li>
                </ul>
                <h4>Gydymas</h4>
                <p>Skoliozės gydymas priklauso nuo kreivės sunkumo ir rizikos, kad ji pablogės. Lengva skoliozė gali reikalauti tik reguliarių patikrinimų, o sunkesniais atvejais gali prireikti korseto ar operacijos. Dažni gydymo būdai yra:</p>
                <ul>
                  <li><strong>Korsetas:</strong> Vidutinės skoliozės atveju korsetas gali padėti išvengti tolesnio kreivumo, ypač vaikams, kurie dar auga.</li>
                  <li><strong>Fizinė terapija:</strong> Pratimai gali padėti sustiprinti stuburo raumenis, pagerinti laikyseną ir sumažinti skausmą.</li>
                  <li><strong>Operacija:</strong> Sunkiems skoliozės atvejams gali prireikti stuburo suliejimo operacijos, kad stuburas būtų ištiesintas ir stabilizuotas.</li>
                </ul>
                <p>Ankstyvas nustatymas yra labai svarbus efektyviam skoliozės valdymui. Reguliarūs vizitai pas sveikatos priežiūros specialistą yra svarbūs skoliozės stebėjimui ir valdymui.</p>`
    },
    {
      title: 'Laikysena ir nugaros sveikata',
      summary: 'Sužinokite, kaip gera laikysena gali užkirsti kelią nugaros problemoms.',
      image: image2,
      content: `<h3>Laikysena ir nugaros sveikata</h3>
                <p>Gera laikysena yra būtina norint išlaikyti sveiką nugarą ir išvengti skausmo. Tinkamas kūno išlyginimas sumažina stuburo apkrovą ir sumažina sužalojimų riziką.</p>
                <h4>Geros laikysenos svarba</h4>
                <p>Geros laikysenos palaikymas yra svarbus:</p>
                <ul>
                  <li>Kad kaulai ir sąnariai būtų tinkamai išdėstyti, kad raumenys būtų tinkamai naudojami</li>
                  <li>Nuovargio prevencijai, nes raumenys naudojami efektyviau</li>
                  <li>Įtampai mažinti ant raiščių, kurie laikosi stuburo sąnarių kartu</li>
                  <li>Raumenų įtampos, per didelio naudojimo sutrikimų ir net nugaros bei raumenų skausmo prevencijai</li>
                </ul>
                <h4>Patarimai gerai laikysenai palaikyti</h4>
                <p>Štai keletas patarimų, kaip palaikyti gerą laikyseną:</p>
                <ul>
                  <li><strong>Stovint:</strong> Stovėkite tiesiai su pečiais atgal, svoris tolygiai paskirstytas ant abiejų kojų.</li>
                  <li><strong>Sėdint:</strong> Sėdėkite tiesiai su pečiais atgal, naudodamiesi kėdės atrama nugarai.</li>
                  <li><strong>Miegant:</strong> Naudokite čiužinį, kuris suteikia gerą atramą, ir miegokite su pagalve, kuri palaiko natūralų kaklo kreivumą.</li>
                </ul>
                <p>Pastovus sąmoningumas palaikyti gerą laikyseną gali žymiai sumažinti nugaros problemų riziką. Reguliarūs pratimai ir sąmoningumas apie laikyseną visą dieną gali padėti išlaikyti sveiką nugarą.</p>`
    },
    {
      title: 'Pratimai sveikam stuburui',
      summary: 'Paprasti pratimai, skirti sustiprinti stuburą ir sumažinti skausmą.',
      image: image3,
      content: `<h3>Pratimai sveikam stuburui</h3>
                <p>Reguliarūs pratimai yra svarbūs norint išlaikyti sveiką stuburą ir sumažinti nugaros skausmą. Raumenų, palaikančių stuburą, stiprinimas, lankstumo gerinimas ir sveiko svorio palaikymas gali prisidėti prie stuburo sveikatos.</p>
                <h4>Rekomenduojami pratimai</h4>
                <p>Štai keletas pratimų, kurie gali padėti išlaikyti sveiką stuburą:</p>
                <ul>
                  <li><strong>Dubens pasvirimai:</strong> Atsigulkite ant nugaros su sulenktais keliais ir pėdomis plokščiai ant grindų. Įtempkite pilvo raumenis ir suplokštinkite nugarą ant grindų. Laikykite kelias sekundes, tada atsipalaiduokite. Kartokite 10-15 kartų.</li>
                  <li><strong>Katės-karvės tempimas:</strong> Atsiklaupkite ant rankų ir kelių. Išlinkite nugarą link lubų (katės poza), tada lėtai nuleiskite nugarą, leisdami pilvui nusileisti link grindų (karvės poza). Kartokite 10-15 kartų.</li>
                  <li><strong>Paukštis-šuo:</strong> Atsiklaupkite ant rankų ir kelių. Ištieskite vieną ranką tiesiai priešais save ir priešingą koją tiesiai atgal. Laikykite kelias sekundes, tada grįžkite į pradinę padėtį. Kartokite kitą pusę. Darykite 10-15 pakartojimų kiekvienoje pusėje.</li>
                  <li><strong>Priklausimai prie sienos:</strong> Atsistokite nugarą prie sienos ir lėtai nusileiskite į sėdėjimo padėtį, tarsi sėdėtumėte kėdėje. Laikykite kuo ilgiau, tada lėtai vėl pakilkite. Kartokite 5-10 kartų.</li>
                </ul>
                <h4>Nauda</h4>
                <p>Šie pratimai padeda sustiprinti raumenis, palaikančius stuburą, pagerina lankstumą ir sumažina skausmą. Įtraukus šiuos pratimus į savo kasdienę rutiną, galite padėti išlaikyti sveiką stuburą ir išvengti nugaros problemų.</p>
                <p>Visada pasitarkite su sveikatos priežiūros specialistu prieš pradedant naują pratimų programą, ypač jei turite esamų nugaros problemų ar kitų sveikatos problemų.</p>`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100vw' }}
      transition={{ type: 'tween', ease: 'anticipate', duration: 0.3 }}
      className="articles"
    >
      <h1>Sveikatos Straipsniai</h1>
      {selectedArticle ? (
        <div className="article-content">
          <button className="button-back" onClick={() => setSelectedArticle(null)}>Atgal į Straipsnius</button>
          <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
        </div>
      ) : (
        <div className="articles-container">
          {articles.map((article, index) => (
            <div key={index} className="article-card" onClick={() => setSelectedArticle(article)}>
              <img src={article.image} alt={article.title} className="article-image" />
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default ArticlesPage;