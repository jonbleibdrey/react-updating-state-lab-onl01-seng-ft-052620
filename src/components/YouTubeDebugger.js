// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
        }
    }
    }

   bitrateClick = () => {
        // let newCount = this.state.count + 1
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
      }

   resolutionClick = () => {
        // let newCount = this.state.count + 1
        this.setState({
            settings: {
                bitrate: 8,
                video:{
                resolution: '720p'
                }
            }
        })
      }


    render() {
        return (
            <div>
                <button className={'bitrate'} onClick={this.bitrateClick}>change bitrate</button>
                <button className={'resolution'} onClick={this.resolutionClick}>change bitrate</button>
            </div>
        )
    }
}

export default YouTubeDebugger
