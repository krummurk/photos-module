import React from 'react';
import $ from 'jquery';
import Modal from './Modal.jsx';
import * as styledComponents from '../../../styles/gallery/index.js';


class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      modalImage: null,
      displayedImages: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getPhotos(){
    
    // window.location.pathname 
    var id = Math.floor(Math.random()*100+1).toString().padStart(3, '0');

    $.ajax({
      url: `/API/restaurant/photo/${id}`,
      type: 'GET',
      success: (data) => {
        console.log('Data: ', data[0].photos);
        this.setState({
          displayedImages: data[0].photos
        })
      },
      error: function(err){
        console.log('GET request failed!', err);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  componentDidMount(){
    this.getPhotos()
  }

  openModal(e){
    e.preventDefault();
    for (var i = 0; i < this.state.displayedImages.length; i++) {
      if (e.target.src === this.state.displayedImages[i].file_path) {
        this.setState({
          modal: true,
          modalImage: this.state.displayedImages[i]
        })
      }
    }
  }

  closeModal(e){
    e.preventDefault();
    this.setState({
      modal: false
    })
  }


  render(){
    if (this.state.displayedImages.length && !this.state.modal) {
      return (
        <styledComponents.PhotoContainer>
          <styledComponents.One onClick={(e) => this.openModal(e)} className="size1" id='one' src={this.state.displayedImages[0].file_path}/>
          <styledComponents.Two onClick={(e) => this.openModal(e)} className='size1' id='two' src={this.state.displayedImages[1].file_path} />
          <styledComponents.Three onClick={(e) => this.openModal(e)} className='size2' id='three' src={this.state.displayedImages[2].file_path} />
          <styledComponents.Four onClick={(e) => this.openModal(e)} className='size1' id='four' src={this.state.displayedImages[3].file_path} />
          <styledComponents.Five onClick={(e) => this.openModal(e)} className='size1' id='five' src={this.state.displayedImages[4].file_path} />
          <styledComponents.Six onClick={(e) => this.openModal(e)} className='size2' id='six' src={this.state.displayedImages[5].file_path} />
          <styledComponents.Seven onClick={(e) => this.openModal(e)} className='size1' id='seven' src={this.state.displayedImages[6].file_path} />
          <styledComponents.Eight onClick={(e) => this.openModal(e)} className='size1' id='eight' src={this.state.displayedImages[7].file_path} />
          <styledComponents.Nine onClick={(e) => this.openModal(e)} className='size2' id='nine' src={this.state.displayedImages[8].file_path} />
          <styledComponents.Ten onClick={(e) => this.openModal(e)} className='size1' id='ten' src={this.state.displayedImages[9].file_path} />
          <styledComponents.Eleven onClick={(e) => this.openModal(e)} className='size1' id='eleven' src={this.state.displayedImages[10].file_path} />
          <styledComponents.Twelve onClick={(e) => this.openModal(e)} className='size2' id='twelve' src={this.state.displayedImages[11].file_path} />
        </styledComponents.PhotoContainer>
      ); 
    } else if (this.state.displayedImages.length && this.state.modal) {
      return (
        <div>
          <Modal displayedImages={this.state.displayedImages} closeModal={this.closeModal} modalImage={this.state.modalImage}/>
          <styledComponents.PhotoContainer>
            <styledComponents.One onClick={(e) => this.openModal(e)} className="size1" id='one' src={this.state.displayedImages[0].file_path}/>
            <styledComponents.Two onClick={(e) => this.openModal(e)} className='size1' id='two' src={this.state.displayedImages[1].file_path} />
            <styledComponents.Three onClick={(e) => this.openModal(e)} className='size2' id='three' src={this.state.displayedImages[2].file_path} />
            <styledComponents.Four onClick={(e) => this.openModal(e)} className='size1' id='four' src={this.state.displayedImages[3].file_path} />
            <styledComponents.Five onClick={(e) => this.openModal(e)} className='size1' id='five' src={this.state.displayedImages[4].file_path} />
            <styledComponents.Six onClick={(e) => this.openModal(e)} className='size2' id='six' src={this.state.displayedImages[5].file_path} />
            <styledComponents.Seven onClick={(e) => this.openModal(e)} className='size1' id='seven' src={this.state.displayedImages[6].file_path} />
            <styledComponents.Eight onClick={(e) => this.openModal(e)} className='size1' id='eight' src={this.state.displayedImages[7].file_path} />
            <styledComponents.Nine onClick={(e) => this.openModal(e)} className='size2' id='nine' src={this.state.displayedImages[8].file_path} />
            <styledComponents.Ten onClick={(e) => this.openModal(e)} className='size1' id='ten' src={this.state.displayedImages[9].file_path} />
            <styledComponents.Eleven onClick={(e) => this.openModal(e)} className='size1' id='eleven' src={this.state.displayedImages[10].file_path} />
            <styledComponents.Twelve onClick={(e) => this.openModal(e)} className='size2' id='twelve' src={this.state.displayedImages[11].file_path} />
          </styledComponents.PhotoContainer>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default Gallery;