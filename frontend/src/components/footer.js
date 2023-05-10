import React, { Component } from 'react'
import './../styles/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className=''>
            <h3 className='copyright'>Copyright by CraftBridge 2023</h3>
            <div className='contactsList'>
                <ul>
                    <li>craftbridge@gmail.com</li>
                    <li>+7 (960) 140 22-66</li>
                    <li>@DiStudd</li>
                </ul>
            </div>
        </div>
      </footer>
    )
  }
}
