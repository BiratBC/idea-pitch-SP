import { client } from "@/sanity/lib/client";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const params = { search: query || null };

  // const posts = await client.fetch(STARTUPS_QUERY);

  const {data : posts} = await sanityFetch({query : STARTUPS_QUERY, params});


  // console.log(JSON.stringify(posts));


  return (
    <>
      <section className="yellow_container">
        <h1 className="heading">Browse, Create, and Launch Your Startup</h1>
        <p className="sub-heading !max-w-3xl">
          From concept to launch—everything with{" "}
          <span className="sub-heading !font-bold !text-black">
            Idea Pitch.
          </span>
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query} ` : "All startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post : StartupTypeCard, index : Number) => <StartupCard key={post?._id} post = {post}/>)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}
