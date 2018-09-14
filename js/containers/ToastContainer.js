import { connect } from 'react-redux'; 
import Toast from '../components/Toast'

const mapStateToProps = ({ toast }) => toast;

export default connect(mapStateToProps)(Toast);
