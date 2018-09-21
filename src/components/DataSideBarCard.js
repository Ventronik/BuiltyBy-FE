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
    console.log(this.props.markers)
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.markers.address}</CardTitle>
            <CardSubtitle>{this.props.markers.project_review_date}</CardSubtitle>
          </CardBody>
          {this.props.markers.dpimage_url ? <img width="100%" src={`${this.props.markers.dpimage_url}`} alt="Image of project" />: null}
          <CardBody>
            <CardText>{this.props.markers.description}</CardText>
            <CardLink href={`${this.props.design_review_link}`}>Design Review</CardLink>
            <CardLink href={`${this.props.past_reviews_link}`}>Past Reviews</CardLink>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default MapDataSideBar;
