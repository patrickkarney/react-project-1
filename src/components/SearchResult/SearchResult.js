import React from 'react';
import styles from './SearchResult.scss';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';

class SearchResult extends React.Component {

    static propTypes = {
      cards: PropTypes.array,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            Search Results: 
            <span className={styles.icon}>
              <Icon name="search"></Icon>
            </span>
          </h3>

          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}    
          </div>
        </section>
      );
    }
}

export default SearchResult;