import React, { Component } from 'react'
import './TodayMegaDeals.css'

export class TodayMegaDeals extends Component {
    state = {
        MegaDealList: [
            {
                id: 1,
                title: "Alexa Devices - Echo, Fire TV & Kindle",
                desc : "Online shopping for Echo, Fire TV & Kindle | Event Store from a great selection at ... Fire TV Stick 4K Max streaming device, Wi-Fi 6, Alexa Voice Remote",
                placeholder : "https://via.placeholder.com/280x200",
                price : "₹2199",
                rating : "⭐⭐⭐⭐",
                offer : "Up to 64% Off"
            },
            {
                id: 2,
                title: "OnePlus Nord CE2 Lite 5G"
            }
        ]
    }
    render() {
        return (
            <div>
                <h2 className='Deal-style'>TodayMegaDeals</h2>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" alt = "" src={this.state.MegaDealList[0].placeholder} />
                    <div className="card-body">
                        <h5 className="card-title title-style">{this.state.MegaDealList[0].title}</h5>
                        <p className="card-text">{this.state.MegaDealList[0].desc}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.state.MegaDealList[0].price}</li>
                        <li className="list-group-item">{this.state.MegaDealList[0].rating}</li>
                        <li className="list-group-item offer-style">{this.state.MegaDealList[0].offer}</li>
                    </ul>
                </div>
                
                </div>

                )
  }
}

                export default TodayMegaDeals