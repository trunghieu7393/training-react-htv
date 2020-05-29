import React, { Component } from 'react';
import '../../styles.css';
import './Header.scss';
import HeaderData from './HeaderData/HeaderData';
import HeaderItem from './HeaderItem';
import { withTranslation } from 'react-i18next';
import { useTranslation, Trans } from 'react-i18next';
import { createRedux, readRedux, updateRedux, deleteRedux } from '../../redux/actions/testSagas';
import { plus1, plus2 } from '../../redux/actions/exercises'
import { connect } from 'react-redux';
import {plusaction} from '../../redux/domain/logic';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      reload:''
      
    }
  }
  handleClick = lng => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }
  plus1Onclick = () => {
    const { plus1, plus1Data } = this.props;
    plus1(plusaction(plus1Data))
  }  
  plus2Onclick = () => {
    const { plus2, plus2Data } = this.props;
    const {reload}=this.state;
    plus2(plusaction(plus2Data));
    // this.setState({reload:'1'})
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    
  }
  render() {
    const { plus1Data, plus2Data } = this.props;
    return (
      <div class="sidebar header-fixed" data-color="white" data-active-color="danger">

        <div class="logo">

          <a href="#" class="logo-normal">
            <div class="logo-image-small">
              <img src="./assets/img/hybrid-logo.jpg" />
            </div>
          </a>
        </div>

        <div class="sidebar-wrapper">

          <ul class="nav">
            {HeaderData.map((item, idx) =>
              <HeaderItem
                label={item.label}
                url={item.url}
                key={idx}
              />
            )}

          </ul>
          <input type="text" name="plus1" value={plus1Data} />
          <button onClick={this.plus1Onclick}>Plus1</button>
          <input type="text" name="plus2" value={plus2Data} />
          <button onClick={this.plus2Onclick}>Plus2</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  plus1Data: state.exercises.plus1,
  plus2Data: state.exercises.plus2,
})
// export default withTranslation('common') connect(null,{createRedux,readRedux,updateRedux,deleteRedux})(Header);
export default connect(mapStateToProps, { plus1, plus2, createRedux, readRedux, updateRedux, deleteRedux })(Header);