
function changePage(index) {
    let page = document.getElementById("content");
    let old = document.getElementById("oldImage");
    let head = document.getElementById("oldHead");
    let textArea = document.getElementById("oldText");
    let video = document.getElementById("oldVideo");
    let image = document.createElement("img");
    let header = document.createElement("p");
    let header2 = document.createElement("h3");
    let textArea2 = document.createElement("p");
    textArea2.className = "text-white";
    let video2 = document.createElement("iframe");
    video2.setAttribute("width", "560");
    video2.setAttribute("height", "315");
    video2.className = "embed-responsive embed-responsive-16by9"

        if (old && head) { 
            if(index == 1) {
                image.setAttribute("src", "jäätikkö.png");
                video2.setAttribute("src", "https://www.youtube.com/embed/G4H1N_yXBiA");
                header2.appendChild(document.createTextNode("Ilmastonmuutos"));
                header2.setAttribute("id", "oldHead");
                page.replaceChild(header2, head);
                let text = document.createTextNode("Ilmastonmuutos on yksi ajankohtaisimmista maapalloa ja ihmiskuntaa kohtaavista uhista. Lähes kaikki tutkijat ovat yksimielisiä siitä, että ihmisen toimet ilmastonmuutoksen kiihdyttämisessä ovat kiistattomat. Maapallon ilmasto on muuttunut historian saatossa useaan otteeseen, mutta nykyinen lämpeneminen on erityisen merkittävä. Tutkijoiden mukaan on yli 95 prosentin mahdollisuus, että ihmisen toiminta viimeisen 50 vuoden aikana on johtanut tähän lämpenemiseen. ");
                let b1 = document.createElement("br");
                let text2 = document.createTextNode("Elämä maapallolla on riippuvainen auringosta ja sen tuottamasta energiasta. Auringon tuottama säteily läpäisee maapallon ilmakehän lämmittäen maan pintaa. Maan pinta heijastaa tämän säteilyn takaisin infrapunasäteilynä. Tästä infrapunasäteilystä noin 90 prosenttia imeytyy kasvihuonekaasuihin, jotka puolestaan säteilevät takaisin maan pintaan. Tätä kutsutaan kasvihuoneilmiöksi. Ilman tätä elämä maapallolla ei olisi mahdollista, sillä maan pintalämpötila olisi liian alhainen. Ongelmana onkin, että lämpötila nousee liian nopeasti kasvihuonekaasujen lisääntyessä. Kasvihuoneilmiöön vaikuttavia kaasuja ovat vesihöyry, hiilidioksidi, metaani ja typpioksiduuli.");
                let b2 = document.createElement("br");
                let text3 = document.createTextNode("Todisteet ilmastonmuutoksesta ovat jo nähtävissä. Maapallon pintalämpötila on noussut 0,9 celsiusastetta 1800-luvun loppupuolelta. Suurin osa noususta on tapahtunut viimeisen 35 vuoden aikana. Mannerjään sulaminen on nähtävissä Grönlannissa ja arktisilla alueilla. Jäätiköiden vetäytymistä on nähtävissä kaikkialla, kuten Alpeilla, Himalajalla, Andeilla, Alaskassa ja Afrikassa. Merenpinta on noussut viimeisten vuosikymmenten aikana ja jatkaa nousua lievästi kiihtyvällä tahdilla. Säiden ääri-ilmiöt ovat yleistyneet maailmalla.");
                let b3 = document.createElement("br");
                let text4 = document.createTextNode("Tulevaisuuden näkymissä lämpeneminen jatkuu ja jo nähtävissä olevat seuraukset voimistuvat entisestään. Ilmastonmuutoksen seurauksena Suomessa tapahtuu myös muutoksia. Suomen lämpötilan on ennustettu nousevan enemmän ja nopeammin kuin keskimäärin maapallolla. Lämpötila kohoaa etenkin talvisin, hyvin alhaiset lämpötilat harvinaistuvat, hellejaksot pitenevät ja yleistyvät. Lämpeneminen näkyy nopeiten Pohjois-Suomessa. Sateet lisääntyvät ja voimistuvat. Talvet muuttuvat pilvisemmiksi ja lumipeiteaika lyhenee.");
                let b4 = document.createElement("br");
                let text5 = document.createTextNode("Lämpenemisen myötä kasvukausi pidentyy. Tämä luo Suomen maataloudelle. sekä haasteita, että mahdollisuuksia. Avainasemassa ovat oikeat viljelykasvi- ja lajikevalinnat, monimuotoinen viljely, vesitalouden hallinta, maaperän kunnossapito, sekä tautien ja tuholaisten varoitusjärjestelmät."); 
                let b5 = document.createElement("br");
                textArea2.appendChild(text);
                textArea2.appendChild(b1);
                textArea2.appendChild(text2);
                textArea2.appendChild(b2);
                textArea2.appendChild(text3);
                textArea2.appendChild(b3);
                textArea2.appendChild(text4);
                textArea2.appendChild(text5);

                if (textArea) {
                    page.replaceChild(textArea2, textArea);
                } else {
                    page.appendChild(textArea2);
                }
                if (video) {
                    page.replaceChild(video2, video);
                } else {
                    page.appendChild(video2);
                }
                textArea2.setAttribute("id", "oldText");
                
            }
            else if (index == 2) {
                image.setAttribute("src", "levinneisyys.png");
                header2.appendChild(document.createTextNode("Pandemia"));
                video2.setAttribute("src", "https://www.youtube.com/embed/6Af6b_wyiwI");
                header2.setAttribute("id", "oldHead");
                page.replaceChild(header2, head);
                let text = document.createTextNode("Pandemialla tarkoitetaan maailmanlaajuisesti levinnyttä epidemiaa. Suuri kuolleisuus määrä ei kuitenkaan aina tarkoita pandemiaa. Pandemia syntyy, kun Maailman terveysjärjestön kolme ehtoa täyttyvät. Uusi tauti ilmaantuu, joka vaikuttaa ihmisiin aiheuttaen vakavaa sairautta, sekä leviää ja vahvistuu helposti. WHO:n laatima kuusipykäläinen asteikko arvioi eläinperäisten virustautien pandemiariskiä. " +
                "Pandemian riski jatkuva ja milloin tahansa epidemia voi puhjeta pandemiaksi. Jo muutamassa viikossa tai kuukaudessa pandemia voi levitä ja aiheuttaa jopa miljoonien kuoleman. Maailmalla tehdään jatkuvasti töitä  tunnettujen tautien, kuten HIV/Aids, malaria ja polio eteen. Arvioiden mukaan epidemioiden kontrollointiin käytetään vuodessa noin 50 miljardia dollari maailmanlaajuisesti.");
                let b1 = document.createElement("br");
                let text2 = document.createTextNode("Maailma on kohdannut pandemioita historian saatossa monta kertaa. Pandemia on uhka ihmiskunnalle, sillä niitä on vaikea ennustaa ja pahimmillaan ne voivat aiheuttaa paljon tuhoa. Tulevaisuudessa on erittäin todennäköistä, että pandemia ilmaantuu. Populaatio on jatkuvassa kasvussa. Ylikansoitus ja ahtaat elinolot altistavat alueita epidemioiden synnylle, josta ne voivat laajeta pandemiaksi."); 
                textArea2.appendChild(text);
                textArea2.appendChild(b1);
                textArea2.appendChild(text2);
                if (textArea) {
                    page.replaceChild(textArea2, textArea);
                } else {
                    page.appendChild(textArea2);
                }
                if (video) {
                    page.replaceChild(video2, video);
                } else {
                    page.appendChild(video2);
                }
                textArea2.setAttribute("id", "oldText");
                
                
            }
            else if (index == 3) {
                image.setAttribute("src", "ai.jpg");
                header2.appendChild(document.createTextNode("Tekoäly"));
                header2.setAttribute("id", "oldHead");
                video2.setAttribute("src", "https://www.youtube.com/embed/8nt3edWLgIg");
                page.replaceChild(header2, head);
                let text = document.createTextNode("Tekoälyn kehitys ja sen tuomat tulevaisuuden uhkakuvat jakavat mielipiteitä. Toiset uskovat tekoälyn ratkaisevan ihmiskunnan ongelmat, kun taas  toiset uskovat sen johtavan ihmiskunnan tuhoon. Tekoäly on edistynyt nopeaan tahtiin viime aikoina. Tämän päivän tekoäly on niin kutsuttu kapea/heikko tekoäly eli se on suunniteltu suorittamaan suppea tehtävä. Tutkijoiden tulevaisuuden tähtäimenä on luoda yleinen/vahva tekoäly, joka pystyisi suoriutumaan ihmistä paremmin lähes kaikista kognitiivisista tehtävistä.");
                let b1 = document.createElement("br");
                let text2 = document.createTextNode("Tekoälyn mahdollisuudet ja kehitysvauhti luovat keskustelua ja mielipiteitä tekoälyn turvallisuudesta ja vaarallisuudesta. Tekoälystä saattaa tulla riski ihmiskunnalle ja asiantuntijat pitävät kahta tällaista skenaariota kaikista todennäköisimpänä. Ensimmäinen on, että tekoäly on ohjelmoitu tekemään jotain tuhoisaa. Automatisoidut aseet on kehiteltu tappamaan ja ne voisivat helposti aiheuttaa massatuhoja väärien ihmisten käsissä. Toinen on, että tekoäly on suunniteltu tekemään jotain hyödyllistä, mutta se kehittää tuhoisan tavan päästä tavoitteeseen. Monet kuuluista nimet, kuten Stephen Hawking, Elon Musk, Steve Wozniak ja Bill Gates  ovat ilmaisseet mediassa huolensa teköälyn turvallisuudesta. ");
                let b2 = document.createElement("br");
                let quote = document.createElement("p");
                let quoteText = document.createTextNode("Artificial intelligence will be either the best or the worst thing ever to happen humanity");
                let quoteSrc = document.createElement("footer");
                let srcText = document.createTextNode("Stephen Hawking");
                quoteSrc.appendChild(srcText);
                quoteSrc.className = "blockquote-footer";
                quote.appendChild(quoteText);
                quote.appendChild(quoteSrc);
                quote.className = "blockquote";
                textArea2.appendChild(text);
                textArea2.appendChild(b1);
                textArea2.appendChild(b2);
                textArea2.appendChild(quote);
                textArea2.appendChild(text2);
                if (textArea) {
                    page.replaceChild(textArea2, textArea);
                } else {
                    page.appendChild(textArea2);
                }
                if (video) {
                    page.replaceChild(video2, video);
                } else {
                    page.appendChild(video2);
                }
                textArea2.setAttribute("id", "oldText");
            } else {
                image.setAttribute("src", "earth.jpg");
                page.replaceChild(header, head); 
                 let headText = document.createTextNode("Maapallon ja ihmiskunnan tulevaisuutta koettelevat monet erilaiset uhat." +
            " Tulevaisuutta ei voida ennustaa, mutta ihmisen toimilla on keskenäinen rooli esimerkiksi ilmastonmuutoksen hillitsemisessä." +
            " Tällä sivulla on esitetty kolme erilaista uhkaa, jotka ovat ajankohtaisia nyt ja lähitulevaisuudessa." +
            " Kaikissa näissä kolmessa ihmisen rooli on keskeinen.");
            header.setAttribute("id", "oldHead");
            header.appendChild(headText);
            textArea.style.display = "none";
            video.style.display = "none";
            
            }
            image.setAttribute("id", "oldImage");
            image.className = "p-2";
            page.replaceChild(image, old);
            video2.setAttribute("id", "oldVideo");

        } else {
            image.setAttribute("src", "earth.jpg");
            image.setAttribute("id", "oldImage");
            header.setAttribute("id", "oldHead");
            image.className = "p-2";
            let headText = document.createTextNode("Maapallon ja ihmiskunnan tulevaisuutta koettelevat monet erilaiset uhat." +
            " Tulevaisuutta ei voida ennustaa, mutta ihmisen toimilla on keskenäinen rooli esimerkiksi ilmastonmuutoksen hillitsemisessä." +
            " Tällä sivulla on esitetty kolme erilaista uhkaa, jotka ovat ajankohtaisia nyt ja lähitulevaisuudessa." +
            " Kaikissa näissä kolmessa ihmisen rooli on keskeinen.");
            let text3 = document.createTextNode("artificial intelligence will be either the best or the worst thing ever to happen humanity");
            header.appendChild(headText);
            page.appendChild(header);
            page.appendChild(image);

        }
}