import PlayPauseButton from '@/components/play-button';
import { Inter } from "next/font/google";
import { useEffect, useRef } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Detail2() {
  const proseRef = useRef<HTMLDivElement>(null);

  const progress = 100
  const duration = 191

  useEffect(() => {
    if (proseRef.current) {
      const proseTop = proseRef.current.offsetTop;
      const proseHeight = proseRef.current.offsetHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const progressPercentage = (progress / duration) * 100;
      
      const scrollOffsetWithinProse = proseHeight * (progressPercentage / 100);
      
      let scrollTarget = proseTop + scrollOffsetWithinProse - (windowHeight * (progressPercentage / 100));
      
      
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <PlayPauseButton
        src='/audio/slobodny-svet.mp3'
        id="1"
        progress={progress}
        duration={duration}
      />
      <div className='prose' ref={proseRef}>
         <p>Přehlížení významu obchodu a&#160;nepochopení evoluce je sice charakteristické už pro Aristotela, a&#160;jakmile si aristotelovské myšlení našlo své pevné místo v&#160;systému Tomáše Akvinského, stalo se východiskem protikomerčních postojů středověké a&#160;rané moderní církve, nicméně k&#160;účinnému zpochybnění ústředních hodnot a&#160;institucí rozšířeného řádu došlo až o&#160;něco později, především mezi francouzskými mysliteli sedmnáctého a&#160;osmnáctého století.</p>

        <p>Prvním ze souhrnně působících aspektů tohoto vývoje bylo, že se díky nástupu moderní vědy připisovala stále větší důležitost jisté formě racionalismu, které říkám „konstruktivismus“ nebo (podle Francouzů) „scientismus“, jež si na několik dalších století v&#160;podstatě uzurpovala seriózní úvahy o&#160;rozumu a&#160;jeho roli v&#160;lidských záležitostech. Tato zvláštní forma racionalismu byla výchozím bodem zkoumání, jimž jsem se věnoval po šedesát minulých let a&#160;v&#160;nichž jsem se snažil dokázat, že je nepodložená, že obsahuje nepravdivou teorii vědy a&#160;racionality, ve které je rozum&#160;<em>zneužíván</em>&#160;a&#160;která&#160;– což je na tomto místě nejdůležitější&#160;– nutně vede k&#160;chybnému výkladu podstaty a&#160;původů lidských institucí. Díky tomuto výkladu nakonec moralisté&#160;–&#160;<em>jménem</em>&#160;rozumu a&#160;nejvyšších hodnot civilizace&#160;– lichotí lidem relativně neúspěšným a&#160;podněcují je k&#160;tomu, aby ctili průchod svým primitivním tužbám.</p>

        <p>Zmíněná forma racionalismu se v&#160;moderním období odvíjí od René Descarta. Zbavuje se tradice a&#160;nadto tvrdí, že čistý rozum je schopen přímo sloužit našim přáním, aniž by k&#160;tomu nějakého podobného prostředníka potřeboval, a&#160;může&#160;– sám od sebe&#160;– vybudovat nový svět, novou morálku, nové právo a&#160;dokonce i&#160;nový a&#160;očištěný jazyk. A&#160;tato teorie, byť je nepochybně falešná (viz též Popper, 1934/1959 a&#160;1945/1966), dosud zaujímá dominující postavení v&#160;myšlení většiny vědců a&#160;také většiny literátů, umělců a&#160;intelektuálů.</p>

        <p>Snad bych měl to, co jsem zde právě napsal upřesnit a&#160;dodat, že v&#160;rámci tzv. racionalismu jsou i&#160;jiné proudy a&#160;ty k&#160;těmto otázkám přistupuji jinak. Jeden z&#160;nich například považuje samotná pravidla morálního chování za&#160;<em>součást</em>&#160;rozumu. John Locke v&#160;souladu s&#160;tím vysvětloval, že „rozumem se však zde podle mne nemíní schopnost pochopení, jež tvoří myšlenkové postupy a&#160;dedukuje důkazy, ale přesné vymezené principy činnosti, z&#160;nichž vyvěrají všechny ctnosti a&#160;vše, co je nezbytné pro utváření morálních zásad“ (1954:11). Názory podobné Lockovým však mezi těmi, kdo se označují za racionalisty, zůstávají v&#160;menšině.</p>

        <p>Další, příbuzná stránka vývoje, který zaútočil na rozšířený řád, vyvstala z&#160;díla a&#160;vlivu Jean-Jacquesa Rousseaua. I&#160;tento výstřední myslitel se přidržel karteziánské inspirace a&#160;byl na nacionalistickém myšlení hluboce závislý, přestože jej mnozí mají za iracionalistu či romantika. Rousseauova opojná směs idejí postupně ovládla „pokrokové“ myšlení a&#160;způsobila, že lidé zapomněli, že svoboda jako lidská instituce&#160;<em>nevznikla</em>&#160;tím, že lidé „o&#160;svobodu usilovali“ ve smyslu vymanění se z&#160;omezení, ale tím, že se snažili ochraňovat rozpoznanou a&#160;bezpečnou individuální sféru. Díky Rousseauovi si lidé přestali uvědomovat, že mají-li pravidla chování vyústit v&#160;řád, musí být donucovací a&#160;že právě omezováním rozsahu prostředků, jichž může každý jednotlivec použít k&#160;dosažení svých záměrů, významně rozšiřují okruh cílů, které může každý úspěšně realizovat.</p>

        <p>Byl to Rousseau, kdo v&#160;úvodu své&#160;<em>Společenské smlouvy</em>&#160;vyhlásil, že „člověk se narodil svoboden a&#160;všude je v&#160;okovech“, kdo chtěl osvobodit lidi od všech „umělých“ zábran a&#160;učinil skutečným hrdinou pokrokových intelektuálů tzv. divocha, kdo žádal lidi, aby ze sebe setřásli přesně ta omezení, jimž vděčili za svoji produktivitu a&#160;početnost, a&#160;kdo vytvořil koncepci svobody, která se stala největší překážkou v&#160;jejím uskutečňování. Nejprve postuloval, že živočišný instinkt je lepším vodítkem k&#160;uspořádané spolupráci mezi lidmi než tradice nebo rozum, a&#160;poté si vymyslel údajnou vůli lidu neboli „obecnou vůli“, jíž se lid „stává jednoduchou bytostí, jedincem“ (<em>O&#160;společenské smlouvě</em>, I, vii; viz Popper, 1945/1966:II, 54). To představuje snad hlavní zdroj osudné domýšlivosti moderního racionalismu&#160;– slibujícího nás dovést zpět do ráje, kde nám naše přirozené instinkty&#160;– spíše než na ně uvalované získané zábrany&#160;– umožní, abychom si, jak nás vybízí kniha&#160;<em>Genesis</em>, „podmanili svět“.</p>

        <p>Svůdnost této představy je nepochybně ohromná, za svou sílu však sotva může děkovat (ať už si nárokuje cokoli) rozumu nebo průkazným faktům. Jak jsme si již všimli, divoch nebyl ani zdaleka svobodný a&#160;vůbec si už neuměl podmanit svět. Ve skutečnosti toho mohl dělat velmi málo, jestliže s&#160;tím nesouhlasila celá tlupa, jejímž byl členem. Individuální rozhodnutí předpokládá existenci individuálně ovládané sféry, a&#160;je tudíž možné pouze s&#160;vývojem odděleného vlastnictví, který pak staví základy pro růst rozšířeného řádu přesahujícího představu nejen náčelníka a&#160;vůdce, ale i&#160;celého kolektivu.</p>

        <p>Rousseauovu volání nelze přes veškeré tyto rozpory upřít působivost&#160;– vždyť v&#160;uplynulých dvou stoletích otřáslo naší civilizací. Jeho výzva je iracionální, přesto však působila na pokrokáře karteziánským našeptáváním, že bychom mohli k&#160;dosažení a&#160;ospravedlnění přímého ukojení našich přirozených instinktů použít&#160;<em>rozumu</em>. Jakmile Rousseau intelektuálně oprávnil odhození kulturních zábran, legitimizoval snahy „osvobodit“ se od omezení, která svobodu umožnila, a&#160;tento útok na základy svobody&#160;<em>nazval</em>&#160;„volností“, stalo se vlastnictví nanejvýš podezřelým a&#160;přestalo být chápáno jako klíčový faktor, jehož působením jsme dospěli k&#160;rozšířenému řádu. Začal spíše převládat názor, že pravidla regulující hranice a&#160;převod odděleného vlastnictví je možno nahradit centrálním rozhodováním o&#160;jeho využití.</p>

        <p>V&#160;devatenáctém století jako by už seriózní intelektuální ocenění vlastnictví i&#160;diskuse o&#160;jeho roli v&#160;rozvoji civilizace upadly v&#160;mnoha směrech do určité klatby. Vlastnictví se tehdy postupně stávalo podezřelým pro mnohé z&#160;těch, od kterých by se za jiných okolností dalo očekávat, že je budou zkoumat. Pro pokrokové zastánce racionálního přetváření struktury lidské spolupráce začalo být námětem, kterému je lépe se vyhnout. (Že tato klatba přetrvala i&#160;do století dvacátého, ukazují na příklad proklamace Briana Barryho (1961:80) o&#160;obvyklé „analytické“ praxi, v&#160;níž je spravedlnost „nyní analyticky spojena se ‚zásluhou‘ a&#160;‚potřebou‘, takže lze celkem správně říci, že některá z&#160;Humových ‚pravidel spravedlnosti‘ jsou nespravedlivá“. Dalším dokladem nechť je uštěpačná poznámka o&#160;něco později vyslovená Gunnarem Myrdalem o&#160;„tabu vlastnictví a&#160;smlouvy“ (1969:17). Zakladatelé antropologie například stále větší měrou opomíjeli kulturní funkci vlastnictví, takže třeba ve dvousvazkové&#160;<em>Primitivní kultuře</em>&#160;od E. B. Tylora (1871) nenajdeme ve věcném rejstříku heslo vlastnictví ani majetek. Oproti tomu E. Westermarck, který věnoval vlastnictví rozsáhlou kapitolu, už pod vlivem Saint-Simona a&#160;Marxe přistupuje k&#160;majetku jako k&#160;nežádoucímu zdroji „bezpracného příjmu“ a&#160;dochází k&#160;závěru, že „vlastnické právo projde dříve či později radikální změnou“ (1908:II, 71). Socialistická předpojatost konstruktivismu ovlivnila také soudobou archeologii, ale zcela nepokrytě projevuje svou neschopnost obsáhnout ekonomické jevy v&#160;sociologii (a&#160;dokonce v&#160;ještě horší podobě v&#160;tzv. „sociologii poznání“). Sociologii by vlastně šlo téměř nazvat socialistickou vědou, když se tak otevřeně prezentovala její schopnost vytvářet nový socialistický řád (Ferri, 1875) nebo&#160;– v&#160;poslední době&#160;– schopnost „předvídat budoucí vývoj a&#160;modelovat budoucnost či… utvářet budoucnost lidstva“ (Segerstedt, 1969:441). Podobně jako si kdysi „naturologie“ nárokovala, že nahradí veškerá specializovaná zkoumání přírody, sociologie si dnes vykračuje v&#160;povznesené nevšímavosti k&#160;vědění nabytému tradičními obory, jež už dlouho studují takové zakořeněné struktury, jako jsou právo, jazyk a&#160;trh.</p>

        <p>Před chvíli jsem uvedl, že studium tradičních institucí&#160;– například vlastnictví&#160;– „upadlo do klatby“. To se nebude zdát vůbec přehnané, pokud si uvědomíme, jak velmi podivné je, že tak zajímavý a&#160;důležitý proces, jakým je evoluční selekce morálních tradicí, byl tak málo studován a&#160;že směr, který tyto tradice daly vývoji civilizace, byl v&#160;tak velké míře ignorován. Jistě, konstruktivistovi to tak zvláštní připadat nebude. Trpí-li někdo falešnou představou „sociálního inženýrství“, představou, že si člověk může vědomě volit, kam chce jít, nebude mít pro něj velký význam otázka, jak člověk dospěl do své nynější situace.</p>

        <blockquote>
        <p>Chci zde mimochodem zmínit&#160;– ovšem nemohu nyní tuto věc zkoumat hlouběji –, že útoky na vlastnictví a&#160;tradiční hodnoty nevycházely jen od Rousseauových následovníků, ale též, byť snad s&#160;méně závažnými důsledky, z&#160;náboženství. Revoluční hnutí naší doby (racionalistický socialismus a&#160;později komunismus) totiž napomohla oživit staré heretické tradice náboženské revolty proti základním institucím vlastnictví a&#160;rodiny. V&#160;dřívějších staletích podněcovali tyto vzpoury heretikové z&#160;řad gnostiků, manichejců, bogomilců a&#160;katarzitů. Do devatenáctého století sice tito konkrétní heretikové vymizeli, ale objevily se tisíce nových náboženských revolucionářů, kteří zaměřovali velkou část svého zápalu proti vlastnictví a&#160;rodině, přičemž se také dovolávali primitivních instinktů odporujících takovým omezením. Rebelantství proti soukromému vlastnictví a&#160;rodině zkrátka nevycházelo jen od socialistů. Mysticismus a&#160;víra v&#160;nadpřirozeno byly využity nejen k&#160;ospravedlnění zábran spoutávajících instinkty, jak tomu bylo v&#160;převládajících proudech římskokatolické i&#160;protestantské denominace, ale v&#160;okrajových náboženských hnutích našly uplatnění i&#160;v&#160;obhajobě uvolnění těchto omezení.</p>

        <p>Nedostatek prostor i&#160;kompetence mi nedovolují, abych se v&#160;této knize zabýval oním druhým z&#160;obvyklých terčů atavistické reakce, jež jsem právě zmínil&#160;– rodinou. Chtěl bych však alespoň sdělit své přesvědčení, že znalosti nových faktů zbavily do jisté míry tradiční morální pravidla vztahu mezi pohlavími jejich základu a&#160;že zásadní změny v&#160;této oblasti se zdají pravděpodobně nevyhnutelnými.</p>
        </blockquote>

        <p>Předestřel jsem stručně Rousseauovo myšlení a&#160;jeho pronikavý vliv i&#160;jiné aspekty historického vývoje přinejmenším proto, abychom snad nezapomněli, že vzpoura proti vlastnictví a&#160;tradiční morálce ze strany seriózních myslitelů není ničím novým. Nyní se však obraťme k&#160;některým Rousseauovým a&#160;Descartovým intelektuálním dědicům ve dvacátém století.</p>

        <p>Nejdříve je však třeba, abych zdůraznil, že zde z&#160;velké části opomíjím dlouhou historii této revolty a&#160;také různé podoby, které na sebe brala v&#160;jednotlivých zemích. Dávno před tím, než Auguste Comte zavedl pojem „pozitivismus“, představující názor, že „zdůvodněná etika“ (tedy zdůvodněná rozumem) je jedinou možnou alternativou nadpřirozené „zjevené etice“ (1854:I, 356), rozvinul Jeremy Bentham pevné základy tzv. právního a&#160;morálního pozitivismu, spočívajícího v&#160;konstruktivistickém výkladu systémů práva a&#160;morálky, podle kterého jejich platnost a&#160;význam plně závisí na vůli a&#160;záměru těch, kdo je navrhli. Sám Bentham je v&#160;tomto vývoji poměrně nedávnou postavou. Konstruktivismus nezahrnuje pouze benthamovskou tradici, již mj. představoval a&#160;v&#160;niž pokračoval John Stuart Mill a&#160;pozdější anglická liberální strana, ale prakticky také všechny současné Američany, kteří se nazývají „liberály“ (nesmíme je ztotožňovat se zcela odlišnými mysliteli, především evropskými, kterým se rovněž říká liberálové, jež by však bylo lépe označit „staří whigové“ a&#160;jejichž nejvýznamnějšími představiteli byli Alexis de Tocqueville a&#160;Lord Acton). Konstruktivistický způsob myšlení se stává skutečně nevyhnutelným, jestliže&#160;– jak poznamenává jistý současný pronikavý švýcarský analytik&#160;– člověk přijme převládající liberální (rozuměj „socialistickou“) filosofii, podle které člověk musí a&#160;může, má-li pro něj mít vůbec nějaký význam rozlišení mezi dobrým a&#160;špatným, mezi nimi sám vytyčovat hranici (Kirsch, 1981:17).</p>
      </div>
    </main>
  );
}
