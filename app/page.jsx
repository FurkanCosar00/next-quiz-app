import data from "/app/data.json"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mainpageText">
        <h1>Welcome to the <span>Frontend Quiz!</span></h1>
        <p>Pick a subject to get started.</p>
      </div>

      <ul className="categories">
        {data.questionAndAnswers.map((quiz, index) =>
          <li key={index}>
            <Link href={`/${quiz.category}`}>
              <Image src={quiz.icon} alt="" width={56} height={56}></Image>
              <p>{quiz.category}</p>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
