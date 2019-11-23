import { connect } from 'react-redux';
import language from '../functions/languages';

const translation = (id, langue) => language[langue][id];

const Translator = ({ id, langue }) => translation(id, langue);

const mapStateToProps = state => ({ langue: state.language });

export default connect(mapStateToProps)(Translator);
