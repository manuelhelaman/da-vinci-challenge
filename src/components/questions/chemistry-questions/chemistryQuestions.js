import React, { Component } from 'react';
import ScoreArea from './ScoreArea';
import QuizArea from './QuizArea'; 
import Timer from "../../timer";
import PeriodicTable from "../../../../static/assets/images/periodic table.jpg";

export default class ChemistryQuestions extends Component {
    constructor() {
        super()

        var dataSet =[
            { 
                question: "According to ______, in an atom or molecule, no two electrons can have the same four electronic quantum numbers.",
                answers: [
                    "Plank",
                    "Hund",
                    "Pauli",
                    "Aufbau"
                ],
                correct: 2
            },
            { 
                question: "Determine how many valence electrons Mg has, where n° = 12 and A = 24",
                answers: [
                    "2",
                    "6",
                    "4",
                    "8"
                ],
                correct: 0
            },
            { 
                question: "The difference between the mass number (A) and the atomic number (Z) determines the number of",
                answers: [
                    "Protons",
                    "Electrons",
                    "Neutrons",
                    "Nucleotides"
                ],
                correct: 2
            },
            { 
                question: "The Beryllium's atomic number is 4, so the value of the azimuthal quantum number (l) of its differential electron is:",
                answers: [
                    "0",
                    "1",
                    "2",
                    "3"
                ],
                correct: 0
            },
            { 
                question: "They are _________ molecules by their type of bond, and diatomic since they contain _______ atoms such as HCl, CO and NO",
                answers: [
                    "linear - non metallic",
                    "no linear - equals",
                    "polar - differents",
                    "angular - electronegative"
                ],
                correct: 2
            },
            { 
                question: "In water, the hydrogen nucleus joins the oxygen in one of the pairs of __________ electrons, through a ______________ bond forming the Hydronium ion",
                answers: [
                    "shared - polar covalent",
                    "delocalized - electrovalent",
                    "shared - hydrogen bond",
                    "non shared - covalent coordinated"
                ],
                correct: 3
            },
            { 
                question: "_______ is a greenish yellow gas, is toxic, is used to disinfect and is highly reactive",
                answers: [
                    "Iodo",
                    "Chlorine",
                    "Bromine",
                    "Selenium"
                ],
                correct: 1
            },
            { 
                question: "The hydrogen bond is electrostatic in nature and its force is _________ that of the covalent, but _________ the forces of Van der Waals.",
                answers: [
                    "equal - less than",
                    "less than - greater than",
                    "greater than - less than",
                    " equal - greater than"
                ],
                correct: 1
            },
            { 
                question: "They are the four quantum numbers",
                answers: [
                    "s, p, m, m",
                    "n, l, d, f",
                    "s, p, d, f",
                    <div>n, l, m, m<div className="s-subscript">s</div></div>
                ],
                correct: 3
            },
            { 
                question: "When a chemical reaction is carried out and the test tube is heated, it means that the reaction is",
                answers: [
                    "exothermic",
                    "endothermic",
                    "irreversible",
                    "reversible"     
                ],
                correct: 0
            },
            { 
                question: "The LiBr compound presents a ________ bond.",
                answers: [
                    "no-polar covalent",
                    "polar covalent",
                    "ionic",
                    "metal"
                ],
                correct: 2
            },
            { 
                question: "By combining a No Metal with hydrogen, which acts as anion, you get a:",
                answers: [
                    "Hydroxide",
                    "Halurp",
                    "Hydrated",
                    "Hydride"
                ],
                correct: 0
            },
            { 
                question: "The most important application of _______ in the manufacture of fertilizers",
                answers: [
                    "nitrogen monoxide",
                    "ammonia",
                    "nitrogen dioxide",
                    "chlorine monoxide"
                ],
                correct: 1
            },
            { 
                question: "Identify the stoichiometric coefficients of the products in the following chemical equation 2BF3 + 6H2O -> ___HF+__H3BO3",
                answers: [
                    "6 2",
                    "3 1",
                    "1 3",
                    "2 6"
                ],
                correct: 0
            },
            { 
                question: "If a chemical element gains electrons, it _______ forming an anion",
                answers: [
                    "destroys",
                    "reduces",
                    "stays equal",
                    "oxidizes"
                ],
                correct: 3
            },
            { 
                question: "The compounds HNO3, H2SO4, KMnO4, K2Cr2O3 act as _________ agents",
                answers: [
                    "reducers",
                    "acidulants",
                    "oxidants",
                    "neutralizing"
                ],
                correct: 2
            },
            { 
                question: "In the synthesis of organic bodies, metals (Zn, Mg, Al) are used as _________ agents",
                answers: [
                    "oxidants",
                    "reducers",
                    "catalysts",
                    "inhibitors"
                ],
                correct: 1
            },
            { 
                question: "Calculate the molecular weight of 4-methyl-2-pentene considering the atomic weights C = 12g , H = 1g",
                answers: [
                    "70 grams/moles",
                    "84 grams/moles",
                    "89 grams/moles",
                    "90 grams/moles"
                ],
                correct: 1
            },
            { 
                question: "Classify the following formulas condensed in alkane, alkene and alkyne  1.-C3H8,   2.-C2H2  3.-C6H12",
                answers: [
                    "1, 3, 2",
                    "1, 2, 3",
                    "2, 1, 3",
                    "2, 3, 1"
                ],
                correct: 0
            },
            { 
                question: "Low molecular weight alkanes are characterized by ______ melting point and ______ boiling point",
                answers: [
                    "high - high",
                    "high - low",
                    "low - high",
                    "low - low"
                ],
                correct: 3
            },
            { 
                question: "How many hybrid orbitals and how many pure orbitals are there in a molecule of ethene?",
                answers: [
                    "4, 0",
                    "3, 1",
                    "2, 2",
                    "1, 3"
                ],
                correct: 1
            },
            { 
                question: "The compound 2-methyl-2-propanol is an alcohol of the type",
                answers: [
                    "Primary",
                    "Tertiary",
                    "Quaternary",
                    "Secondary"
                ],
                correct: 1
            },
            { 
                question: "Identify the name of the compound that has the carbonyl group in its structure",
                answers: [
                    "Etanal",
                    "Ethanol",
                    "Ethylamine",
                    "Ehoxy-ethane"
                ],
                correct: 0
            },
            { 
                question: "Identify the non-metallic oxide formula in the gaseous state, which is generated when a person breathes.",
                answers: [
                    "CO",
                    "NO2",
                    "CO2",
                    "SO2"
                ],
                correct: 2
            },
            { 
                question: "The __________ are used to produce artificial aromas",
                answers: [
                    "Carboxylic acids",
                    "Ethers",
                    "Esters",
                    "Alcohols"
                ],
                correct: 2
            },
            { 
                question: "The _________ are used as fuels, antiseptics and preservatives",
                answers: [
                    "Carboxylic acids",
                    "Esters",
                    "Ethers",
                    "Alcohols"
                ],
                correct: 3
            },
            { 
                question: "_________ is a compound and the _________ is a mixture",
                answers: [
                    "air - sodium chloride",
                    "sodium chloride - iron",
                    "air - iron",
                    "sodium chloride - air"
                ],
                correct: 3
            },
            { 
                question: "The horizontal orderings in the Periodic Table are called",
                answers: [
                    "Periods",
                    "Families",
                    "Levels",
                    "Groups"
                ],
                correct: 0
            },
            { 
                question: "Determine the total mole units that are obtained by dissolving 3.42 g of sugar in 180 g of water. Consider the molar mass: sugar 18 g/moles sugar 342 g/moles",
                answers: [
                    "1.01",
                    "10.01",
                    "10.1",
                    "11.0"
                ],
                correct: 1
            },
            { 
                question: "The amount in mL(milliliters) of concentrated HCl (37% by weight d = 1.14 g / mL) that should be measured to prepare 250mL of 1.4 M HCl (ac) is",
                answers: [
                    "34.5",
                    "30.7",
                    "14.6",
                    "12.6"
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
                <Timer />
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
                <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
                <div className="periodic-table-wrapper" style={{display:"flex", justifyContent:"center", marginBottom:"20px", marginTop:"30px"}}>
                    <img src={PeriodicTable}/>
                </div>
            </div>
        )
    }
}
