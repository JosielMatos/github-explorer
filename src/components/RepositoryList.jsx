import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

//https://api.github.com/users/JosielMatos/repos

const repository = {
  name: "robofriends",
  description: "search for your robot friends",
  link: "https://github.com/JosielMatos/robofriends",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  return (
    <section className='repositoriesWrapper'>
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
