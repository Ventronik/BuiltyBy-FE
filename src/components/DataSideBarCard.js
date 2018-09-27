import React from 'react';
import { Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

class MapDataSideBar extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      projects: []
    }
  }
  render() {
    console.log(this.props.markers);
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.markers.title}</CardTitle>
            {this.props.markers.meeting_details ? <CardSubtitle>{`${this.props.markers.meeting_details}`}</CardSubtitle>: null}
          </CardBody>
          {this.props.markers.dpimage_url && this.props.markers.report_link ? <a href={`${this.props.markers.report_link}`}><img width="100%" src={`${this.props.markers.dpimage_url}`} alt="Image of project" /></a>: null}
          {!this.props.markers.dpimage_url && this.props.markers.report_link ? <a href={`${this.props.markers.report_link}`}><p>Report Link</p></a>: null}
          {this.props.markers.dpimage_url && !this.props.markers.report_link? <img width="100%" src={`${this.props.markers.dpimage_url}`} alt="Image of project" />: null}
          <CardBody>
            <CardText>{this.props.markers.description}</CardText>
            {this.props.markers.design_review_link ? <CardLink href={`${this.props.markers.design_review_link}`}>Design Review</CardLink> : null}
            {this.props.markers.past_reviews_link ? <CardLink href={`${this.props.markers.past_reviews_link}`}>Past Reviews</CardLink> : null}
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default MapDataSideBar;
