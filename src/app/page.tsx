import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://utfs.io/f/067ca1d7-0d50-41ed-a63b-47953ffb7f7c-moyg8g.jpg",
  "https://utfs.io/f/83e3fe96-55ad-4711-811d-2d26e2a1d53a-11c0jq.06.21-20240312030629.png",
  "https://utfs.io/f/105ba984-4220-4747-89af-969f9f1295ab-w5kryv.jpg",
  "https://utfs.io/f/e4dd60f7-b6c3-4614-9ba5-463d013a5f4d-11jl.jpg",
  "https://utfs.io/f/8b01db3c-8934-4977-a956-5e6f9da87def-hricv8.jpg",
  "https://utfs.io/f/797fa7b8-18bb-48c9-859f-0235c3bc8b58-vg8kfj.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
      <main className="">
        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
          {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url}/>
            </div>
          ))}
        </div>
      </main>
  );
}
