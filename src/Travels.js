import React from "react";
import Travel from "./Travel";

const travels = [
  {
    destination: "Shanghaï",
    country: "China",
    photo: "http://img1.zhytuku.china.com/images/zhycms_chinaplus/20180120/9bc167d2-7c7e-4c81-bb09-81947c0541b0.jpg?x-oss-process=image/resize,w_650",
    distance: "10000 km"
  },
  {
    destination: "Paris",
    country: "France",
    photo: "https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/node_7886/dossier-paris-patrimoine-%7C-780x340-%7C-%C2%A9-fotolia/160387-4-fre-FR/Dossier-Paris-Patrimoine-%7C-780x340-%7C-%C2%A9-Fotolia.jpg",
    distance: "0 km"
  },
  {
    destination: "Moscou",
    country: "Russia",
    photo: "https://media.routard.com/image/15/9/moscou-home-fiche.1466159.w740.jpg",
    distance: "9500 km"
  },
  {
    destination: "Marseille",
    country: "France",
    photo: "https://thumbnails.trvl-media.com/Rq9FPZa8y6QPS7gjL9ECKCxQDIU=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/179895/Marseille-59038.jpg",
    distance: "810 km"
  },
  {
    destination: "Madrid",
    country: "Spain",
    photo: "https://www.blueairweb.com/Media/Default/Destinations/MADRID_main_debfeb2a4372ef105cc5d92554e4344b-6.jpg",
    distance: "950 km"  
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
))}
  </div>
);

export default Travels;