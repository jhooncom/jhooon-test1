class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    --primary-color: #007bff;
                    --light-text-color: #fff;
                }
                .numbers {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin: 20px 0;
                    flex-wrap: wrap;
                }
                .number {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background-color: var(--primary-color);
                    color: var(--light-text-color);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 28px;
                    font-weight: 600;
                    animation: fadeIn 0.5s ease-in-out;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                button {
                    padding: 15px 30px;
                    font-size: 20px;
                    font-family: 'Poppins', sans-serif;
                    cursor: pointer;
                    border: none;
                    background-color: var(--primary-color);
                    color: var(--light-text-color);
                    border-radius: 8px;
                    transition: background-color 0.3s, transform 0.2s;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }
                button:hover {
                    background-color: #0056b3;
                    transform: translateY(-2px);
                }
                 button:active {
                    transform: translateY(0);
                }
            </style>
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