<script>
  import { onMount } from 'svelte'

  const init = () => {
    const about = document.querySelector('#about')
    const travel = document.querySelector('#travel')
    const contact = document.querySelector('#contact')
    const aboutContent = document.querySelector('#about-content')
    const travelContent = document.querySelector('#travel-content')
    const contactContent = document.querySelector('#contact-content')

    about.addEventListener('click', () => {
      const aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
        mount: aboutContent,
        onfocus: function () {
          this.setBackground('rgba(32,32,32,0.90)')
        },
        onblur: function () {
          this.setBackground('rgba(32,32,32,0.60)')
        },
      })
    })

    travel.addEventListener('click', () => {
      const travelBox = new WinBox({
        title: 'Travel Me',
        width: '450px',
        height: '400px',
        top: 50,
        right: 20,
        bottom: 20,
        left: 100,
        mount: travelContent,
        onfocus: function () {
          this.setBackground('rgba(32,32,32,0.90)')
        },
        onblur: function () {
          this.setBackground('rgba(32,32,32,0.60)')
        },
      })
    })
  }

  onMount(() => {
    init()
  })
</script>

<svelte:head>
  <script
    src="https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/dist/winbox.bundle.js"></script>
</svelte:head>

<div class="container">
  <nav>
    <ul>
      <li id="about">/about</li>
      <li id="travel">/travel</li>
      <li id="projects">
        <a href="https://github.com/bmehder" target="_blank">/code</a>
      </li>
      <li id="contact">
        <a href="https://twitter.com/bmehder" target="_blank"
          ><img src="twitter.png" alt="twitter" /></a
        >
      </li>
    </ul>
  </nav>
  <main>
    <h1>bmehder@TARDIS ~ % <span class="cursor">|</span></h1>
    <h3>Current Interests:</h3>
    <ul>
      <li><a href="https://svelte.dev/" target="_blank">Svelte</a></li>
      <li>
        <a href="https://www.formula1.com/" target="_blank">Formula 1</a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=ZecpaxzK1yg" target="_blank"
          >Grime</a
        >
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=qPQQwqGWktE&t=156s"
          target="_blank">Space Elevators</a
        >
      </li>
    </ul>
  </main>
  <div class="hidden">
    <div id="about-content">
      <h2>about-me:$ <span class="cursor">|</span></h2>
      <p>My name is Brad Mehder. I travel, code, and learn.</p>
      <p>I'm a minimilist.</p>
      <p>
        I build websites and apps in HTML/CSS/JS. I'm also active in the
        <a href="https://svelte.dev/" target="_blank">Svelte</a> UI Component framework
        community.
      </p>
    </div>
    <div id="travel-content">
      <h2>travel-me:$ 32 countries<span class="cursor">|</span></h2>
      <ul>
        <li>England</li>
        <li>Ireland</li>
        <li>Denmark</li>
        <li>Sweden</li>
        <li>Norway</li>
        <li>France</li>
        <li>Belgium</li>
        <li>Netherlands</li>
        <li>Germany</li>
        <li>Czechia</li>
        <li>Croatia</li>
        <li>Bosnia & Herzegovina</li>
        <li>Serbia</li>
        <li>Hungary</li>
        <li>Slovakia</li>
        <li>Iceland</li>
        <li>Russia</li>
        <li>Kosovo</li>
        <li>North Macedonia</li>
        <li>Albania</li>
        <li>Montenegro</li>
        <li>Romania</li>
        <li>Slovenia</li>
        <li>Italy</li>
        <li>Estonia</li>
        <li>Latvia</li>
        <li>Lithuania</li>
        <li>Poland</li>
        <li>Bulgaria</li>
        <li>Spain</li>
        <li>Malta</li>
      </ul>
    </div>
  </div>
</div>
