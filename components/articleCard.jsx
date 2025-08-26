import Image from "next/image";
import "./articleCard.css"
function ArticleCard() {
    return <div className="container">
        <div className="imgContainer">
            <Image className="img" src="/images/card1.jpg" width={1920} height={1080} />
        </div>
        <p className="timeText">7 min.</p>
        <h4>Alguurlal zalhuural mon uu?</h4>
    </div>
}

export default ArticleCard;