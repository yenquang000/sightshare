import Ghana from "@/assets/ghana.JPG";
import Morocco from "@/assets/morocco.JPG";
import Ocarina from "@/assets/ocarina.JPG";
import Glassesdrive from "@/assets/glassesdrive.PNG";
import Voiceletters from "@/assets/voiceletters.JPG";
import Fundraising from "@/assets/fundraising.PNG";
import Volunteering from "@/assets/volunteering.PNG";
import Interviewing from "@/assets/interviewing.JPG";
import abus2 from "@/assets/abus2.JPG";
export default function Impacts() {
  return (
    <div
      id="impacts"
      className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16"
    >
      <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
        <h2 className="text-4xl font-bold lg:text-5xl text-[#59769d] font-serif">
          Sightshare in numbers
        </h2>
        <p className="text-[#59769d] text-black font-bold">
          Sightshare is working hard to expand our projects
        </p>
      </div>

      <div className="grid gap-12 divide-y *:text-center md:grid-cols-4 md:gap-2 md:divide-x md:divide-y-0 text-[#abc9df] ">
        <div className="space-y-4">
          <div className="text-5xl font-bold">38+</div>
          <p>high schools/colleges have participated</p>
        </div>
        <div className="space-y-4">
          <div className="text-5xl font-bold">$4,000+</div>
          <p>Raised with Adopt A Hospital and YVO</p>
        </div>
        <div className="space-y-4">
          <div className="text-5xl font-bold">150+</div>
          <p>Patients were supported</p>
        </div>
        <div className="space-y-4">
          <div className="text-5xl font-bold">800+</div>
          <p>Voice letters delivered</p>
        </div>
      </div>
      <div>
        <div className="mt-12 mb-12 relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl  lg:text-5xl text-[#59769d] font-bold font-serif">
            Featured Events
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4 text-white">
          {[
            {
              title: "Ghana Eye Screening",
              img: Ghana,
              text: "With the partnership with Adoptahospital and YVO, we raised $2,000, providing free eye check-ups and healthcare services in Ghana.",
            },
            {
              title: "Morocco Eye Camp",
              img: Morocco,
              text: "Raised $1.7k+ to support Two Vision Care’s Eye Camps in Marrakech and Kelaat M’gouna, funding medical supplies for surgeries.",
            },
            {
              title: "Ocarina Class",
              img: Ocarina,
              text: "We taught visually impaired individuals to play the ocarina at VISIONS, bringing joy through music.",
            },
            {
              title: "Glasses Drive",
              img: Glassesdrive,
              text: "Re-View and Sightshare collaborate to install eyeglasses donation bins across NYC’s five boroughs.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-xl bg-[#abc9df] p-6 shadow-md text-center"
            >
              <h3 className="h-16 text-2xl font-serif font-bold flex items-center justify-center">
                {item.title}
              </h3>

              <img
                src={item.img}
                alt={item.title}
                className="mx-auto h-40 w-full rounded-lg object-cover"
              />

              <p className="mt-4 flex-1 text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className="mt-12 mb-12 relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-4xl  lg:text-5xl text-[#59769d] font-bold font-serif">
              What we do
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 text-white">
            {[
              {
                title: "Sending Voice Letters",
                img: Voiceletters,
                text: "We are organizing a campaign to deliver messages of encouragement to individuals undergoing eye surgeries. Many patients experience fear and anxiety about these procedures, and we hope to alleviate some of that burden by providing them with hope and support through our messages.",
              },
              {
                title: "Fundraising",
                img: Fundraising,
                text: "We held numerous fundraisers with YVO and with our chapters, raising over $3000 in total.",
              },
              {
                title: "Volunteering",
                img: Volunteering,
                text: "Sightshare members dedicate their time to serve the visually impaired community in weekly basis.",
              },
              {
                title: "Interviewing",
                img: Interviewing,
                text: "We have planned a series of interviews with visually impaired individuals to better understand their life and their experiences. We hope to conduct these interviews every two months, providing a consistent exploration of the challenges and successes within the visually impaired community. These amazing interviews are currently uploaded in our YouTube channel.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col rounded-xl bg-[#abc9df] p-6 shadow-md text-center"
              >
                <h3 className="h-16 text-2xl font-serif font-bold flex items-center justify-center">
                  {item.title}
                </h3>

                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto h-40 w-full rounded-lg object-cover"
                />

                <p className="mt-4 flex-1 text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold lg:text-5xl text-[#59769d] font-serif">
          Where does our fund go
        </h2>
        <p className="text-center text-lg leading-relaxed text-black font-bold mb-6">
          We are diligently working to secure adequate funding for our project.
          These funds will be used to buy white canes to deliver them to many
          different locations located in America and Korea. Our primary goal is
          to ensure the availability of these essential mobility tools for
          individuals in need. Additionally, we have established a collaborative
          partnership with Adopt A Hospital. With Adopt A Hospitals, we will use
          our funds towards the acquisition of crucial health supplies and white
          canes for hospitals in Ghana.{" "}
        </p>
        <img
          src={abus2}
          alt="Mission statement"
          className="w-full aspect-[2/1] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
