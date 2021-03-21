import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class Column extends React.Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.node,
      cards: PropTypes.array,
    }


    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            {this.props.title}
            <span className={styles.icon}>
              <Icon name={this.props.icon}></Icon>
            </span>
          </h3>

          <div >
            {this.props.cards.map(({...cardsProps}) => (
              <Card key={cardsProps.id} {...cardsProps} />))}
          </div>

          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        </section>
      );
    }
}

export default Column;