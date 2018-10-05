import React from 'react';
import { Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

class MapDataSideBar extends React.Component{
  constructor(props){
    super(props)
    this.cardRef = React.createRef();
  }

  componentDidUpdate(){
    if(this.props.activePermit === this.props.keyData){
      this.cardRef.current.scrollIntoView()
    }
  }

  permitSelector = () => {
    this.props.setSelectedPermit(parseInt(this.props.keyData))
  }

  render() {
  let body =<div>
            <CardBody>
              <CardTitle>{this.props.markers.title}</CardTitle>
              {this.props.markers.meeting_details ? <CardSubtitle>{`${this.props.markers.meeting_details}`}</CardSubtitle>: null}
            </CardBody>
              {this.props.markers.dpimage_url && this.props.markers.report_link ? <a href={`${this.props.markers.report_link}`}><img width="100%" src={`${this.props.markers.dpimage_url}`} alt="Image of project" /></a>: null}
              {!this.props.markers.dpimage_url && this.props.markers.report_link ? <a href={`${this.props.markers.report_link}`}><p>Report Link</p></a>: null}
            { this.props.markers.dpimage_url && !this.props.markers.report_link? <img width="100%" src={`${this.props.markers.dpimage_url}`} alt="Image of project" />: null}
            <CardBody>
              <CardText>{this.props.markers.description}</CardText>
              {this.props.markers.design_review_link ? <CardLink href={`${this.props.markers.design_review_link}`}>Design Review</CardLink> : null}
              {this.props.markers.past_reviews_link ? <CardLink href={`${this.props.markers.past_reviews_link}`}>Past Reviews</CardLink> : null}
            </CardBody>
          </div>;
    return (
      <div ref={this.cardRef} onClick={()=>this.permitSelector()}>
        {this.props.activePermit === this.props.keyData ?
          <Card style={{ backgroundColor: '#F2F3F2', borderColor: '#C49A6C'}}>{body}</Card> :
          <Card>{body}</Card>
        }
      </div>
    )
  }
}

export default MapDataSideBar;
