import React, { PureComponent } from 'react'
import ClubCard from './club-card'
import ClubCreation from './club-creation'
import NoClubsNotification from './no-clubs-notification'

export class ClubList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showClubCreation: false
    }
  }

  renderClubCreation() {
    return (
      <ClubCreation
        onFormCancelled={() => this.setState({showClubCreation: false})}
        selectedLanguage={this.props.selectedLanguage} />
    )
  }

  renderLoadingMessage() {
    return <p>Loading ...</p>
  }

  renderNoClubsMessage() {
    return (
      <NoClubsNotification
        selectedLanguage={this.props.selectedLanguage}
        onListYourClubClicked={() => this.setState({showClubCreation: true})} />
    )
  }

  renderClubCards() {
    return this.props.clubs.map((club, index) => <ClubCard key={index} club={club} />)
  }

  render() {
    return (
      <div className="club-list">
        {
          this.state.showClubCreation
            ? this.renderClubCreation()
            : this.props.clubs.isFetching
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
