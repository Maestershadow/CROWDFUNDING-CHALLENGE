import './BackersCard.css'

export default function BackersCard()
{

    const backedData = [
        {
            "head": "$89,914",
            "tail": "of $100,000 backed"
        },
        {
            "head": "5,007",
            "tail": "total backers"
        },
        {
            "head": "56",
            "tail": "days left"
        }
    ]

    return (<div className='backers-card'>
                <div className="backed">
                       {backedData.map((elem)=> <div key={elem.head+elem.tail}>
                        <p>{elem.head}</p>
                        <p>{elem.tail}</p>
                       </div>)}
                </div>
                
                <div>
                      
                </div>
    </div>)
}