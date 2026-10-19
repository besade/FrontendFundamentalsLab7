import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isElement8Clicked: false,
            isElement9Clicked: false,
            bg8: 'transparent',
            color8: 'inherit',
            bg9: 'transparent',
            color9: 'inherit'
        };
    }

    swapStyles = () => {
        this.setState((prevState) => ({
            bg8: prevState.bg9,
            color8: prevState.color9,
            bg9: prevState.bg8,
            color9: prevState.color8
        }));
    };

    handleElement8Click = () => {
        if (!this.state.isElement8Clicked) {
            this.setState({
                bg8: '#7117a5',
                color8: '#c75513',
                isElement8Clicked: true
            });
        } else {
            this.swapStyles();
        }
    };

    handleElement9Click = () => {
        if (!this.state.isElement9Clicked) {
            this.setState({
                bg9: '#2cc51e',
                color9: '#5c1a99',
                isElement9Clicked: true
            });
        } else {
            this.swapStyles();
        }
    };

    render() {
        return (
            <main className="content-section">
                <section id="about-me">
                    <p>Дата народження: 27 квітня 2006 року, м. Київ</p>
                    <p>Освіта: Національний технічний університет України "Київський політехнічний інститут імені Ігоря Сікорського" (2024 р. - зараз), Ліцей "Троєщина" Деснянського району міста Києва (2017 - 2024 рр.)</p>
                </section>

                <section id="hobbies">
                    <h3>Мої захоплення</h3>
                    <ul>
                        <li>Гра на електрогітарі, бас-гітарі</li>
                        <li>Гра в комп'ютерні ігри (Dota 2, Don't Starve Together, etc.)</li>
                        <li>Важка музика (гурти: Death, Cryptopsy, Sepultura, Slayer, Metallica, etc.)</li>
                        <li 
                            id="element-8" 
                            style={{ backgroundColor: this.state.bg8, color: this.state.color8, cursor: 'pointer', userSelect: 'none' }}
                            onClick={this.handleElement8Click}
                        >
                            Програмування
                        </li>
                    </ul>
                </section>

                <section id="favorite-media">
                    <h3 
                        className="element-9" 
                        style={{ backgroundColor: this.state.bg9, color: this.state.color9, cursor: 'pointer', userSelect: 'none' }}
                        onClick={this.handleElement9Click}
                    >
                        Улюблені твори
                    </h3>
                    <ol>
                        <li>Фільм "Мовчання ягнят" ("The Silence of the Lambs", 1991 р.)</li>
                        <li>Книга "Сяйво" (Стівен Кінг, 1977 р.)</li>
                        <li>Фільм "Дзвінок" ("Ringu", 1998 р.)</li>
                    </ol>
                </section>

                <section id="favorite-city">
                    <h3>Улюблене місто</h3>
                    <p>Моїм улюбленим містом є Київ. Київ - столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр України.</p>
                </section>
            </main>
        );
    }
}

export default Content;