import React from 'react'
import img1 from "../assets/trustedComp/img1.png";
import img2 from "../assets/trustedComp/img2.jpg";
import img3 from "../assets/trustedComp/img3.png";
import img4 from "../assets/trustedComp/img4.png";
import img5 from "../assets/trustedComp/img5.jpg";
import img6 from "../assets/trustedComp/img6.png";

const TrustedCompany = () => {
  return (

          <section className="flex flex-col items-center  ">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">
            Trusted by Global Companies
          </h2>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 p-4 border mb-4"
            >
              <img
                src={img}
                alt={`Trusted Company ${index + 1}`}
                className="h-16 md:h-20"
              />
            </div>
          ))}
        </div>
      </section>
  )
}

export default TrustedCompany