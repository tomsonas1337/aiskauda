import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
    en: {
        translation: {
            "questions": [
                "Do you notice any unevenness in your shoulder height when looking in the mirror?",
                "Do you see a noticeable curve in your back when you bend over?",
                "Do you experience back pain, especially on one side of your body?",
                "Do your clothes wear unevenly on one side of your body compared to the other?",
                "Have you noticed that one hip appears higher than the other?",
                "Do you notice a lack of symmetry in your waist area?",
                "Do you feel stiffness or discomfort in your back, especially after prolonged sitting or standing?",
                "Have you noticed changes in your posture, such as leaning to one side?",
                "Do you have family members who have been diagnosed with scoliosis?",
                "Have you recently experienced a rapid growth spurt or noticed changes in your body proportions?"
            ],
            "exercises": "Exercises",
            "exercise1": "Exercise 1",
            "exercise2": "Exercise 2",
            "exercise3": "Exercise 3",
            "articles": "Articles",
            "motusVita": "Motus Vita",
            "aboutUs": "About Us",
            "contacts": "Contacts",
            "quiz": "Quiz",
            "main_content_header": "Don't ignore back pain. Take the test.",
            "reliable_information": "Reliable information",
            "effective_solutions": "Effective solutions",
            "quality_exercises": "Quality exercises",
            "take_test_button": "Take the test",
            "physiotherapist_consultation": "Physiotherapist consultation",
            "complex_physiotherapy": "Complex physiotherapy",
            "physiotherapy": "Physiotherapy",
            "yes": "Yes",
            "no": "No",
            "result_title": "Result:",
            "points": "Points",
            "recommendation_1": "To better care for your back, consider maintaining good posture, exercising regularly, and avoiding prolonged sitting or standing.",
            "recommendation_2": "We think you would benefit from trying back exercises. We suggest visiting our ",
            "recommendation_2_link": "exercise page",
            "recommendation_3": "We highly recommend visiting the ",
            "recommendation_3_link": "Motus Vita",
            "consultation_page": " website for a consultation with professional physiotherapists.",
            "quiz_title": "Scoliosis Screening Questionnaire",
            "previous": "Previous",
            "next": "Next",
            "submit_answers": "Submit Answers",
            "intro_header": "Do I have scoliosis?",
            "intro_subheader": "Take the test!",
            "intro_paragraph": "In this test, you will see questions asked by specialist doctors during consultations. Once you complete the test and fill out all the questions, you will see results about your POSSIBLE diagnosis. You will be able to choose to register with a selected specialist doctor and choose the desired exercises.",
            "start_test": "Start the test",
            // New translations for ArticlesPage
            "articles_title": "Articles",
            "close": "Close",
            "article_1_title": "Scoliosis: Symptoms and Treatment",
            "article_1_summary": "Understand the symptoms of scoliosis and various treatment options.",
            "article_1_content": `<h3>Scoliosis: Symptoms and Treatment</h3>
                                <p>Scoliosis is a medical condition where a person's spine has a sideways curve. The curve is usually "S" or "C" shaped. The degree of curvature can vary, but more than 10 degrees of curvature is generally considered scoliosis.</p>
                                <h4>Symptoms</h4>
                                <ul>
                                    <li>Uneven shoulders</li>
                                    <li>One shoulder blade appears more prominent than the other</li>
                                    <li>Uneven waist</li>
                                    <li>One hip higher than the other</li>
                                    <li>In severe cases, the spine may also rotate or twist, causing the ribs to stick out more on one side than the other</li>
                                </ul>
                                <h4>Treatment</h4>
                                <p>Treatment for scoliosis depends on the severity of the curve and the risk of it worsening. Mild scoliosis may require only regular check-ups, while more severe cases may need bracing or surgery. Common treatments include:</p>
                                <ul>
                                    <li><strong>Bracing:</strong> For moderate scoliosis, bracing can help prevent further curvature, especially in children who are still growing.</li>
                                    <li><strong>Physical Therapy:</strong> Exercises can help strengthen the muscles that support the spine, improve posture, and reduce pain.</li>
                                    <li><strong>Surgery:</strong> Severe scoliosis may require spinal fusion surgery to straighten and stabilize the spine.</li>
                                </ul>
                                <p>Early detection is crucial for effective management of scoliosis. Regular visits to a healthcare provider are important for monitoring and managing scoliosis.</p>`,
            "article_2_title": "Posture and Back Health",
            "article_2_summary": "Learn how good posture can prevent back problems.",
            "article_2_content": `<h3>Posture and Back Health</h3>
                                <p>Good posture is essential for maintaining a healthy back and avoiding pain. Proper body alignment reduces the strain on the spine and minimizes the risk of injury.</p>
                                <h4>The Importance of Good Posture</h4>
                                <p>Maintaining a good posture is important for:</p>
                                <ul>
                                    <li>Keeping bones and joints in the correct alignment so that muscles are used properly</li>
                                    <li>Preventing fatigue because muscles are used more efficiently</li>
                                    <li>Reducing strain on ligaments that hold the spine joints together</li>
                                    <li>Preventing muscle strain, overuse disorders, and even back and muscular pain</li>
                                </ul>
                                <h4>Tips for Maintaining A Good Posture</h4>
                                <p>Here are some tips for maintaining good posture:</p>
                                <ul>
                                    <li><strong>Standing:</strong> Stand upright with your shoulders back, and weight evenly distributed on both feet.</li>
                                    <li><strong>Sitting:</strong> Sit upright with your shoulders back, using the chair's support for your back.</li>
                                    <li><strong>Sleeping:</strong> Use a mattress that provides good support and sleep with a pillow that maintains the natural curve of your neck.</li>
                                </ul>
                                <p>Consistently being aware of your posture can significantly reduce the risk of back problems. Regular exercise and mindfulness about posture throughout the day can help maintain a healthy back.</p>`,
            "article_3_title": "Exercises for a Healthy Spine",
            "article_3_summary": "Simple exercises to strengthen your spine and reduce pain.",
            "article_3_content": `<h3>Exercises for a Healthy Spine</h3>
                                <p>Regular exercise is important for maintaining a healthy spine and reducing back pain. Strengthening the muscles that support the spine, improving flexibility, and maintaining a healthy weight can contribute to spinal health.</p>
                                <h4>Recommended Exercises</h4>
                                <p>Here are some exercises that can help maintain a healthy spine:</p>
                                <ul>
                                    <li><strong>Pelvic Tilts:</strong> Lie on your back with your knees bent and feet flat on the floor. Tighten your abdominal muscles and flatten your back against the floor. Hold for a few seconds, then relax. Repeat 10-15 times.</li>
                                    <li><strong>Cat-Cow Stretch:</strong> Get on your hands and knees. Arch your back towards the ceiling (cat pose), then slowly let your back sag towards the floor (cow pose). Repeat 10-15 times.</li>
                                    <li><strong>Bird-Dog:</strong> Get on your hands and knees. Extend one arm straight in front of you and the opposite leg straight behind you. Hold for a few seconds, then return to the starting position. Repeat on the other side. Do 10-15 repetitions on each side.</li>
                                    <li><strong>Wall Sits:</strong> Stand with your back against a wall and slowly slide down into a sitting position, as if you were sitting in a chair. Hold as long as possible, then slowly rise back up. Repeat 5-10 times.</li>
                                </ul>
                                <h4>Benefits</h4>
                                <p>These exercises help strengthen the muscles supporting the spine, improve flexibility, and reduce pain. Incorporating these exercises into your daily routine can help maintain a healthy spine and prevent back problems.</p>
                                <p>Always consult with a healthcare provider before starting a new exercise program, especially if you have existing back problems or other health issues.</p>`,
            // New translations for AboutPage
            "about_page_title": "About Us",
            "about_page_description": "We are third-year students at KTU, and this website is our product development project. Our goal is to help people by spreading awareness about scoliosis and its impacts, as the number of cases is rapidly increasing.",
            "contact_us": "Contact Us",
            "our_office": "Our Office",
            "office_address": "A. Mickevičiaus g. 37, Kaunas, 44244 Kauno m. sav. 110a-110b room",
            "send_message": "Send Us a Message",
            "name": "Name",
            "email": "Email",
            "message": "Message",
            "send": "Send"
        },
    },
    lt: {
        translation: {
            "questions": [
                "Ar pastebite nelygumą pečių aukštyje žiūrėdami į veidrodį?",
                "Ar matote akivaizdų išlinkimą nugaros srityje pasilenkus?",
                "Ar jaučiate nugaros skausmą, ypač vienoje kūno pusėje?",
                "Ar jūsų drabužiai nevienodai gula vienoje kūno pusėje lyginant su kita?",
                "Ar pastebėjote, kad vienas klubas atrodo aukštesnis nei kitas?",
                "Ar pastebite simetrijos trūkumą juosmens srityje?",
                "Ar jaučiate standumą ar diskomfortą nugaroje, ypač po ilgo sėdėjimo ar stovėjimo?",
                "Ar pastebėjote pokyčius savo laikysenoje, pvz., polinkį į vieną pusę?",
                "Ar turite šeimos narių, kurie turi diagnozuotą skoliozę?",
                "Ar neseniai patyrėte greitą ūgio augimą ar pastebėjote pokyčius savo kūno proporcijose?"
            ],
            "exercise1": "Mankšta 1",
            "exercise2": "Mankšta 2",
            "exercise3": "Mankšta 3",
            "articles": "Straipsniai",
            "exercises": "Mankštos",
            "motusVita": "Motus Vita",
            "aboutUs": "Apie Mus",
            "contacts": "Kontaktai",
            "quiz": "Testas",
            "main_content_header": "Nenumokite ranka į nugaros skausmus. Atlikite testą.",
            "reliable_information": "Patikima informacija",
            "effective_solutions": "Efektyvūs sprendimai",
            "quality_exercises": "Kokybiškos mankštos",
            "take_test_button": "Atlikti testą",
            "physiotherapist_consultation": "Kineziterapeuto konsultacija",
            "complex_physiotherapy": "Kompleksinė kineziterapija",
            "physiotherapy": "Fizioterapija",
            "yes": "Taip",
            "no": "Ne",
            "result_title": "Rezultatas:",
            "points": "Taškai",
            "recommendation_1": "Norėdami geriau prižiūrėti savo nugarą, apsvarstykite galimybę išlaikyti gerą laikyseną, reguliariai mankštintis ir vengti ilgalaikio sėdėjimo ar stovėjimo.",
            "recommendation_2": "Manome, kad jums būtų naudinga išbandyti pratimus nugarai. Siūlome apsilankyti mūsų ",
            "recommendation_2_link": "mankštų puslapyje",
            "recommendation_3": "Labai rekomenduojame apsilankyti ",
            "recommendation_3_link": "Motus Vita",
            "consultation_page": " svetainėje konsultacijai su profesionaliais kineziterapeutais.",
            "quiz_title": "Skoliozės tikrinimo klausimynas",
            "previous": "Ankstesnis",
            "next": "Kitas",
            "submit_answers": "Pateikti atsakymus",
            "intro_header": "Ar turiu skoliozę?",
            "intro_subheader": "Atlikite testą!",
            "intro_paragraph": "Šiame teste matysite gydytojų specialistų užduodamus klausimus konsultacijose. Jums atlikus testą ir užpildžius visus klausimus, bus rodomi rezultatai apie Jūsų GALIMĄ diagnozę. Galėsite rinktis registraciją pas pasirinktą gydytoją specialistą bei pasirinkti norimas mankštas.",
            "start_test": "Pradėti",
            // New translations for ArticlesPage
            "articles_title": "Straipsniai",
            "close": "Uždaryti",
            "article_1_title": "Skoliozė: Simptomai ir gydymas",
            "article_1_summary": "Supraskite skoliozės simptomus ir įvairius gydymo būdus.",
            "article_1_content": `<h3>Skoliozė: Simptomai ir gydymas</h3>
                                <p>Skoliozė yra medicininė būklė, kai žmogaus stuburas turi šoninį išlinkimą. Kreivė paprastai yra "S" arba "C" formos. Kreivumo laipsnis gali skirtis, tačiau daugiau nei 10 laipsnių kreivumas paprastai laikomas skolioze.</p>
                                <h4>Simptomai</h4>
                                <ul>
                                    <li>Nelygūs pečiai</li>
                                    <li>Viena mentė atrodo labiau iškilusi nei kita</li>
                                    <li>Nelygus liemuo</li>
                                    <li>Vienas klubas aukščiau nei kitas</li>
                                    <li>Sunkiais atvejais stuburas taip pat gali suktis, dėl ko šonkauliai labiau išsikiša vienoje pusėje nei kitoje</li>
                                </ul>
                                <h4>Gydymas</h4>
                                <p>Skoliozės gydymas priklauso nuo kreivės sunkumo ir rizikos, kad ji pablogės. Lengva skoliozė gali reikalauti tik reguliarių patikrinimų, o sunkesniais atvejais gali prireikti korseto ar operacijos. Dažni gydymo būdai yra:</p>
                                <ul>
                                    <li><strong>Korsetas:</strong> Vidutinės skoliozės atveju korsetas gali padėti išvengti tolesnio kreivumo, ypač vaikams, kurie dar auga.</li>
                                    <li><strong>Fizinė terapija:</strong> Pratimai gali padėti sustiprinti stuburo raumenis, pagerinti laikyseną ir sumažinti skausmą.</li>
                                    <li><strong>Operacija:</strong> Sunkiems skoliozės atvejams gali prireikti stuburo suliejimo operacijos, kad stuburas būtų ištiesintas ir stabilizuotas.</li>
                                </ul>
                                <p>Ankstyvas nustatymas ir reguliarūs vizitai pas sveikatos priežiūros specialistą yra svarbūs skoliozės stebėjimui ir valdymui.</p>`,
            "article_2_title": "Laikysena ir nugaros sveikata",
            "article_2_summary": "Sužinokite, kaip gera laikysena gali užkirsti kelią nugaros problemoms.",
            "article_2_content": `<h3>Laikysena ir nugaros sveikata</h3>
                                <p>Gera laikysena yra būtina norint išlaikyti sveiką nugarą ir išvengti skausmo. Taisyklinga laikysena sumažina stuburo apkrovą ir sumažina sužalojimų riziką.</p>
                                <h4>Geros laikysenos svarba</h4>
                                <p>Geros laikysenos puoselėjimas yra svarbus:</p>
                                <ul>
                                    <li>Kad kaulai ir sąnariai būtų tinkamai išdėstyti, kad raumenys būtų tinkamai naudojami</li>
                                    <li>Nuovargio prevencijai, nes raumenys naudojami efektyviau</li>
                                    <li>Raisčių, kurie laiko stuburo sąnarius kartu, įtampai mažinti</li>
                                    <li>Raumenų įtampos, per didelio naudojimo sutrikimų ir net nugaros bei raumenų skausmo prevencijai</li>
                                </ul>
                                <h4>Patarimai gerai laikysenai išsaugoti</h4>
                                <p>Štai keletas patarimų, kaip išlaikyti gerą laikyseną:</p>
                                <ul>
                                    <li><strong>Stovint:</strong> Stovėkite tiesiai su pečiais atgal, svoris tolygiai paskirstytas ant abiejų kojų.</li>
                                    <li><strong>Sėdint:</strong> Sėdėkite tiesiai su pečiais atgal, naudodamiesi kėdės atrama nugarai.</li>
                                    <li><strong>Miegant:</strong> Naudokite čiužinį, kuris suteikia gerą atramą, ir miegokite su pagalve, kuri palaiko natūralų kaklo kreivumą.</li>
                                </ul>
                                <p>Pastovus sąmoningumas palaikyti gerą laikyseną gali žymiai sumažinti nugaros problemų riziką. Reguliarūs pratimai ir sąmoningumas apie laikyseną visą dieną gali padėti išlaikyti sveiką nugarą.</p>`,
            "article_3_title": "Pratimai sveikam stuburui",
            "article_3_summary": "Paprasti pratimai, skirti sustiprinti stuburą ir sumažinti skausmą.",
            "article_3_content": `<h3>Pratimai sveikam stuburui</h3>
                                <p>Reguliarūs pratimai yra svarbūs norint išlaikyti sveiką stuburą ir sumažinti nugaros skausmą. Raumenų, palaikančių stuburą, stiprinimas, lankstumo gerinimas ir sveiko svorio palaikymas gali prisidėti prie stuburo sveikatos.</p>
                                <h4>Rekomenduojami pratimai</h4>
                                <p>Štai keletas pratimų, kurie gali padėti išlaikyti sveiką stuburą:</p>
                                <ul>
                                    <li><strong>Dubens pasvirimai:</strong> Atsigulkite ant nugaros su sulenktais keliais ir pėdomis plokščiai ant grindų. Įtempkite pilvo raumenis ir suplokštinkite nugarą ant grindų. Laikykite kelias sekundes, tada atsipalaiduokite. Kartokite 10-15 kartų.</li>
                                    <li><strong>Katės-karvės tempimas:</strong> Atsiklaupkite ant rankų ir kelių. Išlinkite nugarą link lubų (katės poza), tada lėtai nuleiskite nugarą, leisdami pilvui nusileisti link grindų (karvės poza). Kartokite 10-15 kartų.</li>
                                    <li><strong>Paukštis-šuo:</strong> Atsiklaupkite ant rankų ir kelių. Ištieskite vieną ranką tiesiai priešais save ir priešingą koją tiesiai atgal. Laikykite kelias sekundes, tada grįžkite į pradinę padėtį. Kartokite kitą pusę. Darykite 10-15 pakartojimų kiekvienoje pusėje.</li>
                                    <li><strong>Kėdutė:</strong> Atsistokite nugarą prie sienos ir lėtai nusileiskite į sėdėjimo padėtį, tarsi sėdėtumėte kėdėje. Laikykite kuo ilgiau, tada lėtai vėl pakilkite. Kartokite 5-10 kartų.</li>
                                </ul>
                                <h4>Nauda</h4>
                                <p>Šie pratimai padeda sustiprinti raumenis, palaikančius stuburą, pagerina lankstumą ir sumažina skausmą. Įtraukus šiuos pratimus į savo kasdienę rutiną, galite padėti išlaikyti sveiką stuburą ir išvengti nugaros problemų.</p>
                                <p>Visada pasitarkite su sveikatos priežiūros specialistu prieš pradedami naują pratimų programą, ypač jei turite esamų nugaros ar kitų sveikatos problemų</p>`,
            // New translations for AboutPage
            "about_page_title": "Apie mus",
            "about_page_description": "Mes esame KTU trečiojo kurso studentai, ir ši svetainė yra mūsų produkto vystymo projektas. Mūsų tikslas - padėti žmonėms skleidžiant žinią apie skoliozę ir jos padarinius, nes jos atvejų skaičius sparčiai auga.",
            "contact_us": "Susisiekite su mumis",
            "our_office": "Mūsų biuras",
            "office_address": "A. Mickevičiaus g. 37, Kaunas, 44244 Kauno m. sav. 110a-110b kab.",
            "send_message": "Parašykite mums žinutę",
            "name": "Vardas",
            "email": "El. paštas",
            "message": "Žinutė",
            "send": "Siųsti"
        },
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'lt', // Default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
