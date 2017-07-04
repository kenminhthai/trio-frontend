import React, { PureComponent } from 'react'
import ClubCard from './club-card'
import NoClubsNotification from './no-clubs-notification'

export class ClubList extends PureComponent {
  renderLoadingMessage() {
    return <p>Loading ...</p>
  }

  renderNoClubsMessage() {
    return <NoClubsNotification selectedLanguage={this.props.selectedLanguage} />
  }

  renderClubCards() {
    return this.props.clubs.map((club, index) => <ClubCard key={index} club={club} />)
  }

  render() {
    return (
      <div className="club-list">
        {
          this.props.clubs.isFetching
            ? this.renderLoadingMessage()
            : this.props.clubs.length > 0 ? this.renderClubCards() : this.renderNoClubsMessage()
        }
      </div>
    )
  }
}

ClubList.defaultProps = {
  clubs: []
}

export default ClubList
