import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, index) => {
                    return (
                        <Card 
                        key={index} 
                        name={robots[index].name} 
                        email={robots[index].email} 
                        id={robots[index].id}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList