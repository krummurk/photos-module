import React from 'react';
import * as styledComponents from '../../../styles/flag/index.js';


class Flag extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <styledComponents.Report className='report'>
        <styledComponents.ReportHeader className='report-header'>Report a photo problem</styledComponents.ReportHeader>
        <styledComponents.Unrelated onClick={(e) => this.props.report(e)} className='unrelated' type='button'>Unrelated to restaurant</styledComponents.Unrelated>
        <styledComponents.Inappropriate onClick={(e) => this.props.report(e)} className='inappropriate' type='button'>Inappropriate content</styledComponents.Inappropriate>
        <styledComponents.DontLike onClick={(e) => this.props.report(e)} className='dont-like' type='button'>I don't like this photo</styledComponents.DontLike>
        <styledComponents.Cancel onClick={(e) => this.props.report(e)} className='cancel' type='button'>Cancel</styledComponents.Cancel>
      </styledComponents.Report>
    )
  }
}

export default Flag;