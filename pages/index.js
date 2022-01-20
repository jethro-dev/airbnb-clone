import Head from "next/head";
import {
  Header,
  Banner,
  ExploreCard,
  MediumCard,
  LargeCard,
} from "../components";
export default function Home({ exploreData, cardsData }) {
  console.log(cardsData);
  return (
    <div>
      <Head>
        <title>Airbnb | Home</title>
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-5">
        <section className="py-5 space-y-5">
          <h2 className="font-medium text-xl md:text-2xl lg:text-3xl">
            Inspiration for your next trip
          </h2>
          {/* pull some data from a server - api endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exploreData?.map((item) => (
              <ExploreCard item={item} key={item.img} />
            ))}
          </div>
        </section>

        <section className="py-5 space-y-5">
          <h2 className="font-medium text-xl md:text-2xl lg:text-3xl">
            Discover Airbnb Experiences
          </h2>
          <div className="flex overflow-x-auto scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard item={item} key={item.img} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
