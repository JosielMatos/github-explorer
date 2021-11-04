import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "robofriends",
    description: "search for your robot friends",
    link: "https://github.com/JosielMatos/robofriends"
}

export function RepositoryList() {
  return (
    <section className='wrapper'>
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
