import React from 'react';
import {Card} from './Card';
export const CardList = ({robots}) => {
    const cards = robots.map((user) => {
        return <Card key={user.id} robot={user}/>
    });
    return (
        <div className="card-list">
            {cards}
        </div>
    )
}
