import React from "react";
import { Link } from "react-router-dom";

import GreetingContainer from "../greeting/greeting_container";
import FeedItem from "./feed_item";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchFeedSources();
  }

  render() {
    const { feedSources } = this.props;
    const feedItems = feedSources.sources.map(feed =>
      <FeedItem key={feed.id} name={feed.name} description={feed.description} />
    );  

    return (
      <div className="entire-show-page">
        <div className="feedbar-container">
          <h1>This is the feedbar-container</h1>
        </div>
        <div className="main-feed">
          <GreetingContainer />
          <div className="feed-page-holder">
            feed page holder
            <div className="search-bar-container">
              <input type="text" value="searchbar" />
            </div>
            <div className="rss-feed-result">
              rss categories
              <ul className="rss-list">{feedItems}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedPage;
