import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams} : {
  searchParams : Promise<{query?: string}>
}) {
  const query  = (await searchParams).query;
  return (
    <>
      <section className="yellow_container">
        <h1 className="heading">Browse, Create, and Launch Your Startup</h1>
        <p className="sub-heading !max-w-3xl">From concept to launch—everything with <span className="sub-heading !font-bold !text-black">Idea Pitch.</span></p>
      
      <SearchForm query={query}/>
      </section>
    </>
  );
}
