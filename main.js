class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="numbers"></div>
            <button>Generate Numbers</button>
        `;

        this.numbersContainer = this.shadowRoot.querySelector('.numbers');
        this.generateButton = this.shadowRoot.querySelector('button');

        this.generateButton.addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        this.numbersContainer.innerHTML = '';
        for (const number of [...numbers].sort((a, b) => a - b)) {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            this.numbersContainer.appendChild(numberElement);
        }
    }
}

customElements.define('lotto-generator', LottoGenerator);