import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: 80vh;
`

const SectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem 16rem 8rem 25rem;
  @media only screen and (max-width: 1842px) {
    margin: 8rem 10rem 8rem 15rem;
  }
  @media only screen and (max-width: 1560px) {
    margin: 8rem 8rem 8rem 14rem;
  }
  @media only screen and (max-width: 1287px) {
    margin: 7rem 6rem 8rem 10rem;
  }
  @media only screen and (max-width: 1109px) {
    margin: 7rem 6rem 8rem 4rem;
  }
  @media only screen and (max-width: 767px) {
    margin: 6rem 3rem;
  }

  max-width: 820px;
  
  .titleWrapper {
    display: flex;
    align-items: center;
    margin: 6rem 0 0;
  }

  h1 {
    font-weight: 900;
    margin: 0;
    font-size: 3.6rem;
    line-height: 1.3em;
    @media only screen and (max-width: 520px) {
      font-size: 2rem;
    }
  }

  span {
    width: 3.9rem;
    height: 0.3rem;
    background-color: var(--accent);
    margin-right: 1.8rem;
    @media only screen and (max-width: 767px) {
      margin-right: 1.4rem;
    }
    @media only screen and (max-width: 520px) {
      margin-left: -2rem;
    }
  }
  h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: 0.96px;
    @media only screen and (max-width: 767px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
    @media only screen and (max-width: 520px) {
      font-size: 1.2rem;
      line-height: 1.3em;
    }
  }
  p {
    font-size: 2rem;
    line-height: 1.3em;
    font-weight: 400;
    margin-top: 4rem;
    max-width: 1600px;
    margin-right: 6rem;
    padding-left: 2rem;
    @media only screen and (max-width: 1410px) {
      margin-top: 3rem;
    }
    @media only screen and (max-width: 1204px) {
      margin-top: 2rem;
    }
    @media only screen and (max-width: 767px) {
      margin-top: 3rem;
      margin-right: 0rem;
    }
    @media only screen and (max-width: 520px) {
      margin-top: 1rem;
      margin-right: 0rem;
      font-size: 1.8rem;
      padding-left: 0rem;
    }
  }

`

const PrivacyPolicy = () => {
  return (    
  <Wrapper>
    <SectionStyles>
      <h1>Polityka przetwarzania danych osobowych</h1>
      <p>Na podstawie art. 13 ust. 1 i ust. 2 oraz art. 14 ust. 1 i ust. 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/56/ WE (dalej jako: „<b>RODO</b>”) stosowanego od 25 maja 2018 r. informujemy Państwa o sposobie i celu, w jakim przetwarzamy Państwa dane osobowe (dalej jako „<b>dane</b>”), a także o przysługujących Państwu prawach związanych z ochroną danych.</p>
    
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">Kto jest odpowiedzialny za przetwarzanie danych i z kim można się skontaktować?</h2>
      </div>
      <p>Administratorem Państwa danych jest NASZ OKRAJ Sp. z o.o., oddział w Polsce, (dalej jako „<b>Spółka</b>”), z którą można się skontaktować: pisemnie, kierując korespondencję pod adres: NASZ OKRAJ Sp. z o.o., ul. Profesora Tutki 10, 05-140 Jadwisin, telefonicznie, pod numerem: +48 509 411 729 lub 508 563 321, e-mailowo, pod adresem: prezes@naszokraj.eu</p>
      <p>Spółka wyznaczyła inspektora ochrony danych, z którym można się skontaktować pisemnie, kierując korespondencję na adres: NASZ OKRAJ Sp. z o.o., , ul. Profesora Tutki 10, 05-140 Jadwisin, z dopiskiem: „<b>Inspektor ochrony danych</b>” oraz e-mailowo pod adresem: kancelaria@naszokraj.eu</p>
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">Dlaczego, po co i na jakiej podstawie prawnej przetwarzamy Państwa dane?</h2>
      </div>
      <p>Przetwarzamy Państwa dane zgodnie z postanowieniami RODO i polskimi przepisami w zakresie ochrony danych. Robimy to, ponieważ wypełniamy: zobowiązania wynikające z umowy oraz podejmujemy działania na żądanie osoby, której dane dotyczą, przed zawarciem umowy (art. 6 ust. 1 lit b RODO), obowiązki prawne (art. 6 ust. 1 lit c RODO), zadania służące interesowi publicznemu (art. 6 ust. 1 lit. e RODO).</p>
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">Co to oznacza?</h2>
      </div>
      <p>Dane są przetwarzane w celu realizacji czynności, zawarcia lub wykonania umowy, w związku z którymi zostały przekazane do Spółki, na przykład w celu realizacji procesu rekrutacji, nawiązania relacji w ramach umowy agencyjnej, pośrednictwa, o współpracy lub innej umowy handlowej, w zależności od okoliczności. Dane są przetwarzane w celu wykonywania przez Spółkę działalności gospodarczej oraz świadczenia innych usług w ramach realizacji umów zawartych z klientami albo pracownikami lub w celu realizacji działań wykonywanych na życzenie klienta przed lub w związku z zawarciem umowy. W razie konieczności będziemy przetwarzać Państwa dane w celu realizacji wymogów nakładanych m.in. przez wyżej wskazane regulacje. Państwa dane mogą być ponadto przetwarzane do takich celów jak: wykonywanie obowiązków zgodnie z ustawodawstwem podatkowym, obowiązkiem ubezpieczeń społecznych. Ponadto istotne jest, że: przetwarzamy dane, jeśli zajdzie taka potrzeba, do celów wynikających z prawnie uzasadnionych interesów realizowanych przez Spółkę lub stronę trzecią (art. 6 ust. 1 lit f RODO). Zgoda może zostać wycofana w dowolnym momencie. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania przez Spółkę danych: do czasu wycofania zgody lub w okolicznościach, w których Spółka przetwarza dane w oparciu o inną podstawę niż Państwa zgoda.</p>
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">Komu możemy przekazywać dane?</h2>
      </div>
      <p>Dane mogą być udostępniane innym odbiorcom w celu wykonania umowy z Państwem, w celu wykonania ciążącego na Spółce obowiązku prawnego, w oparciu o Państwa zgodę lub dla celów wynikających z prawnie uzasadnionych interesów administratora lub strony trzeciej. Odbiorcami mogą być w szczególności: upoważnieni pracownicy Spółki oraz inne osoby działające z upoważnienia Spółki. Dane są przekazywane również podmiotom przetwarzającym dane na zlecenie Spółki i osobom działającym z ich upoważnienia, przy czym takie podmioty przetwarzają dane na podstawie umowy ze Spółką i wyłącznie zgodnie z poleceniami Spółki oraz pod warunkiem zachowania tajemnicy zawodowej i ubezpieczeniowej (czyli szczególnych obowiązków ochrony informacji wynikających z odpowiednich przepisów prawa). Do grona podmiotów realizujących zadania w imieniu i na rzecz Spółki zaliczają się podmioty świadczące usługi w szczególności z zakresu działalności bankowej, informatycznej, windykacyjnej, prawnej, ubezpieczeniowej (w tym pośrednictwa ubezpieczeniowego), agencyjnej, pośrednictwa, marketingowej.</p>
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">Czy Państwa dane zostaną przesłane do państwa trzeciego (poza Unię Europejską)?</h2>
      </div>
      <p>Dane mogą być przekazywane do odbiorców w krajach spoza Unii Europejskiej („<b>państwa trzecie</b>”): jeżeli jest to niezbędne do wykonania umowy zawartej pomiędzy Państwem a Spółką lub do podjęcia działań przed zawarciem takiej umowy w celu jej zawarcia, w ramach korzystania przez Spółkę z infrastruktury informatycznej (chmura obliczeniowa, poczta elektroniczna). W przypadku, gdy przetwarzanie obejmuje przekazywanie danych poza obszar Unii Europejskiej, taki transfer będzie odbywał się z wykorzystaniem Standardowych Klauzul Umownych lub regulacji Privacy Shield zatwierdzonych przez Komisję Europejską, w celu zapewnienia odpowiedniego poziomu ochrony danych osobowych wymaganego przepisami. W innych sytuacjach Państwa dane mogą zostać przekazane do państw trzecich w przypadkach wskazanych w RODO. Kopię danych przekazywanych do państwa trzeciego mogą Państwo uzyskać po zgłoszeniu takiej prośby do inspektora ochrony danych. Przekazanie danych do państwa trzeciego może mieć miejsce również po uzyskaniu Państwa zgody. Zgodnie z powyższym, Państwa dane będą przekazywane do państwa trzeciego na podstawie art. 49 ust. 1 lit a oraz art. 49 ust. 1 lit b RODO.</p>
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">Jak długo będą przetwarzane (przechowywane) Państwa dane?</h2>
      </div>
      <p>Państwa dane będą przetwarzane przez okres niezbędny do realizacji celów przetwarzania wskazanych w pkt. 2, tj.: w zakresie realizacji zawartej ze Spółką umowy – do czasu zakończenia jej realizacji, a po tym czasie przez okres wymagany przez przepisy prawa lub dla realizacji ewentualnych roszczeń, w zakresie wypełniania zobowiązań prawnych ciążących na Spółce w związku z  prowadzeniem działalności i realizacją zawartych umów – do czasu wypełnienia tych obowiązków przez Spółkę, w zakresie przetwarzania realizowanego wyłącznie w oparciu o zgodę – do czasu niezwłocznego usunięcia danych, zrealizowanego w oparciu o zgłoszone przez Państwa żądanie, do czasu wypełnienia prawnie uzasadnionych interesów Spółki stanowiących podstawę tego przetwarzania lub do czasu wniesienia przez Państwa sprzeciwu wobec takiego przetwarzania, o ile nie występują prawnie uzasadnione podstawy dalszego przetwarzania danych.</p>
          <div className="titleWrapper">
        <span></span>
        <h2 className="line">Jakie prawa przysługują Państwu, aby dane były odpowiednio chronione?</h2>
      </div>
      <p>Mają Państwo prawo: żądać dostępu do swoich danych, a także żądać ich sprostowania, ograniczenia ich przetwarzania lub ich usunięcia, wycofania w dowolnym momencie udzielonej wcześniej zgody na przetwarzanie danych w zakresie, jakiego dotyczy ta zgoda, z tym zastrzeżeniem, że wycofanie zgody nie będzie miało wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem, żądać przeniesienia dostarczonych Spółce przez Państwa danych przetwarzanych w celu zawarcia i wykonywania umowy lub przetwarzanych na podstawie zgody. Przeniesienie polega na otrzymaniu przez Państwa od Spółki Państwa danych w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego oraz prawie do przesłania ich innemu administratorowi danych, o ile jest to technicznie możliwe. Uprawnienie nie dotyczy danych, które stanowią tajemnicę przedsiębiorstwa Spółki, wnieść skargę do organu nadzorczego, którym w Rzeczypospolitej Polskiej jest Prezes Urzędu Ochrony Danych Osobowych, jeśli Państwo uznają, że przetwarzanie Państwa danych narusza przepisy, w tym RODO. Ponadto mają Państwo prawo wnieść w dowolnym momencie sprzeciw wobec przetwarzania przez Spółkę danych: z przyczyn związanych z Państwa szczególną sytuacją, gdy Spółka przetwarza dane do celów wynikających z prawnie uzasadnionych interesów (art. 21 ust. 1 RODO), w celach związanych z marketingiem bezpośrednim, w tym wobec profilowania w celach marketingowych, w zakresie w jakim przetwarzanie danych jest związane z marketingiem bezpośrednim (art. 21 ust. 2 RODO). Spółka w celu realizacji Państwa prawa może zażądać dodatkowych informacji niezbędnych do potwierdzenia tożsamości.</p>  
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">Czy mają Państwo obowiązek dostarczyć dane?</h2>
      </div>
      <p>W zakresie, w jakim przetwarzanie Państwa danych następuje w celu wykonania wnioskowanych czynności lub zawarcia i  realizacji umowy ze Spółką, podanie przez Państwa danych jest warunkiem wykonania wnioskowanych czynności lub zawarcia tej umowy. Podanie danych ma charakter dobrowolny, lecz jest niezbędne do wykonania wnioskowanych czynności lub zawarcia i realizacji umowy ze Spółką. Abyśmy mogli spełnić te czynności lub obowiązki, przepisy wymagają dostarczenia nam niezbędnych informacji lub dokumentacji oraz niezwłocznego powiadomienia nas o wszelkich zmianach. Jeśli Państwo nie dostarczą Spółce niezbędnych informacji lub dokumentów, Spółka nie będzie mogła przeprowadzić wnioskowanych czynności lub zawrzeć i realizować umów oraz prowadzić obsługi.</p>
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">Skąd pozyskujemy Państwa dane i jakie są ich kategorie?</h2>
      </div>
      <p>Większość przetwarzanych przez Spółkę danych pochodzi bezpośrednio od zainteresowanego podmiotu, w szczególności klienta, pracownika.</p>
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">W jakim stopniu korzystamy z automatycznego podejmowania decyzji, w tym profilowania?</h2>
      </div>
      <p>Przetwarzanie Państwa danych może odbywać się w sposób zautomatyzowany, co może wiązać się ze  zautomatyzowanym podejmowaniem decyzji. Weryfikacja dokonywana jest na podstawie zdefiniowanego zestawu reguł i algorytmów według opisanego i zatwierdzonego przez Spółkę procesu badania, jeżeli takowa występuje.</p>                        
    </SectionStyles>
  </Wrapper>
  )
}

export default PrivacyPolicy
