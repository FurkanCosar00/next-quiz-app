import Image from "next/image";
import Link from "next/link";

export default function FinishPage({ score, dataCategory }) {
    return (
      <>
        <div className="scoreText">
          <h1>Quiz completed <span>You scored...</span></h1>
        </div>
  
        <div className="score">
          <div className="scoreBoard">
            <div className="title">
              <Image src={dataCategory.icon} alt="" width={56} height={56}></Image>
              <h2>{dataCategory.category}</h2>
            </div>
    
            <h1>{score}</h1>
    
            <p>out of 10</p>
          </div>
    
          <Link href="/" className="playAgain">Play Again</Link>
        </div>
      </>
    )
}