import React, {
    useState
} from 'react';
import './AppOfPerson.css';
import Person from './Person/Person.jsx';

function AppOfPerson() {
    const [personState, personSetState] = useState({
        Persons: [
            {
                name: "Riyad",
                age: 28
            },
            {
                name: "Nurul",
                age: 26
            },
            {
                name: "Huda",
                age: 21
            }
       ]
    });
    const [showState, showSetState] = useState({
        isShow: false
    });

    const nameChangeHandler = (event, index) => {
        const singlePerson = {
            ...personState.Persons[index]
        };
        singlePerson.name = event.target.value;
        const Persons = [...personState.Persons];
        Persons[index] = singlePerson;
        personSetState({
            Persons: Persons
        });
    };
    const elementDeleteHandler = (index) => {
        const Persons = [...personState.Persons];
        Persons.splice(index, 1);
        personSetState({
            Persons: Persons
        });
    }

    let showPerson = null;

    if (showState.isShow) {
        showPerson = (personState.Persons.map((person, index) => {
            return <Person name = {
                person.name
            }
            age = {
                person.age
            }
            change = {
                (event) => {
                    nameChangeHandler(event, index)
                }
            }
            key = {
                index
            }
            click = {
                () => elementDeleteHandler(index)
            }
            />
        }));
    }

    const ClickHandler = () => {
        const doesShow = showState.isShow;
        showSetState({
            isShow: !doesShow
        });
    }
    const btnStyle = {
        width: "50%",
        display: "block",
        margin: "10px auto"
    }

    return ( <
        div className = "Person" >
        <
        button onClick = {
            ClickHandler
        }
        style = {
            btnStyle
        } > Show < /button> {

            showPerson
        } <
        /div>
    );
}

export default AppOfPerson;