export default function Page() {
  return (
    <main className="lc-shell">
      <header className="lc-topbar">
        <a className="lc-brand" href="#top" aria-label="La Casino — на главную">
          <span className="lc-brand-mark" aria-hidden="true">L</span>
          <span>La Casino</span>
        </a>
        <nav className="lc-nav" aria-label="Основная навигация">
          <a href="#about">О клубе</a>
          <a href="#play">Как играть</a>
          <a href="#guide">Гид</a>
        </nav>
      </header>

      <section className="lc-hero" id="top" aria-labelledby="hero-title">
        <div className="lc-hero-copy">
          <p className="lc-kicker">Игровой навигатор без лишнего шума</p>
          <h1 id="hero-title">La Casino: понятный путь к любимым играм</h1>
          <p className="lc-lead">La Casino — место, где новый игрок быстро разбирается в формате, выбирает подходящую игру и начинает с ясными правилами. Сохрани страницу как короткий ориентир.</p>
          <a className="lc-primary-link" href="#play">Перейти к выбору игры <span aria-hidden="true">→</span></a>
        </div>
        <figure className="lc-hero-art">
          <img src="/la-casino-hero.png" alt="Рулетка и карты на игровом столе" width="960" height="640" fetchPriority="high" />
          <figcaption>Спокойная игра начинается с понимания деталей.</figcaption>
        </figure>
      </section>

      <section className="lc-proof-row" aria-label="Главные преимущества">
        <div><strong>01</strong><span>Ясные правила</span></div>
        <div><strong>02</strong><span>Удобный поиск</span></div>
        <div><strong>03</strong><span>Игра с контролем</span></div>
      </section>

      <section className="lc-content" id="about" aria-labelledby="about-title">
        <div className="lc-section-intro">
          <p className="lc-kicker">Ориентир для игрока</p>
          <h2 id="about-title">La Casino зеркало и официальный сайт без путаницы</h2>
        </div>
        <div className="lc-copy">
          <p>Запрос «la casino зеркало» обычно появляется тогда, когда привычная страница открывается нестабильно. В такой ситуации важно не переходить по случайным ссылкам, а проверять адрес, название бренда и защищённое соединение. Официальный сайт La Casino должен выглядеть аккуратно, быстро загружаться и не просить лишние данные.</p>
          <p>Поиск «la casino официальный сайт» помогает отделить рабочий вход от копий. Перед регистрацией посмотри разделы с правилами, условиями бонусов и лимитами. Если ты искал «la casino зеркало рабочее», используй только проверенный источник и не устанавливай неизвестные файлы. Такой подход экономит время и помогает сохранить контроль над игрой.</p>
        </div>
      </section>

      <section className="lc-play-section" id="play" aria-labelledby="play-title">
        <div className="lc-play-heading">
          <p className="lc-kicker">Первый шаг</p>
          <h2 id="play-title">La Casino играть — легко, когда всё по шагам</h2>
          <p>Не спеши открывать несколько столов сразу. Выбери одну дисциплину, изучи интерфейс и заранее определи сумму, которую готов потратить на развлечение.</p>
        </div>
        <ol className="lc-steps">
          <li><span>1</span><div><h3>Выбери формат</h3><p>Слоты подойдут для коротких сессий, а live-игры — тем, кому важна атмосфера стола.</p></div></li>
          <li><span>2</span><div><h3>Проверь условия</h3><p>Посмотри минимальную ставку, правила раунда и требования к выводу до начала игры.</p></div></li>
          <li><span>3</span><div><h3>Остановись вовремя</h3><p>Лимит по времени и бюджету — простой способ оставить игру приятным досугом.</p></div></li>
        </ol>
      </section>

      <section className="lc-guide" id="guide" aria-labelledby="guide-title">
        <div>
          <p className="lc-kicker">Ответы на частые запросы</p>
          <h2 id="guide-title">Ля казино, ля казино зеркало и ля казино играть</h2>
        </div>
        <div className="lc-guide-text">
          <p>В поиске встречается написание «ля казино», хотя чаще бренд ищут как La Casino. Это нормально: ориентируйся на фирменное имя, адрес и качество страницы. Запрос «ля казино зеркало» не означает, что любая копия безопасна — сверяй источник перед входом.</p>
          <p>Если интересует «ля казино играть», начни с демо-режима или минимальной ставки, когда такая возможность есть. Не воспринимай азартную игру как способ заработка: результат отдельного раунда случаен, а решение об остановке всегда остаётся за тобой.</p>
          <figure className="lc-guide-art">
            <img src="/la-casino-guide.png" alt="Карты, фишки и блокнот для планирования игровой сессии" width="960" height="640" loading="lazy" />
            <figcaption>Планируй сессию заранее — так проще соблюдать свой лимит.</figcaption>
          </figure>
        </div>
      </section>

      <section className="lc-note" aria-label="Ответственная игра">
        <div className="lc-note-symbol" aria-hidden="true">◎</div>
        <div><h2>Играй осознанно</h2><p>Только 18+. Не используй деньги, которые нужны для обязательных расходов. Если игра перестаёт быть развлечением, сделай паузу и обратись за поддержкой.</p></div>
      </section>

      <footer className="lc-footer">
        <div><a className="lc-brand" href="#top"><span className="lc-brand-mark" aria-hidden="true">L</span><span>La Casino</span></a><p>Понятный гид для тех, кто ценит выбор и контроль.</p></div>
        <div className="lc-tags" aria-label="Поисковые метки"><a href="#about">#laCasino</a><a href="#about">#laCasinoЗеркало</a><a href="#play">#laCasinoИграть</a><a href="#about">#laCasinoОфициальныйСайт</a><a href="#guide">#ляКазино</a><a href="#guide">#ляКазиноЗеркало</a><a href="#guide">#ляКазиноИграть</a></div>
        <small>© 2026 La Casino · 18+</small>
      </footer>
    </main>
  )
}
