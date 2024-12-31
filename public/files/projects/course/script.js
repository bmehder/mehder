const template = document.createElement('template');

template.innerHTML = `
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .course {
      font-family: Arial, Helvetica, sans-serif;
      background: #fefefe;
      display: grid;
      grid-template-columns: 2fr 2fr;
      grid-gap: 1em;
      margin-bottom: 15px;
      border: 10px solid #307ad5;
    }

    .course img {
      width: 100%;
      border-right: 1px solid #ccc;
    }

    .course slot {
      display: inline-block;
    }

    .course h3 {
      margin: 0.5em 0;
      font-size: 2em;
    }
    
    .course p {
      margin: 1em 0 0 1em;
    }
    
  </style>

  <div class="course">
    <img />
    <div>
      <h3></h3>
      <div class="info">
        <p><strong>Category: </strong><slot name="category" /></p>
        <p><strong>Teacher: </strong><slot name="teacher" /></p>
        <p><strong>Grades: </strong><slot name="grades" /></p>
        <p><strong>Term: </strong><slot name="term" /></p>
        <p><strong>Day: </strong><slot name="day" /></p>
        <p><strong>Time: </strong><slot name="time" /></p>
        <p><strong>Length: </strong><slot name="length" /></p>
        <p><strong>Sessions: </strong><slot name="sessions" /></p>
        <p><strong>Email: </strong><slot name="email" /></p>
        <p><strong>Phone: </strong><slot name="phone" /></p>
      </div>
    </div>
  </div>
`;

class Course extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
  }
}
window.customElements.define('mfs-course', Course);
