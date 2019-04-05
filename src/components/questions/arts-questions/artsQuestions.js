import React, { Component } from 'react';
import ScoreArea from './ScoreArea';
import QuizArea from './QuizArea';

export default class ArtsQuestions extends Component {
    constructor(props) {
        super(props)

        var dataSet = [
            {
                question: "Justification of European countries for the emergence of 19th century imperialism",
                answers: [
                    "To obtain natural resources",
                    "Industrialize other countries",
                    "Open new markets",
                    "Carry out a civilizing mission"
                ],
                correct: 3
            },
            {
                question: "What was called the ideological politic movement emerged in France during the 19th century?",
                answers: [
                    "Ilustration",
                    "Ludism",
                    "Socialism",
                    "Positivism"
                ],
                correct: 0
            },
            {
                question: "The Seven Years' War, the excesive taxes and the ilustrated thought were causes for",
                answers: [
                    "The emancipation of Latin America",
                    "The french revolution",
                    "The emerge of the imperialism",
                    "The independence of the thirteen colonies"
                ],
                correct: 3
            },
            {
                question: "Bourgeois movement of the 18th century based on the use of reason and opposed to absolutism",
                answers: [
                    "Historical materialism",
                    "Capitalism",
                    "Illuminism",
                    "Mercantilism"
                ],
                correct: 2
            },
            {
                question: "What was the ideological contribution of the Enlightenment?",
                answers: [
                    "Absolutism",
                    "Sovereignty of the nobility",
                    "Division of powers",
                    "Imperialism"
                ],
                correct: 2
            },
            {
                question: "What was the contribution of the Enlightenment?",
                answers: [
                    "Centralization of power",
                    "Immobility of ideas",
                    "Class privileges",
                    "Popular sovereignty"
                ],
                correct: 3
            },
            {
                question: "What was the name of the monarchs who were influenced by the encyclopedia?",
                answers: [
                    "Liberal monarchs",
                    "Social reformers",
                    "Enlightened despots",
                    "Moral absolutist"
                ],
                correct: 2
            },
            {
                question: "The illustration was disseminated through",
                answers: [
                    "News papers",
                    "The encyclopedia",
                    "Constitutions",
                    "Pamphlets"
                ],
                correct: 1
            },
            {
                question: "In the second Congress of Philadelphia (1775) the Continental Army was created, which was commanded by",
                answers: [
                    "Benjamin Franklin",
                    "George lll",
                    "Thomas Jefferson",
                    "George Washington"
                ],
                correct: 3
            },
            {
                question: "Characteristic facts of the French Revolution",
                answers: [
                    "Empire of Napoleon III, the battle of Waterloo",
                    "Taking of the Bastille, creation of the Republic, government of Robespierre",
                    "Nationalism, privileges of the nobility",
                    "Taxes, expansionism and support the king"
                ],
                correct: 1
            },
            {
                question: "Contributions of the French Revolution that propelled Napoleon Bonaparte",
                answers: [
                    "A modern government based on a new constitution",
                    "Class division",
                    "The creation of the Reign of Terror",
                    "Establishment of an empire"
                ],
                correct: 0
            },
            {
                question: "First Latin American country to become independent from Spain",
                answers: [
                    "Mexico",
                    "Colombia",
                    "Argentina",
                    "Haiti"
                ],
                correct: 2
            },
            {
                question: "Fact that caused the outbreak of the World War 1",
                answers: [
                    "The formation of trade bloc",
                    "The assassination of archduke Franz Ferdinand",
                    "The German inasion of France",
                    "The barbarossa operation"
                ],
                correct: 1
            },
            {
                question: "How was called the agreement between Germany, Austria-Hungary, and Italy. ",
                answers: [
                    "Allied powers",
                    "The Triple Entente",
                    "The Holy Alliance",
                    "The Triple Alliance"
                ],
                correct: 3
            },
            {
                question: "In 1917, he led the October Bolshevik Revolution and created the first socialist country of mankind",
                answers: [
                    "Lenin",
                    "Kerensky",
                    "Stalin",
                    "Trotsky"
                ],
                correct: 0
            },
            {
                question: "Treaty signed in 1919 that formalizes the end of the First World War",
                answers: [
                    "Nevlly",
                    "Trianon",
                    "St. Germain",
                    "Versailles"
                ],
                correct: 3
            },
            {
                question: "Work written by Adolf Hitler that established the bases of the ideology of Nazism",
                answers: [
                    "The Communist Manifesto",
                    "Mein Kampf",
                    "The social contract",
                    "Beyond good and evil"
                ],
                correct: 1
            },
            {
                question: "Reason that caused the start of the World War ll",
                answers: [
                    "The murder of Francisco Franco",
                    "The rise of Fascism in Europe",
                    "The invasion of Germany to Poland",
                    "The invasion of Germany to the north of France"
                ],
                correct: 2
            },
            {
                question: "Year when italy invades Greece",
                answers: [
                    "1939",
                    "1942",
                    "1941",
                    "1940"
                ],
                correct: 3
            },
            {
                question: "In the Yalta conference (1945), many agreements took place, among these was:",
                answers: [
                    "The creation of United Nations",
                    "United States support for England",
                    "Divide Korea in two occupation areas, one for The United States and the other for the USSR",
                    "The coordination to free France"
                ],
                correct: 2
            },
            {
                question: "Country that defeated definitely Germany in 1945",
                answers: [
                    "United States of America",
                    "France",
                    "USSR (Union of Soviet Socialist Republics)",
                    "England"
                ],
                correct: 2
            },
            {
                question: "What literary genre does a novel belong to?",
                answers: [
                  "Drama",
                  "Narrative",
                  "Lyric",
                  "Didactic"
                ],
                correct: 1
            },
            {
                question: "The following are literary genres, except",
                answers: [
                    "Dramatic",
                    "Epic",
                    "Lyric",
                    "Prose"
                ],
                correct: 3
            },
            {
                question: "In literature, the thematic and style coincidence is called",
                answers: [
                    "Ideology",
                    "Literary movement",
                    "Manifestation",
                    "Genre"
                ],
                correct: 3
            },
            {
                question: "The ________ genre is characterized to have heroic topics.",
                answers: [
                    "Epic",
                    "Epistolary",
                    "Dramatic",
                    "Liryc"
                ],
                correct: 0
            },
            {
                question: "What is the epic genre?",
                answers: [
                    "It is which the plot takes place in a setting located in the past.",
                    "Is a form of language that exhibits a natural flow of speech and grammatical structure rather than a regular rhythmic structure as in traditional poetry",
                    "It is the narration of historical facts and deeds in a tone of praise and praise of the hero. It can be real or imaginary",
                    "A fictitious or true narrative or story, especially one that is imaginatively recounted."
                ],
                correct: 2
            },
            {
                question: "The _________ is the author of the theatrical texts",
                answers: [
                    "Fabulist",
                    "Dramaturge",
                    "Storyteller",
                    "Novelist"
                ],
                correct: 1
            },
            {
                question: "The following are Romanticism authors, except",
                answers: [
                    "Edgar Allan Poe",
                    "William Wordsworth",
                    "John Keats",
                    "Henri Matisse"
                ],
                correct: 3
            },
            {
                question: "The following are three Anglo-saxons representative authors of the realism, except",
                answers: [
                    "Charles Dickens",
                    "Samuel Langhorne Clemens (Mark twain)",
                    "Gustave Flaubert",
                    "William Thackeray"
                ],
                correct: 2
            },
            {
                question: "The Dadaism, Surrealism, Futurism and Stridentism are literatures from",
                answers: [
                    "Vorticism",
                    "Avant-garde",
                    "Modernism",
                    "Cubism"
                ],
                correct: 1
            },                
        ]

        this.state = {
            current:0, 
            dataSet:dataSet, 
            correct:0, 
            incorrect:0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(choice) {
        if (choice == this.state.dataSet[this.state.current].correct) {
          this.setState({correct: this.state.correct + 1})
        } else {
          this.setState({incorrect: this.state.incorrect + 1})
        }
        
        if (this.state.current == 29) {
          this.setState({current: 0})
          this.setState({incorrect: 0}) 
          this.setState({correct: 0})
        } else {
            this.setState({current: this.state.current + 1}) 
        }
    }

    render() {
        return(
            <div className="score-question-and-options-container">
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
                <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
            </div>
        )
    }
}