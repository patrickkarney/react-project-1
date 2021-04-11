import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsByTitle} from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsByTitle(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResult);