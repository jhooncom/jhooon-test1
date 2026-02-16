class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="flex justify-center gap-4 my-8"></div>
            <button class="btn-3d font-bold">Generate Numbers</button>
        `;

        this.numbersContainer = this.shadowRoot.querySelector('div');
        this.generateButton = this.shadowRoot.querySelector('button');

        this.generateButton.addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        this.numbersContainer.innerHTML = '';
        [...numbers].sort((a, b) => a - b).forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.className = 'w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-violet-700 shadow-lg number-pop-animation';
            numberElement.textContent = number;
            this.numbersContainer.appendChild(numberElement);
        });
    }
}

customElements.define('lotto-generator', LottoGenerator);