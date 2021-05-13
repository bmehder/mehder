<script>
  import Nav from './Nav.svelte'
  import About from './About.svelte'
  import Travel from './Travel.svelte'

  let aboutContentElement
  let travelContentElement

  const aboutClickHandler = () => {
    new WinBox({
      title: 'About Me',
      width: '400px',
      height: '400px',
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
      mount: aboutContentElement,
      onfocus: function () {
        this.setBackground('rgba(32,32,32,0.90)')
      },
      onblur: function () {
        this.setBackground('rgba(32,32,32,0.60)')
      },
    })
  }

  const travelClickHandler = () => {
    new WinBox({
      title: 'Travel Me',
      width: '450px',
      height: '400px',
      top: 50,
      right: 20,
      bottom: 20,
      left: 100,
      mount: travelContentElement,
      onfocus: function () {
        this.setBackground('rgba(32,32,32,0.90)')
      },
      onblur: function () {
        this.setBackground('rgba(32,32,32,0.60)')
      },
    })
  }
</script>

<Nav {aboutClickHandler} {travelClickHandler} />

<About bind:aboutContentElement />
<Travel bind:travelContentElement />
