let templateForLanguage = document.querySelector('#container')
function init() {
  const brazilFlag = document.querySelector('.flag-brazil')
  const usaFlag = document.querySelector('.flag-usa')
  let header = document.querySelector('header')
  brazilFlag.addEventListener('click', () => {
    header.innerHTML = ''
    header.innerHTML += header.innerHTML + 'Escolha um idioma'
    usaFlag.classList.remove('active')
    brazilFlag.classList.add('active')
    templateForLanguage.innerHTML = ''
    templateForLanguage.innerHTML += templateForLanguage.innerHTML + templates.ptbrTemplate()
  })
  usaFlag.addEventListener('click', () => {
    header.innerHTML = ''
    header.innerHTML += 'Choose a language'
    brazilFlag.classList.remove('active')
    usaFlag.classList.add('active')
    templateForLanguage.innerHTML = ''
    templateForLanguage.innerHTML += templateForLanguage.innerHTML + templates.enTemplate()
  })
}

const templates = {
  ptbrTemplate: function () {
    return `
      <!-- CONTAINER E PROFILE -->
      <main class="home__container">
        <div class="home__container bd-grid">
          <div class="home__data">
            <div class="home__img">
              <img src="./src/img/avatar_pic4.png" alt="Profile Avatar" />
            </div>
            <h1 class="home__title">Kevyn Gonçalves</h1>
            <span class="home__profession">Front-end Developer e estudante de Análise e Desenvolvimento de Sistemas </span>
            <div class="home__social">
              <a href="https://www.linkedin.com/in/kevynfaria/" class="home__social-link"><i class="bx bxl-linkedin"></i></a>
              <a href="http://github.com/kevynfg" class="home__social-link"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>
      </main>
  
      <!-- SOBRE MIM -->
      <section class="about section" id="about">
        <div class="about__container bd-grid">
          <div class="about__data">
            <span class="section-subtitle">{ERROR: INTRO NOT FOUND}</span>
            <h2 class="section-title PTBR">Sobre mim</h2>
            <div class="description__div">
              <p class="about__description PTBR">
                Olá, sou um curioso de plantão sobre tecnologias, proativo e sempre em busca de aprendizado. Gosto de criar projetos que possam ajudar as pessoas
                e valorizo a experiência do usuário, funcionalidade e desempenho de um software de acordo com seus requisitos. Geek apaixonado por ficção com
                futuro distópico.
              </p>
            </div>
            <div class="about__information">
              <h3 class="about__information-title">Contato</h3>
  
              <div class="about__information-data">
                <i class="bx bx-envelope about__information-icon"></i>
                <span>kevynfariaga@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FORMAÇÃO/EDUCAÇÃO -->
      <section class="education section">
        <div class="education__intro">
          <span class="section-subtitle">Qualificação</span>
          <h2 class="section-title">Minha formação</h2>
        </div>
        <div class="education__container bd-grid">
          <div class="education__content">
            <div>
              <h3 class="education__year">2020 - Previsão de Término: Junho/2022</h3>
              <span class="education__university">Universidade Estácio de Sá</span>
            </div>
  
            <div class="education__time">
              <span class="education__rounder"></span>
              <span class="education__line"></span>
            </div>
  
            <div>
              <h3 class="education__race">Análise e Desenvolvimento de Sistemas</h3>
              <span class="education__specialty">Tecnólogo</span>
            </div>
          </div>
  
          <div class="education__content">
            <div>
              <h3 class="education__year">Out/2020 - Dez/2020</h3>
              <span class="education__university">IGTI – Instituto de Gestão e Tecnologia da Informação</span>
            </div>
  
            <div class="education__time">
              <span class="education__rounder"></span>
              <span class="education__line"></span>
            </div>
  
            <div>
              <h3 class="education__race">Desenvolvedor Full-stack</h3>
              <span class="education__specialty">Bootcamp Online</span>
            </div>
          </div>
  
          <div class="education__content">
            <div>
              <h3 class="education__year">Jul/2013 - Dez/2014</h3>
              <span class="education__university">ETEC Aristóteles Ferreira</span>
            </div>
  
            <div class="education__time">
              <span class="education__rounder"></span>
              <span class="education__line"></span>
            </div>
  
            <div>
              <h3 class="education__race">Informática</h3>
              <span class="education__specialty">Técnico</span>
            </div>
          </div>
  
          <div class="education__content">
            <div>
              <h3 class="education__year">2010 - 2012</h3>
              <span class="education__university">E. E. Professor Antônio Ablas Filho Dr.</span>
            </div>
  
            <div class="education__time">
              <span class="education__rounder"></span>
              <span class="education__line"></span>
            </div>
  
            <div>
              <h3 class="education__race">Escolaridade</h3>
              <span class="education__specialty">Ensino Médio</span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FREELAS -->
      <!-- <section class="project section">
      <div class="project__container bd-grid">
        <div class="project__data">
          <h2 class="section-title project__title">Moodtation</h2>
          <p class="project__description">Uma web page que oferece meditações gratuitas com timer e sons que guiam o usuário, visando a
            facilidade de uso. Futuros serviços serão implementados, com backend e banco de dados.
          </p>
          <a href="" class="button"></a>
        </div>
      </div>
    </section> -->
  
      <!-- PROJETOS -->
      <section class="works section">
        <div class="works__intro">
          <span class="section-subtitle">Meu Portfólio</span>
          <h2 class="section-title">Projetos Recentes</h2>
        </div>
  
        <div class="works__container">
          <div class="works__img">
            <a target="blank" href="https://kevynfg.github.io/moodtation/" class="works__link">
              <img src="./src/img/project-moodtation.png" alt="Projeto Moodtation" />
  
              <div class="works__data">
                <i class="bx bx-link-alt"></i>
                <span class="works__title">Moodtation</span>
              </div>
            </a>
          </div>
  
          <div class="works__img">
            <a target="blank" href="https://github.com/kevynfg/bootcamp-interest-project" class="works__link">
              <img src="./src/img/project_interest.png" alt="Projeto Juros Composto" />
  
              <div class="works__data">
                <i class="bx bx-link-alt"></i>
                <span class="works__title">Juros Composto</span>
              </div>
            </a>
          </div>
  
          <div class="works__img">
            <a target="blank" href="https://github.com/kevynfg/bootcamp-salary-project" class="works__link">
              <img src="./src/img/project_salary.png" alt="Projeto Salário e Descontos" />
  
              <div class="works__data">
                <i class="bx bx-link-alt"></i>
                <span class="works__title">Descontos no Salário</span>
              </div>
            </a>
          </div>
  
          <div class="works__img">
            <a target="blank" href="https://github.com/kevynfg/bootcamp-app-voting" class="works__link">
              <img src="./src/img/project-voting-app.png" alt="Projeto de Votação Automática" />
  
              <div class="works__data">
                <i class="bx bx-link-alt"></i>
                <span class="works__title">Voting App</span>
              </div>
            </a>
          </div>
  
          <div class="works__img">
            <a target="blank" href="https://github.com/kevynfg/bootcamp-grade-control-api" class="works__link">
              <img src="./src/img/project-grade-control.png" alt="Projeto Controle de Notas" />
  
              <div class="works__data">
                <i class="bx bx-link-alt"></i>
                <span class="works__title">Controle de Notas</span>
              </div>
            </a>
          </div>
        </div>
      </section>
  
      <!-- === FOOTER === -->
      <footer class="footer section">
        <div class="footer__container bd-grid">
          <h1 class="footer__title">Info</h1>
          <p class="footer_description">Eu sou o Kevyn e este é meu portfólio pessoal.</p>
  
          <p class="footer__copy">All right reserved by @Kevyn - 2021</p>
        </div>
      </footer>`
  },
  enTemplate: function () {
    return `
          <!-- CONTAINER E PROFILE -->
          <main class="home__container">
            <div class="home__container bd-grid">
              <div class="home__data">
                <div class="home__img">
                  <img src="./src/img/avatar_pic4.png" alt="Profile Avatar" />
                </div>
                <h1 class="home__title">Kevyn Gonçalves</h1>
                <span class="home__profession">Front-end Developer and System Analysis and Development student</span>
                <div class="home__social">
                  <a href="https://www.linkedin.com/in/kevynfaria/" class="home__social-link"><i class="bx bxl-linkedin"></i></a>
                  <a href="http://github.com/kevynfg" class="home__social-link"><i class="bx bxl-github"></i></a>
                </div>
              </div>
            </div>
          </main>
      
          <!-- SOBRE MIM -->
          <section class="about section" id="about">
            <div class="about__container bd-grid">
              <div class="about__data">
                <span class="section-subtitle">{ERROR: INTRO NOT FOUND}</span>
                <h2 class="section-title EN">About me</h2>
                <div class="description__div">
                  <p class="about__description EN">
                    Hello, I'm that kind of person who's always trying to catch up with new technologies, proactive and passionate for learning new stuff whenever i can. I like to create projects that can help people
                    and values the user experience, functionality and performance of a software according to its requirements. Geek in love with fiction and
                    dystopian future.
                  </p>
                </div>
                <div class="about__information">
                  <h3 class="about__information-title">Contact</h3>
      
                  <div class="about__information-data">
                    <i class="bx bx-envelope about__information-icon"></i>
                    <span>kevynfariaga@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <!-- FORMAÇÃO/EDUCAÇÃO -->
          <section class="education section">
            <div class="education__intro">
              <span class="section-subtitle">Skills & Expertise</span>
              <h2 class="section-title">Education</h2>
            </div>
            <div class="education__container bd-grid">
              <div class="education__content">
                <div>
                  <h3 class="education__year">2020 - Expected to end: June/2022</h3>
                  <span class="education__university">Universidade Estácio de Sá</span>
                </div>
      
                <div class="education__time">
                  <span class="education__rounder"></span>
                  <span class="education__line"></span>
                </div>
      
                <div>
                  <h3 class="education__race">System Analysis and Development</h3>
                  <span class="education__specialty">Associates degree</span>
                </div>
              </div>
      
              <div class="education__content">
                <div>
                  <h3 class="education__year">Out/2020 - Dez/2020</h3>
                  <span class="education__university">IGTI – Instituto de Gestão e Tecnologia da Informação</span>
                </div>
      
                <div class="education__time">
                  <span class="education__rounder"></span>
                  <span class="education__line"></span>
                </div>
      
                <div>
                  <h3 class="education__race">Full-Stack Developer</h3>
                  <span class="education__specialty">Bootcamp Online</span>
                </div>
              </div>
      
              <div class="education__content">
                <div>
                  <h3 class="education__year">Jul/2013 - Dez/2014</h3>
                  <span class="education__university">ETEC Aristóteles Ferreira</span>
                </div>
      
                <div class="education__time">
                  <span class="education__rounder"></span>
                  <span class="education__line"></span>
                </div>
      
                <div>
                  <h3 class="education__race">Information Technology</h3>
                  <span class="education__specialty">Technician</span>
                </div>
              </div>
      
              <div class="education__content">
                <div>
                  <h3 class="education__year">2010 - 2012</h3>
                  <span class="education__university">E. E. Professor Antônio Ablas Filho Dr.</span>
                </div>
      
                <div class="education__time">
                  <span class="education__rounder"></span>
                  <span class="education__line"></span>
                </div>
      
                <div>
                  <h3 class="education__race">Education</h3>
                  <span class="education__specialty">High School</span>
                </div>
              </div>
            </div>
          </section>
      
          <!-- FREELAS -->
          <!-- <section class="project section">
          <div class="project__container bd-grid">
            <div class="project__data">
              <h2 class="section-title project__title">Moodtation</h2>
              <p class="project__description">A web page that offers free meditations with timer and sounds that guide the user, aiming at
              ease of use. Future services will be implemented, with backend and database.
              </p>
              <a href="" class="button"></a>
            </div>
          </div>
        </section> -->
      
          <!-- PROJETOS -->
          <section class="works section">
            <div class="works__intro">
              <span class="section-subtitle">My Portfolio</span>
              <h2 class="section-title">Recent Projects</h2>
            </div>
      
            <div class="works__container">
              <div class="works__img">
                <a target="blank" href="https://kevynfg.github.io/moodtation/" class="works__link">
                  <img src="./src/img/project-moodtation.png" alt="Projeto Moodtation" />
      
                  <div class="works__data">
                    <i class="bx bx-link-alt"></i>
                    <span class="works__title">Moodtation</span>
                  </div>
                </a>
              </div>
      
              <div class="works__img">
                <a target="blank" href="https://github.com/kevynfg/bootcamp-interest-project" class="works__link">
                  <img src="./src/img/project_interest.png" alt="Project Compound Interest" />
      
                  <div class="works__data">
                    <i class="bx bx-link-alt"></i>
                    <span class="works__title">Compound Interest</span>
                  </div>
                </a>
              </div>
      
              <div class="works__img">
                <a target="blank" href="https://github.com/kevynfg/bootcamp-salary-project" class="works__link">
                  <img src="./src/img/project_salary.png" alt="Project Salary and Discount" />
      
                  <div class="works__data">
                    <i class="bx bx-link-alt"></i>
                    <span class="works__title">Salary and Discount</span>
                  </div>
                </a>
              </div>
      
              <div class="works__img">
                <a target="blank" href="https://github.com/kevynfg/bootcamp-app-voting" class="works__link">
                  <img src="./src/img/project-voting-app.png" alt="Project Auto Voting" />
      
                  <div class="works__data">
                    <i class="bx bx-link-alt"></i>
                    <span class="works__title">Voting App</span>
                  </div>
                </a>
              </div>
      
              <div class="works__img">
                <a target="blank" href="https://github.com/kevynfg/bootcamp-grade-control-api" class="works__link">
                  <img src="./src/img/project-grade-control.png" alt="Project banknotes managing" />
      
                  <div class="works__data">
                    <i class="bx bx-link-alt"></i>
                    <span class="works__title">Banknotes Managing</span>
                  </div>
                </a>
              </div>
            </div>
          </section>
      
          <!-- === FOOTER === -->
          <footer class="footer section">
            <div class="footer__container bd-grid">
              <h1 class="footer__title">Info</h1>
              <p class="footer_description">I'm Kevyn and this is me personal Portfolio.</p>
      
              <p class="footer__copy">All right reserved by @Kevyn - 2021</p>
            </div>
          </footer>`
  },
}

init()
