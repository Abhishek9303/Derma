import Image from "next/image";
import "@/public/css/moduleMain.css";
export default function Home() {
  return (
    <>
      <div className="main">
        <div className="first">
          <div className="fText">
            <div className="fText01">
              <h1>Save Your Hair's</h1>
              <h1>Save Your Skin</h1>
            </div>
            <p>
              Mauris pellentesque gravida amet dui tempor, diam nam sed eget
              semper ultrices tristique nibh id nec quam vestibulum consectetur
              ut lacus neque, scelerisque cras.
            </p>
          </div>
        </div>
        <div className="second">
          <div className="circle"></div>
          <Image
            className="image1"
            src="/images/main/image1.png"
            width={610}
            height={400}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="pg01">
        <div className="p1txt"></div>
      </div>
    </>
  );
}
