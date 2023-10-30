import './AboutCard.css'
import Button from '../button/Button'

export default function AboutCard() {

    const aboutCardData = [
        {
            "heading": "Bamboo Stand",
            "content": "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list",
            "amountLeft": 101,
            "pledge": "$25"
        },
        {
            "heading": "Black Edition Stand",
            "content": "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            "amountLeft": 64,
            "pledge": "$75"
        },
        {
            "heading": "Mahogany Special Edition",
            "content": "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            "amountLeft": 0,
            "pledge": "$200"
        }
    ]

    return <div className='about-card'>
        <p className='about-heading'>About this project</p>
        <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>

        {aboutCardData.map((elem)=>  
        <div key={elem.pledge + elem.heading} className='stand-card' style={{opacity:elem.amountLeft > 0 ? `1`:`0.7`}}>
            <div className='stand-card-heading'>
                <p>{elem.heading}</p>
                <p>{`Pledge ${elem.pledge} or more`}</p>
            </div>
                <p>{elem.content}</p>
            <div className='stand-card-tail'>
                <p>{elem.amountLeft}<span>left</span></p>
                <Button onClick={()=>{}} content={elem.amountLeft > 0 ? "Select Reward": "Out of Stock"} disabled={elem.amountLeft === 0} />
            </div>
        </div>)}

       
            
       
    </div>
}