import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1 , name : "Birat"},
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hackathon",
      title: "Hackathon 2025",
    },
    {
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1 , name : "Birat"},
      _id: 2,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hackathon",
      title: "Hackathon 2025",
    },
    {
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1 , name : "Birat"},
      _id: 3,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hackathon",
      title: "Hackathon 2025",
    },
  ];

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
    </>
  );
}
