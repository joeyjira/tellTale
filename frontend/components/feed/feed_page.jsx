import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import GreetingContainer from "../greeting/greeting_container";
import SourceContainer from "../source/source_container";
import ArticleListContainer from "../article/article_list_container";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeedSources();
  }

  render() {
    // const { feedSources } = this.props;
    // const feedItems = feedSources.sources.map(feed =>
    //   <FeedItem key={feed.id} name={feed.name} description={feed.description} />
    // );  
    console.log(this.props);
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
              feed result
              {/*rss categories*/}
              {/*<SourceContainer />*/}
              <Switch>
                <Route path="/feed/result" component={SourceContainer} />
                <Route path="/feed/source/:sourceId" component={ArticleListContainer} />
              </Switch>

              <div className="rss-list">
                rss-list
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedPage;
