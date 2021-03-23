import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator';
//import {settings} from '../../data/dataStore';

class Column extends React.Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.node,
      cards: PropTypes.array,
    }

    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={icon}></Icon>
            </span>
          </h3>

          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}    
          </div>
          {/*
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
            </div>*/}
        </section>
      );
    }
}

export default Column;