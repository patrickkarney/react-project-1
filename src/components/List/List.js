import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    imageLink: PropTypes.string,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  
  render() {
    return (
      <section className={styles.component}>
       <Hero titleText={this.props.title} imageLink={this.props.imageLink} />
       <div className={styles.description}>
          {this.props.children}
       </div>
       <div className={styles.columns}>
         <Column title={'Animals'}></Column>
         <Column title={'Plants'}></Column>
         <Column title={'Minerals'}></Column>
       </div>
      </section>
    )
  }
}

export default List;
