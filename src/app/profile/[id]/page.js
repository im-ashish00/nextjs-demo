export default function UserProfile({ params }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <br />
      <hr />
      <p className="text-4xl">
        Profile page{" "}
        <span className="p-2 ml-2 rounded bg-purple-500 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}